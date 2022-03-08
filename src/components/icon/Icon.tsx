import { IconNodeChild, icons } from 'lucide'
import { createElement } from 'react'

export interface IconProps {
    name: string
}

export const Icon = ({ name }: IconProps) => {
    const [, , iconNode] = icons[name] || icons.Slash

    if (!iconNode) return null

    return <i>{createIcon(iconNode)}</i>
}

export const defaultAttributes = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
}

export const createIcon = (iconNode: IconNodeChild[], size = 24) => {
    return createElement(
        'svg',
        {
            ...defaultAttributes,
            width: size,
            height: size,
        },
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
    )
}
