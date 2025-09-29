import "../styles/pill.css";
import Pillscribe1 from './pillSection/Pillscribe1.jsx'
import Pillscribe2 from './pillSection/Pillscribe2.jsx'
import Pillscribe3 from './pillSection/Pillscribe3.jsx'


export default function Pillscribe(){
    return(
         <>
                   <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
                       <div className="snap-always snap-center">
                           <Pillscribe1 />
                       </div>     
                       <div className="snap-always snap-center">
                           <Pillscribe2 />
                       </div>     
                       <div className="snap-always snap-center">
                           <Pillscribe3 />
                       </div>         
                   </div>
               </>
    )
}