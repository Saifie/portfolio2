import React,{useState} from 'react'
import RubberBand from "react-reveal/RubberBand"
import Zoom from "react-reveal/Zoom"
import Jello from "react-reveal/Jello"
import edu from "./data.js"
import "./index.css"
import {FaAngleDoubleRight} from "react-icons/fa"

export default function Education() {
	const [education,setEducation] =useState(edu)
	const [value,setValue] =useState(0)
	const {title,description,date}=education[value]
	return (
		<>

		<section className="section-edu">
		<RubberBand>
		<h1><span className="edu-span">Ed</span>ucation </h1>
			
		</RubberBand>
		
		<div className="underline">-</div>


		<div className="section-edu-cont">
		<Jello>
			<div className="edu-img">
				<img src="/images/edu.svg" alt=""/>	

				</div>
		</Jello>
				
		
			<div className="btn-wrap">
			{
				education.map((item,index)=>(
			
			<button className={index===value ?"btn active":"btn"} key={index}
			onClick={()=>setValue(index)}>
				{item.title}
			</button>

			))
			}

			<div className="edu-div">
				<h5>{date}</h5>
				{description.map((item,index)=>(
					<div className="edu-map">
					<FaAngleDoubleRight className="right-icon"></FaAngleDoubleRight>
					<Zoom Right>
						<p key={index}>{item}</p>
					</Zoom>
					
					</div>

					))}
				
			</div>

			</div>	

		</div>
		
			

		

		
	


		</section>
		
			
		</>
	)
}