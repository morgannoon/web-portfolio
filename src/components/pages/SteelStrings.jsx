import "../styles/steel.css";
import Steel1 from './steelSection/steel1.jsx'
import Steel2 from './steelSection/steel2.jsx'

export default function SteelStrings() {
    return (
        <>
            <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
                <div className="snap-always snap-center">
                    <Steel1 />
                </div>
                <div className="snap-always snap-center">
                    <Steel2 />
                </div>
                
            </div>
        </>
    )
}