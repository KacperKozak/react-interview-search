import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './styles/global.css'

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root'),
)
