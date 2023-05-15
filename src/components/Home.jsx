import React from 'react'
import profile from '../assets/images/profile.png'
import coding from "../assets/images/portfolio-icons/code.png"
import design from "../assets/images/portfolio-icons/design.png"
import resume from "../assets/images/portfolio-icons/resume.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Home = (props) =>{
    const {footer, setFooterDown} = props;
    const checkFooter = (status) =>{
        !status&& setFooterDown(true);
    }
    const [indexHovered, setIndexHovered] = useState(null);
    const handleMouseEnter = (idx) =>{
        setIndexHovered(idx)
    }
    const handleMouseLeave = () =>{
        setIndexHovered(null)
    }
    const categories = [
        {src: coding, alt: "coding symbol", heading: "Coding", title: "Coding Portfolio", path: "coding"},
        {src: design, alt: "design symbol", heading: "Inst. Design", title: "Instructional Design Portfolio", path: "inst-design"},
        {src: resume, alt: "resume symbol", heading: "Resume", title: "Resume", path: "resume"}
    ]
    return (
        <div id='home-body'>
            <div id='home-container'>
                <div className='flex-item' id='profile-img'>
                    <img src={profile} alt="chris profile"/>
                </div>
                {/* <h3>About Me</h3> */}
                <div className='' id='about'>
                    <h2>About Chris</h2>
                    <p>I'm a collaborative programmer and educator with foundational skills in full-stack web development (Python/Flask & MERN) and instructional design. Intellectually speaking, my focus lies at the intersection of social ethics, critical pedagogy, and emerging technologies (right now I'm doing a deep dive into AI ethics!) I'm always expanding my programming skills-set and seeking out new project ideas. The portfolios below capture what I have, am, and will work on. Always down to <a href="">chat!</a>.</p><br></br>
                    <p>Toggle through my portfolios by using the buttons below</p><br></br>
                    <p><em>¡Pa'Lante!</em></p>
                </div>
            </div>
            <div id='project-categories'>
                {categories.map((category, idx) =>(
                    <div className='portfolios active-hover' onMouseEnter={e => handleMouseEnter(idx)} onMouseLeave={e => handleMouseLeave(idx)}>
                        <div className="category" title={category.title}>
                            <Link>
                            <img to={`/${category.path}`} className={`cat-pic ${idx === indexHovered? "shake":''}`}   src={category.src} alt={category.alt} />
                            </Link>
                            <Link to={`/${category.path}`} className={`${idx === indexHovered? "active-heading link":'link'}`} onClick={ e => checkFooter(footer)}>{category.heading}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;