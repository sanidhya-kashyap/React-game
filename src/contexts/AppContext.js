import React, { createContext } from 'react';

export const GlobalContext = createContext();

const AppContextProvider = ({ children }) => {
    const [clues, setClue] = React.useState([]);
    const [word, setWord] = React.useState('Elon Musk');
    const [finderName, setFinderName] = React.useState('');
    const [helperName, setHelperName] = React.useState('');

    const useClue = (data) => {
        setClue([...data]);
    }

    const useWord = (data) => {
        setWord(data);
    }

    const useFinderName = (data) => {
        setFinderName(data);
    }

    const useHelperName = (data) => {
        setHelperName(data);
    }

    return (
        <GlobalContext.Provider value={{
            clues,
            word,
            finderName,
            helperName,
            useClue,
            useWord,
            useFinderName,
            useHelperName
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContextProvider;