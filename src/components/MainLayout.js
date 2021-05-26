import React,{useState, Component } from 'react';
import {Link} from 'react-scroll';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Media from "../assets/images/Media.jpg";
import './index.css';
import { Layout, Menu } from 'antd';
import {
  FacebookOutlined,
  UserOutlined,
  FileOutlined,
  ReadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  SlackOutlined,
  HomeOutlined, 
  RedEnvelopeOutlined
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;

const MainLayout=({children}) =>{

 const [collapsed,setCollapsed]= useState(false)
  const toggle = () => {
 setCollapsed(!collapsed)
  };


    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width="300px" style ={{minHeight:"100vh", width:"300px"}} className="over">

          <img src={Media} alt="logo" className="logo"/>
          <h2 className="names"> UWITONZE Mediatrice</h2>
          


          <div>
              <Menu Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
              <GithubOutlined className="socialIcon"/>
              <LinkedinOutlined className="socialIcon"/>
              <TwitterOutlined className="socialIcon"/>
              <SlackOutlined className="socialIcon"/>
              <FacebookOutlined className="socialIcon"/>
              </Menu>
              
          </div>


          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

          <Menu.Item key="1" icon={<HomeOutlined className="link-icon"/>} className="par"><Link  to="home" spy={true} smooth={true} className="link-scroll">Home</Link>
              
            </Menu.Item>


            <Menu.Item key="2" icon={<UserOutlined className="link-icon"/>}className="par"><Link  to="about" spy={true} smooth={true} className="link-scroll">About</Link>
              
            </Menu.Item>


            <Menu.Item key="3" icon={<FileOutlined className="link-icon"/>}className="par"><Link  to="resume" spy={true} smooth={true} className="link-scroll">Resume</Link>
              
            </Menu.Item>


            <Menu.Item key="4" icon={<ReadOutlined className="link-icon"/>}className="par"><Link  to="portfolio" spy={true} smooth={true}className="link-scroll">Portfolio</Link>
              
            </Menu.Item>

           


            <Menu.Item key="5" icon={<RedEnvelopeOutlined className="link-icon"/>}className="par"><Link  to="contact" spy={true} smooth={true} className="link-scroll">Contact</Link>
              
            </Menu.Item>
            

          </Menu>



          




    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Portfolio</span></strong>
      </div>
      <div className="Design">
        
        Designed by <a href="#">SheCanCode</a>
      </div>
      </div>
    




        </Sider>
        <Layout className="site-layout">


          {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header> */}


          <Content
            className="site-layout-background"

            style={{
              margin: '0px 3px',
              padding: 0,
              minHeight: "100vh",
            }}>


            {children}


          </Content>
        </Layout>
      </Layout>
    );
}
export default MainLayout;