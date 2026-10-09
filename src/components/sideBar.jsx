import '../styles/components/sideBar.css';
import Module from './module';

export default function SideBar() {
    return (
        <>
            <div className="logo-container">

            </div>
            <div className="modules-container">
                <Module moduleName={"BDA"} />
                <Module moduleName={"RAV1"} />
                <Module moduleName={"SD1"} />
                <Module moduleName={"AAC"} />
                <Module moduleName={"MODSIM"} />
                <Module moduleName={"AND"} />
                <Module moduleName={"RGPD"} />
                <Module moduleName={"IOT"} />
            </div>
        </>
    );
}