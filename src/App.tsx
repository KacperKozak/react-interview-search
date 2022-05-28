import { Icon } from './components/icon/Icon'
import { IconList } from './components/icon/IconList'
import icons from './data/icons.json'

export const App = () => {
    return (
        <main>
            <h1>
                <Icon name="Search" /> Icon search
            </h1>
            <div>
                <IconList list={icons} />
            </div>
        </main>
    )
}
