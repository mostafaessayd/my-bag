import '../styles/components/module.css';

export default function Module({moduleName , icon}) {
    return (
        <div className="one-module-container">
            <div className="button-of-one-module">
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