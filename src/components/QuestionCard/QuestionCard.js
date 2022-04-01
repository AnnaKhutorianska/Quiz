import React, { useState } from 'react';
import './QuestionCard.css';

const QuestionCard = (props) => {
	const { question, allAnswers, id, correctAnswer } = props.question;
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
				{allAnswers.map((answer, index) => {
					const isSelected = answer === selectedAnswer;
					const isCorrect = props.isChecked && isSelected && selectedAnswer === correctAnswer;
					const isIncorrect = props.isChecked && isSelected && selectedAnswer !== correctAnswer;

					return (
						<button
							className={`btn card__answer-btn card__answer--not-selected
							${isSelected && 'card__answer-btn--selected'}
							${isIncorrect && 'card__answer-btn--red'}
							${isCorrect && 'card__answer-btn--green'}
							`}
							key={index}
							onClick={() => {
								handleClick(answer);
							}}
						>
							{answer}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default QuestionCard;
