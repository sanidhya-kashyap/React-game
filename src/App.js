import { Home } from './components/Home';
import { Finder } from './components/Finder';
import { Route } from "react-router-dom";
import { Helper } from './components/Helper';
import './App.css';
import AppContextProvider from './contexts/AppContext';

function App() {

  return (
    <AppContextProvider>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/finder">
        <Finder />
      </Route>
      <Route path="/helper">
        <Helper />
      </Route>
    </AppContextProvider>
  );
}

export default App;
