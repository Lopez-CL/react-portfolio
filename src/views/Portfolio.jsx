import React from "react";
// Coding interface imports
import Carousel from "../components/Carousel";
import Projects from "../components/Projects";
import { edtechIcons, codeProjs, langIcons, modules } from "../components/data";
import { useParams } from "react-router-dom";
const Portfolio = () =>{
    let skills = [];
    let projs = [];
    const {str} = useParams();
    if(str === 'coding'){
        skills = langIcons
        projs = codeProjs
    }
    else if((str === 'inst-design')){
        skills = edtechIcons
        projs = modules
    }
    return (
        <div>
                <Carousel skills = {skills} />
                <Projects projects = {projs}/>
        </div>
    )
}

export default Portfolio;