import React from 'react';
import 'tachyons';
import './CardList.css';
import Card from '../Card/Card.js';



const CardList = ({Posts}) =>{
	const formedCard = Posts.map((props, i)=>{
		return <Card id={Posts[i].id} 
		             title={Posts[i].title} 
		             description={Posts[i].description}
		             image= {Posts[i].image}/>

	})
	return(
		<div className='flex flex-wrap cardlist'>
          {formedCard}
        </div>
		);
}

export default CardList;