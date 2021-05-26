import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, InputNumber, Button, Card } from 'antd';





const layout = {
  labelCol: {
    span: 13,
  },
  wrapperCol: {
    span: 12,
  },
};
       
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


const ContactComponent =()=>{

  const onFinish = (values) => {
    console.log(values);
  };

  return (

    <Card className="contact-container">

<div className="contact-content">
        <h1> Contact </h1>
        <hr/>
         <p>I'm assuring you that ,all information provided are true. kindly waiting for your great responses.</p> 
        
        </div>


<div className='contactus'>
        <div class="contact-row">
            <div class="col-md-4 col-sm-4" className='contact-info'>


            <div class="info">
              <div class="address">
                <i class="fa fa-map-marker"></i>
                <h4>Location:</h4>
                <p> 417K Street, Kigali, Gasabo</p>
              </div>

              <div class="email">
                <i class="fal fa-envelope"></i>
                <h4>Email:</h4>
                <p>meddyu15@gmail.com</p>
              </div>

              <div class="phone">
                <i class="fa fa-phone"></i>
                <h4>Phone Call:</h4>
                <p>(+250) 783411559</p>
              </div>
            </div>
           </div>



           






<div class="col-md-4 col-sm-4">
      
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className='form-content'>
      <Form.Item
        name={['user', 'name']}
        label="Your Name"
        rules={[
          {
            required: true,
          },
        ]}
       >
        <Input />
      </Form.Item>


      <Form.Item
        name={['user', 'email']}
        label="Your Email"
        rules={[
          {
            type: 'email',
          },
        ]}
       >
        <Input />
      </Form.Item>


      <Form.Item
        name={['subject', 'subject']}
        label="Your Subject"
        rules={[
          {
            type: 'subject',
          },
        ]}
        >
        <Input />
      </Form.Item>
     
     
      <Form.Item name={['user', 'introduction']} label="Message" className='form-content'>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    </div>
    </div>
    </div>
  


    <div class="contact-social">
        <h3>Follow me</h3>
        <ul>
          <li><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-github"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
      

    </Card>
  );


};










export default ContactComponent;