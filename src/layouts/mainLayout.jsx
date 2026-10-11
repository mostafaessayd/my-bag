// import '../styles/layouts/mainLayout.css';
// import SideBar from '../components/sideBar';

// export default function MainLayout() {
//     return (
//         <div className="main-layout-container">
//             <div className="side-bar-container">
//                 <SideBar />
//             </div>
//             <div className="main-content-container">

//             </div>
//         </div>
//     )
// }



import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import '../styles/layouts/mainLayout.css';
import SideBar from '../components/sideBar';
import BDA_Functions from '../modules pages/BDA/availableFunctionsPage';
import BDALyout from './BDALayout';

export default function MainLayout({ FunctionPage }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
       
            <div className="main-layout-container">
                <button
                    className="menu-button"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Toggle sidebar"
                >
                    ☰
                </button>

                <div
                    className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
                    onClick={() => setSidebarOpen(false)}
                />

                <div
                    className={`side-bar-container ${sidebarOpen ? 'open' : ''}`}
                >
                    <SideBar />
                </div>

                <div className="main-content-container">
                    {FunctionPage}
                </div>

            </div>
        </>
    );

}
