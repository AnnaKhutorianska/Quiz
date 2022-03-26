import React, { useEffect, useState } from 'react';
import Quiz from './components/Quiz';
import Start from './components/Start';

function App() {
	const [startQuiz, setStartQuiz] = useState(true);
	const playQiuz = () => setStartQuiz((startQuiz) => !startQuiz);

	return (
		<div>
			{startQuiz ? <Start start={playQiuz} /> : <Quiz />}
		</div>
	);
}

export default App;
