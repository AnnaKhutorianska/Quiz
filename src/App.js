import React, { useEffect, useState } from 'react';
import Quiz from './components/Quiz/Quiz';
import Start from './components/Start/Start';

function App() {
	const [startQuiz, setStartQuiz] = useState(true);
	const playQiuz = () => setStartQuiz((startQuiz) => !startQuiz);

	return (
		<>
			{startQuiz ? <Start start={playQiuz} /> : <Quiz />}
		</>
	);
}

export default App;
