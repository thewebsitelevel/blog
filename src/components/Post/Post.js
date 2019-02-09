import React from 'react';
import './Post.css';
import 'tachyons';
import Card from '../Card/Card.js';




const Post = ({Posts}) => {
	return(
              
           <div className=' bg-near flex flex-wrap w-100 '>
             <div className=' w-100  ma2 w-60-ns w-100  bg'>
                <p className='title f2-ns f5s fw7 text tc '>This is the title</p>
             </div>
             <div className='  post ml6-ns mr4-ns relative w-50-ns w-100 ma1'>
                      <img alt='post page' src={`${Posts[1].image}`}/>
                      <p className='description f4'><b>Description:</b> {`${Posts[1].description}`}</p>
                      <div className='flex flex-wrap justify-around '>
                      <div className='ba ma2  bw2 br-pill w-10 b--brown'></div>
                      <div className='ba ma2  bw2 br-pill w-10 b--brown'></div>                      <div className='ba ma2  bw2 br-pill w-10 b--brown'></div>
                      </div>
                      <p className='description'>{`${Posts[1].post}`}</p>



             </div>
             <div className='ba bw1 br-pill b--brown'>
             </div>
             <div className='ad  relative ml4-ns  w-30-ns w-100 ma1'>
                      <img alt='post page' src={`${Posts[1].image}`}/>
                 
             </div>
              
           </div>
       

		);
}


export default Post;