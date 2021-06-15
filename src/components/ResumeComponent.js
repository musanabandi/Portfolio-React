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
              <p><em>I am a software developer, experienced in Node Js, JavaScript, React Js, PHP, HTML, CSS and BootStrap. with extensive of looking to continue to develop my skills set on the back-end and front-end.</em></p>
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
              
            </div>

            <div className="resume-item">
              <h4>Training in NPPA(Natinal Public Prosecution Authority)</h4>
              <h5>Jul 2017-Oct 2017</h5>
              <p>College Of Science And Technology, University of Rwanda </p>
              <p>Designed and maintained network traffic monitoring system to support network administrators.</p>
              <h4>Global Humanitarian and Development Foundation, Kigali, Rwanda </h4>
              <h5>Jun 2014-Aug 2014</h5>

            </div>
          </div>


          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>2021 - Present</h5>
              <p><em>SheCanCode/ IgireRwanda </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the project, morkup, layout, and production communication</li>
               
              </ul>
            </div>


            <div className="resume-item">
              <h4> Full Stack-Developer specialist</h4>
              <h5>24 February-18 june 2021</h5>
              <p><em>React Js &amp; Node js</em></p>
              <p><em>Html&amp; CSS</em></p>
              <ul>
                <li> I am working on different projects like:</li>
                <li>Blog post is web page which is used to fullfill a business needs, people can post their blog and they are able to delete, update, commenting</li>
                <li>Search Engine its allows to retrive/ fetching data by using the others API to get information.  </li>
                <li>Real Job Opportunity is a website/platform which provide interface between job-seeker and job-provider, where job-provider will post a job by hiring an employee and the one who seek a job  will be able to search it.
                   </li>
                
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