import React from 'react';
import './index.css';
import {Card} from 'antd';
import images from "../assets/images/images.jpg";
const HomeComponent =()=>{

    return(

        <Card className="home-container" id="home">

   <div className="paragraph-container">
    <div className="paragraph">
      <h1>Uwitonze Mediatrice</h1>
      <p>I'm A Full-Stack Web Developer</p>
    </div> 
  </div>
            
        </Card>
    )

}

export default HomeComponent;