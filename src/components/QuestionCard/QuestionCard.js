import React, { useState } from 'react';
import './QuestionCard.css';

const QuestionCard = (props) => {
	const { question, allAnswers, id } = props.question;
	const [selectedAnswer, setSelectedAnswer] = useState('');

	const handleClick = (answer) => {
		if (!props.isChecked) {
			setSelectedAnswer(answer);
			props.getAnswer(id, answer);
		}
	};

	return (
		<div className="card">
			<p className="card__question">
				<div dangerouslySetInnerHTML={{ __html: question }} />
			</p>
			<div className="card__answers">
				{allAnswers.map((answer, index) => (
					<button
						className={`btn card__answer-btn ${
							selectedAnswer === answer
								? 'card__answer-btn--selected'
								: 'card__answer--not-selected'
						}`}
						key={index}
						onClick={() => {
							handleClick(answer);
						}}
					>
						{answer}
					</button>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
