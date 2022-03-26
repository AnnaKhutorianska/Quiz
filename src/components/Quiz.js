import React, { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';
import data from '../data.js';

const Quiz = () => {
	const url = 'https://opentdb.com/api.php?amount=5';
	const [questionsData, setQuestionsData] = useState([]);
	
	const fetchQuestions = async () => {
		// const response = await fetch(data);
		// const data = await response.json();
		setQuestionsData(data.results);
	};

	useEffect(() => {
		fetchQuestions();
	}, []);

	console.log(questionsData);

	return (
		<div className="container">
			<div>
				{questionsData.map((item, index) => (
					// <QuestionCard key={index} item={item} />
					<QuestionCard key={index} item={
						{
							question: item.question,
							allAnswers: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
							trueAnswer: item.correct_answer
					}} />
				))}
			</div>
			<button>Check Answers</button>
		</div>
	);
};

export default Quiz;
