import React from 'react';

const Start = (props) => {
	return (
		<div className="start">
			<p className="start__header">Quizzical</p>
			<button className=" btn start__btn" onClick={props.start}>
				Start quiz
			</button>
		</div>
	);
};

export default Start;
