import { IconItem } from '../../types'
import { Icon } from './Icon'

interface IconListProps {
    list: IconItem[]
}

export const IconList = ({ list }: IconListProps) => {
    return (
        <>
            {list.map((icon) => (
                <Icon key={icon.name} name={icon.name} />
            ))}
        </>
    )
}
