import { useSearch } from '../../hooks/useSearch'
import { Icon } from './Icon'
import icons from './icons.json'

interface IconListProps {
    query: string
}
;[]
export const IconList = ({ query }: IconListProps) => {
    const results = useSearch(icons, ['name', 'tags'], query)

    return (
        <>
            {results.map((icon) => (
                <Icon key={icon.name} name={icon.name} />
            ))}
        </>
    )
}
