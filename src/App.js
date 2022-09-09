import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import Header from "./component/Header";
import Favorites from "./component/Favorites";
import SingleMovie from './component/SingleMovie';
import Movie from './component/Movie';

function App() {
  return( <BrowserRouter>

<Routes>
 <Route path='/' element={<Header/>}>
<Route index element={<Movie/>}/>

 <Route path='/favorite' element={<Favorites/>}/>
 <Route path='Movie/:movieId' element={<SingleMovie/>}/>
   
 </Route>


</Routes>


    {/* // <Router>
    //   <Header />
    //   <Switch>
    //     <Route exact path="/">
    //       <AddMovie />
    //     </Route>
    //     <Route exact path="/add">
    //       <Favorites />
    //     </Route>
    //   </Switch>
    // </Router> */}
    </BrowserRouter>
  );
}

export default App;
