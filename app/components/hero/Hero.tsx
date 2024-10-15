import './hero.css';


export default function Hero() {
  return (
    <div>
        <div className="main">
          <h1>Hi I am <span>Sohail Rasheed.</span></h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>Blanditiis veritatis accusamus excepturi perferendis, eum iste<br/> iure dolorem veniam delectus voluptates?</p>
          <div className='btn'>
          <button className='her-btn'>About Me</button>
          <button className='her-btn'>Read More</button>
          </div>
        </div>
    </div>
  );
}