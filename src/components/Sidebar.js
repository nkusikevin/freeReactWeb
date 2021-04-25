import React from 'react'
import close from '../assets/img/close-icon.svg'

function sidebar({isOpen,toggle}) {
    return (
        <section isOpen={isOpen} onClick={toggle}>
          <button className="close-icon" onClick={toggle}>
              <img src={close} alt=""/>
              </button> 
              <nav>
                  <ul>
                      <li>
                         <a href="#service" onClick={toggle} exact>Services</a> 
                      </li>
                      <li >
                          <a href="#portfolio" onClick={toggle}>PortFolio</a>
                      </li>
                      <li>
                          <a href="#about" onClick={toggle}>ABOUT US</a>
                      </li>
                      <li>
                         <a href="#team" onClick={toggle}>Team</a>
                      </li>
                      <li>
                         <a href="contactme" onClick={toggle}>Contact</a>
                      </li>
                  </ul>
                  </nav> 
        </section>
    )
}

export default sidebar
