import React, { useEffect, useState } from 'react';
import Button from './Button';

const QuestionCard = (props) => {
    const {question, allAnswers, trueAnswer} = props.item;
    const [answer, setAnswer] = useState('')

    const handleClick = (item) => {
        console.log(item);
        setAnswer(item);
    }

    return (
        <div className='card'>
            <p className='card__question'><div dangerouslySetInnerHTML={{__html:question}}/></p>
            <div className='card__answers'>
				{allAnswers.map((item, index) => (
					<button
                        className='btn card__answer-btn'
                        key={index}
                        onClick={() => handleClick(item)}>
                            {item}
                    </button>
				))}
			</div>
        </div>
    );
}
 
export default QuestionCard;