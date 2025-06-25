class FetchCache {
    private cache = new Map<string, { data: any, ttlMs: number }>
    private pendingRequests = new Map<string, Promise<any>>();

    get<T>(key: string): T | null {
        const entry = this.cache.get(key) || null
        const expiry = entry?.ttlMs

        if (expiry && Date.now() > expiry) {
            this.cache.delete(key)
            return null
        }

        return entry ? entry.data as T : null
    }

    set(key: string, data: any) {
        const ttlMs = Date.now() + 5 * 60 * 1000
        this.cache.set(key, { data, ttlMs })
    }

    hasValid(key: string): boolean {
        const entry = this.cache.get(key) || null
        const expiry = entry?.ttlMs

        if (expiry && Date.now() > expiry) {
            this.cache.delete(key)
            return false
        }

        return this.cache.has(key)
    }

    clear(key: string) {
        this.cache.delete(key)
    }

    async fetch<T>(url: string): Promise<T> {
        if (this.pendingRequests.has(url)) {
            return this.pendingRequests.get(url)
        }

        const fetchData = fetch(url)
            .then((resData) => {
                if (!resData.ok) throw new Error('Erro ao carregar dados')
                return resData.json()
            })
            .then((data: T) => {
                this.set(url, data)
                return data
            })
            .finally(() => {
                this.pendingRequests.delete(url)
            })

        this.pendingRequests.set(url, fetchData)

        return fetchData
    }
}

export const fetchCache = new FetchCache()
