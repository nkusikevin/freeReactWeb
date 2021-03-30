import React from 'react'

function Team() {
    const team =[
        {
            name:'Kay Garland',
            role:'Lead Designer',
            image:'1.jpg'
        },  {
            name:'Larry Parker',
            role:'Lead Marketer',
            image:'2.jpg'
        },  {
            name:'Diana Petersen',
            role:'Lead Developer',
            image:'3.jpg'
        }
    ]
    return (
         <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {team.map((person,index)=>(
                    <div className="col-lg-4" key={index}>
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={require(`../assets/img/team/${person.image}`).default} alt="" />
                            <h4>{person.name}</h4>
                            <p className="text-muted">{person.role}</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>))}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    )
}

export default Team
