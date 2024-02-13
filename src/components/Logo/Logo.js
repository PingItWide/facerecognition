import React from 'react';
import Tilt from 'react-parallax-tilt';
import face from './face.png'; 
import './Logo.css'; 

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='Tilt br2 shadow-2' style={{ height: '150x', width: '20x' }}>
      			<div className='Tilt-inner pa3'>
        			<img stlye={{paddingTop: '5px'}}alt='logo' src={face}/> 
      			</div>
    		</Tilt>
		</div>
		);
}

export default Logo;