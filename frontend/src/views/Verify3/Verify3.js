import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Twitters from '../../assets/TwitterProfiles.mp4';

const Verify = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/explore');
        }, 4000);
    }, []);

    return (
        <Fragment>
          <h3 className="text-info mt-5">All done for now! We've saved <br/> your spot in line</h3>
          <hr/>
        <video className='videotwit' type='video/mp4' src={Twitters} autoPlay loop muted></video>
        </Fragment>
    );
};

export default Verify;
