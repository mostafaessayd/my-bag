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




import { useState } from 'react';
import '../styles/layouts/mainLayout.css';
import SideBar from '../components/sideBar';
import BDA_Functions from '../modules pages/BDA/availableFunctionsPage';

export default function MainLayout() {
const [sidebarOpen, setSidebarOpen] = useState(false);

return (
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
            <BDA_Functions />
        </div>

    </div>
);

}
