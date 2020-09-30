import React from 'react';
import './sponsors.css'
import Sponsor1 from '../../img/sponsor1.png';
import Sponsor2 from '../../img/sponsor2.png';
import Sponsor3 from '../../img/sponsor3.png';
import Sponsor4 from '../../img/sponsor4.png';
import Sponsor5 from '../../img/sponsor5.png';
import Sponsor6 from '../../img/sponsor6.png';
import Sponsor7 from '../../img/sponsor7.png';
import Sponsor8 from '../../img/sponsor8.png';

const Sponsors =() => {
    return(
        <div className="sponsorsContainer">
            <div className="sponsorsTitle">
                <h3>NUESTROS</h3>
                <h3>PATROCINADORES</h3>
            </div>
            <div className="sponsorsItemContainer">
                <img src={Sponsor1}/>
                <img src={Sponsor2}/>
                <img src={Sponsor3}/>
                <img src={Sponsor4}/>
                <img src={Sponsor5}/>
                <img src={Sponsor6}/>
                <img src={Sponsor7}/>
                <img src={Sponsor8}/>
            </div>
        </div>
    )
}

export default Sponsors;