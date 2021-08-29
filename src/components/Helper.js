import React from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../contexts/AppContext'

export const Helper = () => {
    const context = React.useContext(GlobalContext);
    const history = useHistory();
    const [clueSelection, setClueSelection] = React.useState([...context.clues]);

    const addToClue = (clue) => {
        if (!clueSelection.includes(clue)) {
            setClueSelection((clues) => [...clues, clue]);
        } else {
            setClueSelection((clues) => [...clues.filter(cl => cl !== clue)]);
        }

        context.useClue(clueSelection);
    }

    React.useEffect(() => {
        if (!context.helperName) {
            history.replace('/');
        }
    }, [context, history])

    return (
        <div>
            <div className="container">
                <div className="right">
                    <h3>Hey {context.helperName}</h3>
                    <div className="row">
                        <h3>Words For Clue</h3>
                        <div className="word-clues">
                            <div className="col">
                                <li onClick={() => addToClue('object')}>object</li>
                                <li onClick={() => addToClue('thing')}>thing</li>
                                <li onClick={() => addToClue('package')}>package</li>
                                <li onClick={() => addToClue('person')}>person</li>
                            </div>
                            <div className="col">
                                <li onClick={() => addToClue('work')}>work</li>
                                <li onClick={() => addToClue('profession')}>profession</li>
                                <li onClick={() => addToClue('craft')}>craft</li>
                                <li onClick={() => addToClue('sport')}>sport</li>
                            </div>
                            <div className="col">
                                <li onClick={() => addToClue('theater')}>theater</li>
                                <li onClick={() => addToClue('mall')}>mall</li>
                                <li onClick={() => addToClue('film')}>film</li>
                                <li onClick={() => addToClue('camera')}>camera</li>
                            </div>
                            <div className="col">
                                <li onClick={() => addToClue('location')}>location</li>
                                <li onClick={() => addToClue('country')}>country</li>
                                <li onClick={() => addToClue('flag')}>flag</li>
                                <li onClick={() => addToClue('patriotism')}>patriotism</li>
                            </div>
                            <div className="col">
                                <li onClick={() => addToClue('car')}>car</li>
                                <li onClick={() => addToClue('vehcile')}>vehcile</li>
                                <li onClick={() => addToClue('bike')}>bike</li>
                                <li onClick={() => addToClue('flight')}>flight</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left">
                    <div className="word-guess">
                        <p> <b>Word:</b> {context.word || 'Not Selected'}</p>
                    </div>
                    <div className="given-clues">
                        <h3>Your Clues</h3>
                        {!clueSelection.length && <li>No clue has been selected</li>}
                        {clueSelection.map((clue, index) => <li key={index.toString()}>{clue}</li>)}
                    </div>
                </div>
            </div>
        </div>

    )
}
