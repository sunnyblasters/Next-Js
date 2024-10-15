import "./about.css"
// import pic from '../../images/pic1.jpg'
// import Image from "next/image"


export default function AboutHero (){

    return (
        <div>
            <div className="about-main">

                

                    <div className="imgSkills">
                       
                        <h1>My Skills</h1> 
                        <div style={{width:'100%', display:'flex', flexDirection:'column',gap:'10px'}}>
                        <p>HTML</p> 
                        <div className="container"> 
                            <div className="skill html">90%</div> 
                        </div> 
                        </div>
                    
                        <div style={{width:'100%', display:'flex', flexDirection:'column',gap:'10px'}}>
                        <p>CSS</p> 
                        <div className="container"> 
                            <div className="skill css">80%</div> 
                        </div> 
                        </div>

                        <div style={{width:'100%', display:'flex', flexDirection:'column',gap:'10px'}}>
                        <p>TYPESCRIPT</p> 
                        <div className="container"> 
                            <div className="skill typescript">75%</div> 
                        </div>
                        </div>
                    </div>
                

                    <div className="text-div">
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis accusamus quos natus error. Delectus repellendus nobis deleniti tenetur quo. Error.</p><br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, impedit. Ipsum optio nostrum architecto, obcaecati nulla veniam tempora consequuntur voluptas.</p><br/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, at sunt? Corrupti eligendi a nihil aliquam soluta neque quaerat numquam!</p>
                    </div>
            </div>
        </div>
    )
}