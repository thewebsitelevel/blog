import React from 'react';
import './Footer.css';
import 'tachyons';

const Footer = () => {
	return(
              
           <div className=' flex flex-wrap bg-gray mt5 shadow-5-ns shadow-3 o-80 br2 '>
             <div className=' ma1 pa1 w-50-ns w-100 '>
                <p className='tc footerline white f3'>Subscribe to get notified about new articles.</p> 
        	    <input className='relative-ns   o-70 newsletter ba b--gray w-60-ns w-100 center ma1 pa2 b--gray br-pill shadow-5-ns shadow-3' type='Email' name='Email' placeholder='Email Address'/>
                <p className='relative w-60-ns w-1000 center tc ba b--gray link dim db ma1 pa2 b--gray bg-white  br-pill shadow-5-ns pointer shadow-3'>SUBSCRIBE</p>
             </div>
             <div className=' footerquote tc ma1 center  w-40-ns w-100'>
               <p className=' white f1  '>Writings by Arshad Firoz.</p>
             </div>
             
              
           </div>
       

		);
}


export default Footer;