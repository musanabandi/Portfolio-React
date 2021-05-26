import React from 'react';
import './index.css';
import {Card} from 'antd';
const ResumeComponent =()=>{

    return(

        <Card className="resume-container" id="resume">
 
   
<div className="Resume-content">
    <h1>Resume</h1>
    <hr/> 
</div>

<section className="resume">
      <div className="container">
        <div className="section-title">
        
          <p>Utilizing technological solutions to address current youth issues through creative and effective manner using available resource and academic skills for national prosperity in general.</p>
        </div>

        <div className="row">


          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>


            <div className="resume-item pb-0">
              <h4>Uwitonze Mediatrice</h4>
              <p><em>I am a software developer, experienced Node Js developer with extensive JavaScript experience looking to continue to develop my skills set on the back-end and front-end at a company driven to addressing the climate crisis.</em></p>
              <ul>
                <li>Rwanda</li>
                <li>(+250) 783411559</li>
                <li>meddyu15@gmail.com</li>
              </ul>
            </div>


            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor’s degree in Computer Science </h4>
              <h5>2014 - 2018</h5>
              <p>College Of Science And Technology, University of Rwanda </p>
              <p>Followed my passion of prototyping and cloud computing.</p>
              <p>Excelled in user Experience and user interface work.</p>
            </div>

            <div className="resume-item">
              <h4>Training in NPPA</h4>
              <h5>Jul 2017-Oct 2017</h5>
              <p>College Of Science And Technology, University of Rwanda </p>
              <p>Designed and maintained network traffic monitoring system to support network administrators.</p>
            </div>
          </div>


          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Senior Web Developer</h4>
              <h5>2021 - Present</h5>
              <p><em>SheCanCode/ IgireRwanda </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the project, morkup, layout, and production communication </li>
                <li>Delegate tasks to the 4 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all  materials in order to ensure quality and accuracy of the design</li>
               
              </ul>
            </div>


            <div className="resume-item">
              <h4> Full Stack-Developer specialist</h4>
              <h5>2021 - 2021</h5>
              <p><em>React &amp; Node js</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created  design presentations and proposals a weeks </li>
              </ul>
            </div>
          </div>


        </div>

      </div>
    </section>

            
        </Card>
    )

}

export default ResumeComponent;