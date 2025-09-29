import '../../../App.css'
import '../../../components/styles/nav.css'
import { Link } from "react-router-dom"
import FadeInSection from "../../../components/functions/fadeinSection.jsx"

function App4(props) {
    return (
        <div className={`relative min-h-screen  `}>
            <FadeInSection>
                <Link to='/Art'>
                    <div className="container art">
                        <div className="box label artist ">
                            Art Portfolio
                        </div>
                    </div>
                </Link>

                <footer>
                    <text> &copy; 2025 Morgan Noonan. All rights reserved.</text>
                </footer>
            </FadeInSection>
        </div >

    );
}

export default App4;