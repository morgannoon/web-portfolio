
import './App.css'
import './components/styles/nav.css'
import App1 from './components/pages/appSection/app1.jsx'
import App2 from './components/pages/appSection/app2.jsx'
import App3 from './components/pages/appSection/app3.jsx'
import App4 from './components/pages/appSection/app4.jsx'


function App() {

  return (
    <>
    
      <div className="snap-y snap-mandatory overflow-hidden overflow-y-scroll h-screen ">
        <div className="snap-always snap-center">
          <App1 />
        </div>
        <div className="snap-always snap-center">
          <App2 />
        </div>
        <div className="snap-always snap-center">
          <App3 />
        </div>
       {/*} <div className="snap-always snap-center">
          <App4 />
        </div>*/}
      </div>
    </>
  )
}

export default App
