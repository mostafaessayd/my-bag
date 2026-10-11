import BDA_Functions from "../modules pages/BDA/availableFunctionsPage";
import MainLayout from "./mainLayout";

export default function BDALyout() {
    return (
         <MainLayout FunctionPage={<BDA_Functions />}/>
    )
}