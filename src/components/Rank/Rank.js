import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className='white f3'>
				{`${name}, your current entry conunt is...`}
			</div>
			<div className='white f1'>
				{console.log(entries)}
				{entries.entries}
			</div>
		</div>	
		)
}

export default Rank;