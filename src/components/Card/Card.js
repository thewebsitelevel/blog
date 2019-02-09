import React from 'react';
import 'tachyons';
import './Card.css';


const Card = (props) =>{
      	{const iid=props.id}
	return(
		

		<div className="post link pointer  ma2 br4 shadow-5  w-40-ns w-100 tl" >
		  
	         <img className="grow pic shadow-3 br4 w-50-ns w-100 fl ma2 " alt="postphoto" src={`${props.image}`}/>
		  
		    <h2 className="text pointer f3-ns f5 mv1 dim link ">{props.title}</h2>
		    <p className="text pointer f5-ns f7 dim link">{props.description}</p>

		    
        </div>

        

		);
	
}


export default Card;