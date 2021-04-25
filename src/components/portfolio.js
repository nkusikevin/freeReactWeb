import React from 'react'
function portfolio() {
    const port = [
        {
            title:"Threads",
            caption:"Illustration",
            image:"01-thumbnail.jpg"
        },
         {
            title:"Explore",
            caption:"Graphic Design",
            image:"02-thumbnail.jpg"
        }, {
            title:"Finish",
            caption:"Identity",
            image:"03-thumbnail.jpg"
        }, {
            title:"Lines",
            caption:"Branding",
            image:"04-thumbnail.jpg"
        }, {
            title:"SouthWest",
            caption:"Website design",
            image:"05-thumbnail.jpg"
        }, {
            title:"Window",
            caption:"Photgraphy",
            image:"06-thumbnail.jpg"
        }
    ]
    return (
         
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                {port.map((port,index)=>(
                    <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={require(`../assets/img/portfolio/${port.image}`).default} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">{port.title}</div>
                                <div className="portfolio-caption-subheading text-muted">{port.caption}</div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </section>
    )
}

export default portfolio
