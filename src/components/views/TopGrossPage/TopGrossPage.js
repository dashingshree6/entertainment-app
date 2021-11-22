import React from 'react';
import './TopGrossPage.css';

function TopGrossPage() {
    return (
        
       <div className='gross'>
           <h1 className='h11'>Top Box Office</h1>
           <div className='grossbox'>
           <div className='box'>
               <h1>1.Candyman</h1>
               <h2>$2.2M</h2><br/>
            </div>
            <div className='box'>
               <h1>2.Free Guy</h1>
               <h2>$1.4M</h2><br/>
            </div>
            <div className='box'>
               <h1>3.PAW PETROL: The Movie</h1>
               <h2>$6.6M</h2><br/>
            </div>
            <div className='box'>
               <h1>4.Jungle Cruise</h1>
               <h2>$5.2M</h2><br/>
            </div>
            <div className='box'>
               <h1>5.Dont Breathe 2</h1>
               <h2>$2.8M</h2><br/>
            </div>
            </div>
       </div>
    )
}

export default TopGrossPage;