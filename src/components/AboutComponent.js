import React from 'react';
import './index.css';
import images from "../assets/images/Media.jpg";
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Card, Progress, Divider, Row, Col} from 'antd';

import {
  SmileOutlined,
  CarryOutOutlined,
  TeamOutlined,
  UserOutlined 
} from '@ant-design/icons';


const AboutComponent =()=>{

    return(

<Card className="about-container" id="about">

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <script src="https://kit.fontawesome.com/90b7c0adba.js" crossorigin="anonymous"></script>

    <div className="intro-content">
        <h1> About </h1>
        <hr/>
        <p className="about-paragraph">I am a full stack developper,I decided to take a class of programming because liked it firstly and i wanted to improve my skills and knowledge, i wanted to be a software developer and even more,i really wanted to go deeper in coding. Constantly learning new languages through-out the pendamic made me realise how much i love coding and how i see my future in the feild compared to the work I did earlier. Interning for almost 5 months has been extreamly exciting and helped me learn so many new things.</p>


        <div className="row">
            <div classname="col1">
                <img src={images}alt="photos" className="photos"/>
            </div>
            <div className="col2">
            <h1>UI/UX Designer & Web Developer.</h1>
            <p className="about-paragraph">
            more specifically, I do designs and I create websites, i also I do design mockups and use them to create websites, that really push me to learn more and more web designer and developer .</p>
            <div className="birth-row">
                    <ul>
                        <li> <span> Birthday:</span> 15 February 1995</li>
                        <li><span>Social Media: </span>Twitter & Instagram</li>
                        <li><span>Phone: </span>+250 783411559</li>
                        <li><span> City: </span> Kigali, Rwanda</li>
                    </ul>
                    <ul>
                    <li> <span> Age: </span>  25</li>
                        <li><span>Email: </span>meddyu15@gmail.com</li>
                        <li><span>Degree: </span>Bachelor’s</li>
                        <li><span> Freelance: </span> Available</li>
                    </ul>
            </div>
            <p>I primarily use Node Js and React Js,but picking up a new framework or language ins't a poblem. i have extensive programming experience and i am confortable developing on the frontend or backend as well as setting up or managing infrastructure. </p>
            </div>
            </div>
     </div>



<div className="facts">
        <h1> Facts </h1>
        <hr/>  
        <p> Full-stack developer was the most selected job title. A full-stack developer usually knows between five and six major programming languages and frameworks. Executives typically consider themselves to be full-stack developers. They are usually more comfortable using different technologies mostly because they tend to have more experience and have been in the industry longer.</p>

        <div className="count-down-row">
        {/* <Divider orientation="left">Sub-Element Align Full</Divider> */}
        <Row justify="space-around" >
      <Col span={4} className="numbers" ><SmileOutlined  className="emoji"  /> 243 
      <p>Happy Clients  </p></Col>
      <Col span={4} className="numbers"><CarryOutOutlined className="emoji"/>534
      <p>Projects </p></Col>
      <Col span={4} className="numbers"><TeamOutlined className="emoji" />912
      <p>Hours Of Support </p></Col>
      <Col span={4} className="numbers"><UserOutlined className="emoji" />94
      <p>Hard Workers</p></Col>
      </Row>
      </div>
        </div>




<div className="skills-content">
    <h1>Skills</h1>
    <hr/> 
</div>

<div className="skills-content-pa">
<p >  Advanced: Node Js and React.</p> 
<p>  Familliar: PHP5, MySQL, HTML5, CSS3,MongoDB, JavaScript and Bootstrap.</p>
</div>

<div className="row">
    <div className="col">

    <div style={{ width: 400, margin:30, fontSize:20}}>
    HTML
    <Progress percent={98} size="small" />
    CSS
    <Progress percent={96} size="small" status="active" />
    JAVASCRIPT
    <Progress percent={99} size="small" status="active" />
    React
    <Progress percent={100} size="small" />
  </div>
    </div>
    <div className="col">
  
    <div style={{ width: 400, margin:30, fontSize:20 }}>
    PHP
    <Progress percent={82} size="small" />
    WORDPRESS/CMS
    <Progress percent={90} size="small" status="active" />
    PHOTOSHOP
    <Progress percent={95} size="small" status="active" />
    Node Js
    <Progress percent={100} size="small" />
  </div>

    </div>
</div>



<div id="skills-section" class="text-center skills">
        <div class="container">
         
          <div class="space"></div>
          <div class="rows">
            <div class="col-md-4 col-sm-4">
              <div class="service">
                <i class="fa fa-database"></i>
                <h4>MongoDB</h4>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="service">
                <i class="fab fa-node-js"></i>
                <h4>NodeJS</h4>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="service">
                <i class="fab fa-js-square"></i>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>



          <div class="space"></div>
          <div class="rows">
            <div class="col-md-4 col-sm-4">
              <div class="service">
                <i class="fa fa-database"></i>
                <h4>Express</h4>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="service">
                <i class="fab fa-react"></i>
                <h4>React</h4>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="service">
                <i class="fab fa-php"></i>
                <h4>PHP</h4>
              </div>
            </div>
          </div>


          <div class="space"></div>
          <div class="rows">
            <div class="col-md-4 col-sm-4">
              <div class="service">
                <i class="fab fa-html5"></i>
                <h4>HTML</h4>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="service">
                <i class="fab  fa-css3"></i>
                <h4>CSS</h4>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="service">
                <i class="fab fa-bootstrap"></i>
                <h4>Bootstrap</h4>
              </div>
            </div>
          </div>




        </div>
      </div>
	  
      




</Card>
    )

}

export default AboutComponent;