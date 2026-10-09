
import '../styles/components/sideBar.css';
import Module from './module';

import {
    Database,
    Network,
    Server,
    GitBranch,
    Cpu,
    Binary,
    ShieldCheck,
    Radio
} from 'lucide-react';

import { ShoppingBag } from 'lucide-react';

export default function SideBar() {
    return (
        <>

            <div className="logo-container">
                <div className="logo-icon">
                    <ShoppingBag size={25} strokeWidth={1.8} />
                    <span className="logo-icon-dot"></span>
                </div>

                <div className="logo-text">
                    <span className="logo-my">my</span>
                    <span className="logo-bag">Bag</span>
                    <span className="logo-version">WORKSPACE</span>
                </div>
            </div>

            <div className="modules-container">
                <Module
                    moduleName="BDA"
                    icon={<Database size={20} />}
                />

                <Module
                    moduleName="RAV1"
                    icon={<Network size={20} />}
                />

                <Module
                    moduleName="SD1"
                    icon={<Server size={20} />}
                />

                <Module
                    moduleName="AAC"
                    icon={<GitBranch size={20} />}
                />

                <Module
                    moduleName="MODSIM"
                    icon={<Cpu size={20} />}
                />

                <Module
                    moduleName="AND"
                    icon={<Binary size={20} />}
                />

                <Module
                    moduleName="RGPD"
                    icon={<ShieldCheck size={20} />}
                />

                <Module
                    moduleName="IOT"
                    icon={<Radio size={20} />}
                />
            </div>
        </>
    );
}