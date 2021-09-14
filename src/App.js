import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';

import Footer from './components/footer/footer';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Design from './components/Design/Design';
import Error from './components/Error/Error';
import Admin from './components/Admin/Admin';

import Design2 from './components/ImageEditor/ImageEditor';

import { Fragment } from 'react';
import Navbar from './components/Navbar/navbar';
function App() {
  const getAppContent=()=> { 
 
    return (
        
        <div className={''}>


   <Navbar/>

            <Switch>
   
            <Route path={'/admin'} exact
                       render={(props) =>
                           <Admin {...props}
                                 />} />

                <Route path={'/'} exact
                       render={(props) =>
                           <Home {...props}
                                 />} />
                                

                <Route path={'/Contact'} exact
                       render={(props) =>
                           <Contact {...props}
                                 />} />
                                  <Route path={'/Products'} exact
                       render={(props) =>
                           <Products {...props}
                                 />} />

<Route path={'/Design'} exact
                       render={(props) =>
                           <Design {...props}
                                 />} />
  <Route path={'/Error'} exact
                       render={(props) =>
                           <Error {...props}
                                 />} />
            </Switch>
        </div>
    );
  }
  return (
    <div className='App-background'>
   <Router>
   <div >
    <Fragment>
    {getAppContent()}
        </Fragment>
        </div>
        <hr className='hr'/>
        <Footer/>
  </Router>

  </div>
  );
  


}
export default App;
