import React, { useEffect, useState } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard.js';
import './Quiz.css';
import data from '../../data.js';

const Quiz = () => {
	const url = 'https://opentdb.com/api.php?amount=5';
	const [questionsData, setQuestionsData] = useState([]);
	const [isChecked, setIsChecked] = useState(false);
	const [score, setScore] = useState(0);
	const [playAgain, setPlayAgain] = useState(false);

	const fetchQuestions = async () => {
		const response = await fetch(url);
		const data = await response.json();
		
		const questionInfo = data.results.map((info, index) => {
			const { question, incorrect_answers, correct_answer: correctAnswer } = info;
			const allAnswers = [...incorrect_answers, correctAnswer].sort(() => Math.random() - 0.5);

			return {
				id: index,
				question,
				correctAnswer,
				allAnswers,
				reply: '',
			};
		});

		setQuestionsData(questionInfo);
	};

	useEffect(() => {
		fetchQuestions();
		setPlayAgain(false);
	}, [playAgain]);

	const getAnswer = (id, ans) => {
		setQuestionsData((prevData) =>
			prevData.map((data) => {
				return data.id === id ? { ...data, reply: ans } : data;
			})
		);
	};

	const countScore = () => {
		const count = questionsData.reduce(
			(total, current) => (current.correctAnswer === current.reply ? total + 1 : total + 0),
			0
		);

		setScore(count);
	};

	console.log(score);
	console.log(questionsData);

	const startQuizAgain = () => {
		setIsChecked(false);
		setQuestionsData([]);
		setScore(0);
		setPlayAgain(true);
	};

	return (
		<div className="container">
			<div>
				{questionsData.map((question, index) => (
					<QuestionCard
						key={index}
						question={question}
						isChecked={isChecked}
						getAnswer={getAnswer}
					/>
				))}
			</div>
			<div className='quiz-buttons'>
				{!isChecked ? (
					<>
						<button
							className="btn btn--purple btn__check btn__main"
							onClick={() => {
								setIsChecked((isChecked) => !isChecked);
								countScore();
							}}
						>
							Check Answers
						</button>
					</>
				) : (
					<div className="quiz-result">
						<p className="quiz-result__score">
							You scored {`${score} / ${questionsData.length}`} correct answers
						</p>
						<button className="btn btn--purple btn__main" onClick={startQuizAgain}>
							Play again
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Quiz;
