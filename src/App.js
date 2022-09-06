
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import './lib/font-awesome/css/all.min.css'
import Header from './component/Header'
import Favorites from './component/Favorites';
import AddMovie from './component/AddMovie';

function App() {
  return (
   <Router>

<Header/>
<Switch>
  <Route exact path='/'>
    <AddMovie/>
    
  </Route>
  <Route exact path='/add'>
  <Favorites/>  
  </Route>
</Switch>
   </Router>
  );
}

export default App;
