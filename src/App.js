import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Rota1 from './Component/Rota1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path ="/rota1">
              <Rota1/>
          </Route>

          <Route path ="/rota2">
            <div>
              <h1>Olá rota 2</h1>     
            </div>
          </Route>

          <Route path ="/rota3">
            <div>
              <div>
                <h1>Olá rota 3</h1> 
              </div>
            </div>
          </Route>

          <Route path ="/">
            <div><h1>Rota padrão</h1></div>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
