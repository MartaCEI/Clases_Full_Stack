
import './css/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './lib/routes/routes'
import { StrictMode } from 'react'
import reactDOM from 'react-dom'

reactDOM.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
    document.getElementById('root')
)



