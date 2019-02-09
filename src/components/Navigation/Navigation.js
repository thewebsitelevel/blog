import React from 'react';
import './Navigation.css';
import 'tachyons';



const Navigation = ({onSubmit,isSighnedIn}) => {


	return(



         <div>
         {  isSighnedIn===true
            ?
            <div>
                <div className=" logo w-50-ns center ">
                   <p className="logo1 f-subheadline tc mv3 ">arsu for you </p>
                </div>
                <div className="shadow-5 menu pa0 center bg-light-gray ba b--light-gray br10  ">
                  <div className=" innermenu pa0 w-50-ns w-100 center  flex flex-wrap ">
                    <p onClick={()=>onSubmit('home')} className=" w-15 dim dib link f5-ns f7 fantasy pointer mh1 pa1 fw6 ">Home</p>
                    <p                        
                      onClick={()=>onSubmit('about')} 
                      className=" w-15 dim dib link f5-ns f7 fantasy pointer mh1 pa1 fw6 
                      ">About</p>
                    <p 
                       
                       onClick={()=>onSubmit('home')} 
                       className=" w-15 dim dib link f5-ns f7 fantasy pointer mh1 pa1 fw6 
                       ">Sign Out</p>
                  
                
                  </div>
                </div> 
              </div>
            :
            <div>
                <div className=" logo w-50-ns center ">
                   <p className="logo1 f-subheadline tc mv3 ">arsu for you </p>
                </div>
                <div className="shadow-5 menu pa0 center bg-light-gray ba b--light-gray br10  ">
                  <div className=" innermenu pa0 w-50-ns w-100 center  flex flex-wrap ">
                    <p onClick={()=>onSubmit('home')} className=" w-15 dim dib link f5-ns f7 fantasy pointer mh1 pa1 fw6 ">Home</p>
                    <p                        
                      onClick={()=>onSubmit('about')} 
                      className=" w-15 dim dib link f5-ns f7 fantasy pointer mh1 pa1 fw6 
                      ">About</p>
                    <p 
                   onClick={()=>onSubmit('register')} 
                   className=" w-15 dim dib link f5-ns f7 fantasy pointer mh1 pa1 fw6 
                   ">Sign Up</p>

                 <p 
                   onClick={()=>onSubmit('login')} 
                   className=" w-15 dim dib link f5-ns f7 fantasy pointer mh1 pa1 fw6 
                   ">Sign In</p> 
                
                  </div>
                </div> 
              </div>


         }
              
           </div>
         

		)
}


export default Navigation;