import React from 'react';
import q_Zone1 from '../../../assets/qZone1.png';
import q_Zone2 from '../../../assets/qZone2.png';
import q_Zone3 from '../../../assets/qZone3.png';

const Q_Zone = () => {
    return (
            <div className='bg-secondary bg-opacity-10 p-4 my-4'>
                <h4>Q-Zone</h4>
                <div>
                    <img className='img-fluid' src={q_Zone1} alt="" />
                    <img className='img-fluid' src={q_Zone2} alt="" />
                    <img className='img-fluid' src={q_Zone3} alt="" />
                </div>
            </div>
    );
};

export default Q_Zone;
