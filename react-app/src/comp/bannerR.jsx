import './banner.css';
import ArrI from './../ArrI'
function BannerR() {
  return (
   <>
     <div className="ban-con">
         <div className="banner-con">
             <div className="ban-text">
                 <h1>"Our agents are ready to help"</h1>
                 <p>Bacon ipsum dolor amet pastrami salami 
frankfurter, t-bone pork short loin</p>

                 
             </div>
             <div className="grad"></div>
             <div className="banner-img">
             <div className="slide-img" style= {{backgroundImage: `url(${ArrI[7]})` }}></div>
             </div>
             
         </div>
     </div>
   </>
  );
}

export default BannerR;