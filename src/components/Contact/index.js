import React from 'react'
import "./index.css"
import {FaWhatsappSquare} from "react-icons/fa"
import {AiOutlineMail,AiFillPhone} from "react-icons/ai"


export default function Contact() {
	return (
		<section className="section-contact">
		<h1><span>Con</span>tact</h1>
		<h6>Wanna Discuss a Project Or just saying  hey ?  Well My inbox is open for everyone.</h6>



		<div className="contact-grid">
		<div className="contact-info">

<div className="contact-single">
<h1>Email</h1>
<div className="contact-icon">
<AiOutlineMail/>

</div>
<p>saifs252525@gmail.com</p>

</div>


<div className="contact-single">
<h1>Whatsapp</h1>
<div className="contact-icon">
<FaWhatsappSquare/>

</div>
<p>+923049289947</p>

</div>

<div className="contact-single">
<h1>Phone</h1>
<div className="contact-icon">
<AiFillPhone/>

</div>
<p>+92349004214</p>

</div>


</div>
		
		</div>
			
		</section>
	)
}