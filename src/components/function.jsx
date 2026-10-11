import "../styles/components/function.css";

export default function Function({functionName}) {
    return (
        <div className="one-function-container">
            <div className="one-function">
                <div className="function-name">
                    {functionName}
                </div>
                <div className="run-button-container">
                    <button>Visit</button>
                </div>
            </div>
        </div>
    );
}