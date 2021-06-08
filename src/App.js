import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Rota1 from './Component/Rota1';
import Rota2 from './Component/Rota2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path ="/rota1">
              <Rota1/>
          </Route>

          <Route path ="/rota2" component = {Rota2}/>

          <Route path ="/rota3">
            <div>
              <div>
                <h1>Olá rota 3</h1> 
              </div>
            </div>
          </Route>

          <Route path ="/">
            <div><h1>Essa é a Rota padrão</h1></div>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
