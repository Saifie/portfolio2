import React from 'react'
import {FaGithub,FaHandPaper,FaNode} from "react-icons/fa"
import {AiFillHtml5,AiFillFire} from  "react-icons/ai"
import {DiCss3,DiSass,DiReact,DiMongodb,DiMysql,DiPython,DiNpm,DiPhp} from  "react-icons/di"
import {SiJavascript} from  "react-icons/si"
import {GiElectric} from  "react-icons/gi"
import "./index.css"
import Flip from "react-reveal/Flip"
import Bounce from "react-reveal/Bounce"
export default function Technology() {
	return (
		<section className="section-tech">
		<Flip>
		<h1>What Can <span>I Do</span></h1>
		</Flip>
		
			<div className="tecg-main">
			<div className="tech-main">
			<Bounce>
				<div className="tech-icons">
		<div>
			<AiFillHtml5/>
			<p>Html 5</p>
		</div>
		<div>
			<DiCss3/>
			<p>Css 3</p>
		</div>
		<div>
			<DiSass/>
			<p>Sass</p>
		</div>
		<div>
			<SiJavascript/>
			<p>Javascript</p>
		</div>

		<div>
			<DiReact/>
			<p>React</p>
		</div>

		<div>
			<FaNode/>
			<p>Node js</p>
		</div>

		<div>
			<DiMongodb/>
			<p>Mongo db</p>
		</div>
		<div>
			<DiNpm/>
			<p>Npm</p>
		</div>
		<div>
			<DiMysql/>
			<p>Mysql</p>
		</div>
		<div>
			<DiPhp/>
			<p>Php</p>
		</div>
		<div>
			<DiPython/>
			<p>Python</p>
		</div>
		<div>
			<AiFillFire/>
			<p>Firebase</p>
		</div>
		
			</div>


			</Bounce>
					<div className="tech-line">
			<div className="techh-line">

			<GiElectric/>
			<p>Experience designing and programming web pages.</p>

				
			</div>
			<div className="techh-line">
			<GiElectric/>
			<p>Develop highly interactive front end/User interfaces for your website and web application</p>

				
			</div>
			<div className="techh-line">
			<GiElectric/>
			<p>understanding of aesthetic ,design,problem-solving skills,critical thinking troubleshooting and bugs.</p>
				
			</div>

			<div className="techh-line">
			<GiElectric/>
			<p>Integration of third party services such as Firebase /AWS.</p>
				
			</div>

			<div className="techh-line">
			<GiElectric/>
			<p>Creating application backend in Node js Express with Mongo db.</p>				
			</div>
				
			</div>
			


				
			</div>
			<div className="tech-img">
				<img src="/images/tech.svg" alt="tech"/>
			</div>


				
			</div>
		</section>
	)
}