import { Icon } from './Icon'
import icons from './icons.json'

export const IconList = () => {
    return (
        <>
            {icons.map((icon) => (
                <Icon key={icon.name} name={icon.name} />
            ))}
        </>
    )
}
