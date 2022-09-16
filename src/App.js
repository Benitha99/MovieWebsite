import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css";
import Header from "./component/Header";
import Favorites from "./component/Favorites";
import SingleMovie from './component/SingleMovie';
import Movie from './component/Movie';
import Action from './component/Action';
import Romantic from './component/Romantic';
import Comedy from './component/Comedy';
import Anime from './component/Anime';

function App() {
  return( <BrowserRouter>

<Routes>
 <Route path='/' element={<Header/>}>
<Route index element={<Movie/>}/>

 <Route path='/favorite' element={<Favorites/>}/>
 <Route path='Movie/:movieId' element={<SingleMovie/>}/>
 <Route path='/Action' element={<Action/>}/>
 <Route path='/Romantic' element={<Romantic/>}/>
 <Route path='/Comedy' element={<Comedy/>}/>
 <Route path='/Anime' element={<Anime/>}/>
   
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
