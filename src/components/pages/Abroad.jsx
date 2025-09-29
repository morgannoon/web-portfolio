import "../styles/abroad.css";
import Abroad1 from './abroadSection/Abroad1.jsx'
import Abroad2 from './abroadSection/Abroad2.jsx'
import Abroad3 from './abroadSection/Abroad3.jsx'


export default function Abroad() {
    return (
        <>
            <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
                <div className="snap-always snap-center">
                    <Abroad1 />
                </div>
                <div className="snap-always snap-center">
                    <Abroad2 />
                </div>
                <div className="snap-always snap-center">
                    <Abroad3 />
                </div>
            </div>
        </>
    )
}