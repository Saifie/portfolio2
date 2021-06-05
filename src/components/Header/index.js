import LightSpeed from "react-reveal/LightSpeed"
import React from 'react'

import classes from "./index.module.css"
import Typwriter from "typewriter-effect";
import {FaGithub,FaHandPaper} from "react-icons/fa"
import {AiFillGoogleCircle,AiFillFacebook,AiFillLinkedin} from "react-icons/ai"
import {DiStackoverflow} from "react-icons/di"

import {GiHand} from "react-icons/gi"

export default function Header() {
	return (
		<>
		

		<div className={classes.main}>
		<LightSpeed Top>
		<div className={classes.intro}>
		<h2>
			<Typwriter
			onInit={(typewriter)=>{
				typewriter
				.typeString("i'm saifie! ")
				.pauseFor(2000)
				.deleteAll()
				.typeString("want to talk ?")
				.pauseFor(2000)
				.deleteAll()
				.typeString("Lets Talk...")
				.start();
			}}

			/>

		</h2>
		<h3>
			hey everyone <span >
				<GiHand style={{color:"#fbd89e",textShadow:"0 2px 3px rgba(0,0,0,0.3)"}}
		className={classes['span-head']}/></span>	 | I'm software developer | Mechanical engineer|
			Youtuber | learn new skills |programmer | Love Exploring The World | Open Source Contributor <span>&#128293;</span> | Tech Writer.
		</h3>

		<div>

		<div  style={{background:"black"}}className={classes['icony-wrap']} >

		<FaGithub style={{color:"#eee"}}
		className={classes.icony}/>
			</div>

		<div style={{background:"#Db4a39"}} className={classes['icony-wrap']} >
		<AiFillGoogleCircle style={{color:"#fff"}}
		className={classes.icony}/>
		</div>
		<div  style={{background:"#ee8236"}}className={classes['icony-wrap']} >

		<DiStackoverflow style={{color:"#eee"}}
		className={classes.icony}/>
			</div>
			<div  style={{background:"#0e76a8"}}className={classes['icony-wrap']} >

		<AiFillLinkedin style={{color:"#eee"}}
		className={classes.icony}/>
			</div>


		<div style={{background:"#3b5998"}} className={classes['icony-wrap']} >
		<AiFillFacebook style={{color:"#fff"}}
		className={classes.icony}/>
		</div>
		
	
			
		</div>

		<div>
		<button>Hired Me</button>
		<button>Resume</button>
		</div>
		</div>
		</LightSpeed>

		<div className={classes.header}>
		<img src="/images/head.svg" alt=""/>
		</div>

		</div>
		

			
		</>
	)
}