import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddTranslation from './pages/AddTranslation';
import Header from "./components/Header/Header";
import * as S from './style';

const App = () => {

  return (
    <>
        <Header title={'Translator manager'} />
        <S.AppContainer>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/translator/:appTranslator" component={AddTranslation} />
            </Switch>
          </BrowserRouter>      
        </S.AppContainer>
    </>
  );
};

export default App;

