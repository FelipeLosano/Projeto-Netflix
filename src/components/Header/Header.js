import React from 'react';
import './Header.css';

const Header = ({ black }) => {
	return (
		<header className={black ? 'black' : ''}>
			<div className='header--logo'>
				<a href='/'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png'
						alt='Netflix'
					/>
				</a>
			</div>
			<div className='header--user'>
				<a href=''>
					<img
						src='https://occ-0-1308-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABb9mMbxYjWjrqym1X7znS_ggYPEG0013jqhgDkE44bes2qwpfHVvZdZu1oMm2lkW1x58YiLwtJhOWHSwAih3BEe2TIVnWbQ.png?r=869'
						alt='User'
					/>
				</a>
			</div>
		</header>
	);
};

export default Header;
