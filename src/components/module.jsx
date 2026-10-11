import { useNavigate } from 'react-router-dom';

import '../styles/components/module.css';

export default function Module({moduleName , icon , path}) {
    const navigate = useNavigate();
    return (
        <div className="one-module-container">
            <div className="button-of-one-module"
            onClick={() => navigate(path)}>
                <div className="module-icon-container">
                    {icon}
                </div>
                <div className="module-name-container">
                    {moduleName}
                </div>
            </div>
        </div>
    )
}