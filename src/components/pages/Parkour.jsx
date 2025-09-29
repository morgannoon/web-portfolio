import "../styles/Parkour.css";
import Parkour1 from './parkourSection/Parkour1.jsx'
import Parkour2 from './parkourSection/Parkour2.jsx'

export default function Parkour() {
    return (
        <>
            <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
                <div className="snap-always snap-center">
                    <Parkour1 />
                </div>
                <div className="snap-always snap-center">
                    <Parkour2 />
                </div>
            </div>
        </>
    )
}