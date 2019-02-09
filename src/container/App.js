import React, {Component} from 'react';
import 'tachyons';
import './App.css';
import { Parallax } from 'react-scroll-parallax';
import Home from '../components/Home/Home.js';
import Navigation from '../components/Navigation/Navigation.js';
import Login from '../components/Login/Login.js';
import Register from '../components/Register/Register.js';
import Card from '../components/Card/Card.js';
import CardList from '../components/CardList/CardList.js';
import {Posts} from '../components/CardList/Posts.js';
import Post from '../components/Post/Post.js';
import Footer from '../components/Footer/Footer.js';
import About from '../components/About/About.js';






class App extends Component {
	constructor(){
	super();
	this.state={
		route:'home',
		isSighnedIn:false
	}
}


onRouteChange= (route) =>{
	if(this.state.route==='login' || this.state.route==='register' )
	{
		this.setState({isSighnedIn:true});
	}

	else
	{
		this.setState({isSighnedIn:false});
	}

	this.setState({route:route})
}



	render(){
		switch(this.state.route)
		{
			case 'home':
			  return <div className="body pa1 bg-near-white">  
			          	<Navigation isSighnedIn={this.state.isSighnedIn} onSubmit={this.onRouteChange} />
			            <Home/>
			            <CardList Posts={Posts}/>
			            <Footer/>
		            </div>
		            break;
		    case 'login':
			  return <div className="body pa1 bg-near-white">  
			            <Navigation  onSubmit={this.onRouteChange}/>
			            <Login onSubmit={this.onRouteChange}/> 
			         </div>
			         break;
			case 'register':
		   	  return <div className="body pa1 bg-near-white">  
			            <Navigation  onSubmit={this.onRouteChange}/>
			            <Register onSubmit={this.onRouteChange}/> 
			         </div>
			case 'signout':
		      return <div className="body pa1 bg-near-white">  
			            <Navigation  onSubmit={this.onRouteChange}/>
			            <Home/>
			         </div>
			case 'about':
		      return <div className="body pa1 bg-near-white">  
			            <Navigation  onSubmit={this.onRouteChange}/>
			            <About/>
			         </div>


		   
         
             
		}
  }
}

export default App;
