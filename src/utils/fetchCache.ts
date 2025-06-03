class FetchCache {
    private cache = new Map<string, any>

    get(key: string): Map<string, any> | null {
        const entry = this.cache.get(key) || null

        return entry
    }

    set(key: string, data: any) {
        this.cache.set(key, data)
    }

    hasValid(key: string): boolean {
        return this.cache.has(key)
    }

    clear(key: string) {
        this.cache.delete(key)
    }
}

export const fetchCache = new FetchCache()
