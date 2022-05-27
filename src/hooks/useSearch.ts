import { useMemo } from 'react'

export const useSearch = <T>(list: T[], keys: (keyof T)[], searchQuery: string): T[] => {
    const query = searchQuery.trim().toLowerCase()

    return useMemo(() => {
        if (!query) return list

        return list.filter((item) => {
            return keys.some((key) => {
                const itemValue = item[key]

                if (typeof itemValue === 'string') {
                    return itemValue.includes(query)
                }

                if (Array.isArray(itemValue)) {
                    return itemValue.some((value) => value.toString().includes(query))
                }

                return false
            })
        })
    }, [query, list])
}
