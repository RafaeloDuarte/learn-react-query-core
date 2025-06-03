import { useEffect, useState } from "react"
import { fetchCache } from "../utils/fetchCache"

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | undefined>(() => fetchCache.get(url) as T || undefined)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | undefined>(undefined)

    useEffect(() => {
        if (fetchCache.hasValid(url)) return

        const fetchData = async () => {
            try {
                const res = await fetch(url)
                if (!res.ok) throw new Error('Erro ao carregar dados')
                const resData = await res.json()

                fetchCache.set(url, resData)
                setData(resData)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    })

    return { data, loading, error }
}

export default useFetch