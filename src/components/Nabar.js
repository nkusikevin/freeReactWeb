import React,{useEffect} from 'react'
import ubuntu from '../assets/ubuntu.png'
function Nabar({toggle}) {
    const changeNav = ()=>{
if(window.scrollY >10){
document.getElementById('mainNav').className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"
}else{
    document.getElementById('mainNav').className="navbar navbar-expand-lg navbar-dark fixed-top"
}
    }
    useEffect(() => {
        window.addEventListener('scroll' ,changeNav)
        return()=>{
            document.removeEventListener('scroll',changeNav)
        }
    }, [])
    return (
         <nav  id="mainNav" className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={ubuntu} alt="NKUSI_kev" /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" onClick={toggle} aria-label="Toggle navigation">
                    
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse nav-linker" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto ">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nabar
