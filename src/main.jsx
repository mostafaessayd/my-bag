import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MainLayout from '../src/layouts/mainLayout.jsx'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import SideBar from './components/sideBar.jsx'
import BDALyout from './layouts/BDALayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
            <Route path='/my-bag/BDA/' element={<BDALyout />}></Route>
            <Route path='/my-bag/' element={<MainLayout />}></Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
