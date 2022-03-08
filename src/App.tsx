import { Icon } from './components/icon/Icon'
import { IconList } from './components/icon/IconList'

export const App = () => {
    return (
        <main>
            <h1>
                <Icon name="Search" /> Icon search
            </h1>

            <form>
                <code>// TODO search form</code>
                <br />
                <br />
            </form>

            <div>
                <IconList />
            </div>
        </main>
    )
}
