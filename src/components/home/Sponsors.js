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
                <h4>NUESTROS</h4>
                <h4>PATROCINADORES</h4>
            </div>
            <div className="sponsorsItemContainer">
                <img src={Sponsor1} alt="sponsor-img"/>
                <img src={Sponsor2} alt="sponsor-img"/>
                <img src={Sponsor3} alt="sponsor-img"/>
                <img src={Sponsor4} alt="sponsor-img"/>
                <img src={Sponsor5} alt="sponsor-img"/>
                <img src={Sponsor6} alt="sponsor-img"/>
                <img src={Sponsor7} alt="sponsor-img"/>
                <img src={Sponsor8} alt="sponsor-img"/>
            </div>
        </div>
    )
}

export default Sponsors;