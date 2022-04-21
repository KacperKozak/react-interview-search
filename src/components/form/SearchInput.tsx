interface SearchInputProps {
    value: string
    onChange(value: string): void
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
    return (
        <input
            type="search"
            value={value}
            onChange={({ target }) => onChange(target.value)}
        />
    )
}
