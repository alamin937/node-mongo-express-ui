
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GetServices from './components/GetServices/GetServices';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import ShowDetails from './components/ShowDetails/ShowDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route path='/show/:serviceId'>
         <ShowDetails></ShowDetails>
       </Route>
       <Route path='/services'>
         <Services></Services>
       </Route>
       <Route path='/getservices'>
         <GetServices></GetServices>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
