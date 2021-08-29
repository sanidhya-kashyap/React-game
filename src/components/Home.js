import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../contexts/AppContext';


export const Home = (props) => {
    const context = React.useContext(GlobalContext);

    const [username, setUsername] = useState("");
    const history = useHistory();
    const saveFinder = (e) => {
        e.preventDefault()
        var finderName = username
        if (!finderName) {
            window.alert("Don't leave name empty")
        } else {
            context.useFinderName(finderName);
            history.push('/finder')
        }
    }

    const saveHelper = (e) => {
        e.preventDefault()
        var helperName = username
        if (!helperName) {
            window.alert("Don't Leave name empty")
        } else {
            context.useHelperName(helperName);
            history.push('/helper')
        }
    }

    React.useEffect(() => {
        context.useFinderName("");
        context.useHelperName("");
    }, [context])


    return (

        <>
            <div className="username-container">
                <div className="username-form">
                    <h3>Name</h3>
                    <input type="text" placeholder="enter your name" id="username" onChange={(e) => { setUsername(e.target.value) }} value={username} />
                    <div className="game-char">
                        <button className="btn" onClick={saveFinder}>Finder</button>
                        <button className="btn" onClick={saveHelper}>Helper</button>
                    </div>
                </div>
            </div>
        </>
    )
}
