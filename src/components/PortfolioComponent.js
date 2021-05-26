import React from 'react';
import './index.css';
import {Card} from 'antd';
import images from "../assets/images/images7.jpg";

import {
  PlusOutlined,
  LinkOutlined
} from '@ant-design/icons';



const PortfolioComponent =()=>{

    return(

 <Card className="portfolio-container" id="portfolio">
    

<section className="portfolio">
<div className="container">

<div className="section-title">
          <h2>Portfolio</h2>
          <hr/> 
         
          <p>website you create to show off your skills, experience, projects, and even your personality to potential clients and/or employers.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul className="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Web Design</li>
              <li data-filter=".filter-card">Mobile App</li>
              <li data-filter=".filter-card">Card</li>
           
            </ul>
          </div>
        </div>


        <img alt="example" src={images} className="photo"/><br/>
              <div>
              <PlusOutlined key="preview" className="icon"/>,
              <LinkOutlined key="Link" className="icon"/>,     
              </div>
{/*               
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div> */}



    </div>    
    </section>

    
   
            
        </Card>
    )

}

export default PortfolioComponent;