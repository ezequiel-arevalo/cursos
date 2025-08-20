import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import '@/assets/css/global.css'
import { AppRouter } from './routes/AppRouter.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)
