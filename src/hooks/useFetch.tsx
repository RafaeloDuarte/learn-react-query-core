import { useCallback, useEffect, useState } from "react"
import { fetchCache } from "../utils/fetchCache"

function useFetch<T>(url: string, poolingInterval: number = 0) {
    const [data, setData] = useState<T | undefined>(() => fetchCache.get(url) as T || undefined)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | undefined>(undefined)

    const fetchData = useCallback(async () => {
        try {
            const resData = await fetchCache.fetch<T>(url)

            fetchCache.set(url, resData)
            setData(resData)
        } catch (err) {
            setError(err as Error)
        } finally {
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        if (fetchCache.hasValid(url)) return

        fetchData()
    })

    useEffect(() => {
        if (poolingInterval === 0) return

        const intervalId = setInterval(fetchData, poolingInterval)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return { data, loading, error, refetch: fetchData }
}

export default useFetch