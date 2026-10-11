import Function from "../../components/function";
import "../../styles/modules pages/availableFunctionsPage.css";

export default function BDA_Functions() {
    return (
        <div className="functions-page-container">
            <Function functionName={"Fragmentation horizontale"}/>
            <Function functionName={"Fragmentation verticale"}/>
            <Function functionName={"Fragmentation mixte"}/>
        </div>
    );
}