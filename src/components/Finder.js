import React from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../contexts/AppContext'


export const Finder = (props) => {
    const context = React.useContext(GlobalContext);
    const history = useHistory();
    const [word, setWord] = React.useState('');

    const handleSubmit = () => {
        if (!word) {
            alert('Please enter a word');
        } else {
            if (context.word.toLowerCase() === word.toLowerCase()) {
                alert("You are champion !");
            } else {
                alert("Oops Wrong Answer !");
            }
        }
    }

    React.useEffect(() => {
        if (!context.finderName) {
            history.replace("/")
        }
    }, [context, history])

    return (
        <div>
            <h3 className="welcome">Hey.. {context.finderName}</h3>
            <div className="finder-container">
                <div className="answer">
                    <div className="helper-clues">
                        <h3>Your Clues</h3>
                        {!context.clues.length && <li>No clue added</li>}
                        {context.clues.map((clue, index) => <li key={index.toString()}>{clue}</li>)}
                    </div>
                    <input type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder="enter your answer" id="answer" />
                    <div className="game-char">
                        <button className="btn" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
