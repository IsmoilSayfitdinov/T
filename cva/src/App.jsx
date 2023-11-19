import './App.css'
import Ci from './components/MyContacts/Ci'
import Nav from './components/Nav/Nav'
import Banner from './components/banner/Banner'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className='containerMain'>
       <div className='container'>
       <Nav/>
       <Banner/>
       <Projects/>
       <Ci/>
       </div>
    </div>
  )
}

export default App
