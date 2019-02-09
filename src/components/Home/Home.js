import React from 'react';
import 'tachyons';
import './Home.css';
import { Parallax } from 'react-scroll-parallax';


const Home = () => {
	return(
		<div className="index">
          <Parallax
                className="custom-class grow  "
                offsetYMax={20}
                offsetYMin={-30}
                fastScrollRate
                tag="figure"
            >
            <div>
               <img alt="wall" className="index br2 " src="https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?cs=srgb&dl=bricks-brickwall-indoors-112811.jpg&fm=jpg" />
            </div>         
            </Parallax>

           <Parallax
                className="custom-class index1 "
                offsetYMax={20}
                offsetYMin={-50}
                fastScrollRate
                tag="figure"
            >     
                   <div className="">
                      <div className="w-100-ns w-50  ">
                       <p className="thought ma0 f-subheadline-ns f7 fw7 ">Read My Mind</p>
                       <p className="name f2-ns f7 fw6 ma0">Arshad Firoz</p>
                     </div>

                         <img  className="sofa " alt="display"  src="http://www.pngmart.com/files/7/Sleeper-Sofa-Download-PNG-Image.png"/>

                   </div>
            </Parallax>
         </div>

 
		)
}






export default Home;