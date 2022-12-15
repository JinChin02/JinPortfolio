import React from 'react'
import Header from './Header'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import Welcome from './Welcome'
import Resume from './Resume';
import Data from '../Data/data.json'

export default function PortfolioApp() {

  return (
    <div>
        <Header />
        <Welcome data={Data}/>
        <About data={Data}/>
        <Resume data={Data}/>
        <Projects data={Data}/>
        <Contact/>
    </div>
  )
}
