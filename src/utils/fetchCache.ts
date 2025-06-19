class FetchCache {
    private cache = new Map<string, { data: any, ttlMs: number }>

    get(key: string): { data: any } | null {
        const entry = this.cache.get(key) || null
        const expiry = entry?.ttlMs

        if (expiry && Date.now() > expiry) {
            this.cache.delete(key)
            return null
        }

        return entry
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
}

export const fetchCache = new FetchCache()
