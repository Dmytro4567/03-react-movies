import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './global.css'
import App from './components/App/App.tsx'
import 'modern-normalize'
import "./global.css"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
