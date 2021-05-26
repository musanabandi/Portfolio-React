import React from 'react';
import MainLayout from '../components/MainLayout';
import HomeComponent from '../components/HomeComponent';
import AboutComponent from '../components/AboutComponent';
import ResumeComponent from '../components/ResumeComponent';
import PortfolioComponent from '../components/PortfolioComponent';
import ContactComponent from '../components/ContactComponent';

const Home =()=> {
    return(


       <MainLayout>

  <HomeComponent></HomeComponent>
  <AboutComponent></AboutComponent>
 <ResumeComponent></ResumeComponent>
 <PortfolioComponent></PortfolioComponent>
 <ContactComponent></ContactComponent>
 
       </MainLayout>
    )
   
}

export  default Home;