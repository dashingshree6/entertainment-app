import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '200px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem', color:'gray', backgroundColor: 'yellow'
        }}>
           <p>IMDB Developer</p>
           <p>Press-Room Advertising Jobs Conditions-of-use</p>
           <p>Privacy-Policy Internet-Bases-Ads</p>
           <p>an Amazon Company</p>
           <p> 1990-2021 by IMDB.com, Inc.  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
