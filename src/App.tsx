import { useState } from 'react'
import { SearchInput } from './components/form/SearchInput'
import { Icon } from './components/icon/Icon'
import { IconList } from './components/icon/IconList'

export const App = () => {
    const [query, setQuery] = useState('')

    return (
        <main>
            <h1>
                <Icon name="Search" /> Icon search
            </h1>

            <form>
                <SearchInput value={query} onChange={setQuery} />
            </form>

            <div>
                <IconList query={query} />
            </div>
        </main>
    )
}
