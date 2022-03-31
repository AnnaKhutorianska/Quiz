import React from 'react';
import './Start.css';

const Start = (props) => {
	return (
		<div className="start">
			<p className="start__header">Quizzical</p>
			<button className=" btn btn--purple btn__start" onClick={props.start}>
				Start quiz
			</button>
		</div>
	);
};

export default Start;
