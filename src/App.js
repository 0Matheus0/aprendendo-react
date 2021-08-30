import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Rota1 from './Component/Rota1';
import Rota2 from './Component/Rota2';
import Rota3 from './Component/Rota3';
import Rota4 from './Component/Rota4';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path ="/rota1">
              <Rota1/>
          </Route>

          <Route path ="/rota2" component = {Rota2}/>

          <Route path ="/rota3" component = {Rota3}/>

          <Route path ="/rota4" component = {Rota4}/>

          <Route path ="/">
            <div><h1>Essa é a Rota padrão</h1></div>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
