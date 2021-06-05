import React,{useState} from 'react'
import "./index.css"
import projects from "./data.js"
import Zoom from "react-reveal/Zoom"
import Swing from "react-reveal/Swing"

export default function Project() {
	const [project,setProject] =useState(projects)
	const [value,setValue] =useState(0)
	const {title,description,image}=project[value]
	return (
		<>
		<section className="project-section">
	<div className="section-wrap">
	<Swing><h1><span>Proj</span>ects</h1></Swing>
	<div className="cont">
			<div className="wrapper">


	{project.map((button,index)=>(
		<button className={index===value ?"button-project activ" :"button-project"} 
		key={index}
		onClick={()=>setValue(index)}>{button.title}</button>))}
	</div>




	<div className="project-img">
			{image.map((item,index)=>(
				<Zoom>
			<div>
			
				<img className="for" key={index} src={`${item}`} alt={`${title}`}/>
			
			
			<p>{description[index]}</p>
			</div>

			
			</Zoom>))}

		
	</div>
		
	</div>
	
		
	

		
	</div>

		</section>
			
		</>
	)
}