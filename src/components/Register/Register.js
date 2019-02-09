import React from 'react';
import 'tachyons';
import './Register.css';

const Register = ({onSubmit}) =>{
	return(
          <div >
            <div className="container">
            <img className="loginimage"
                 src="https://images.unsplash.com/photo-1458349726531-234ad56ba80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=80"
                 alt="loginimage"/>
            </div>
            <div className='flex flex-wrap login w-60  bg-light-gray o-80 br4 shadow-5-ns shadow-3' >
              <form className='form w-50-ns w-100 center ma4 '>
                  <p className="register  center ma2 pa2 f1-ns f2 fw9">Register</p>
        			    <input className='w-60-ns w-90 center ma1 pa2 ba b--gray br-pill shadow-5-ns shadow-3' type='text' name='name' placeholder='Full Name'/>
        			    <input className='w-60-ns w-90 center ma1 pa2 ba b--gray br-pill shadow-5-ns shadow-3' type='email' name='email' placeholder='Email'/>
        		      <input className='w-60-ns w-90 center ma1 pa2 ba b--gray br-pill shadow-5-ns shadow-3' type='password' name='password' placeholder='Password'/>
        			    <input className='w-60-ns w-90 center ma1 pa2 ba b--gray br-pill shadow-5-ns shadow-3' type='text' name='mobile' placeholder='Mobile'/>
                  <p 
                     onClick={()=>onSubmit('home')} 
                     className='w-30-ns w-50 f5 fw7gray tc center mb2 mt3 pa2 pointer ba bg-white bw2 link dim dib b--gray  br-pill shadow-5-ns shadow-3
                  '>Register</p>
        		  </form>         
            </div>

          </div>

		)
}


export default Register;