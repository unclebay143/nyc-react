

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Land from './components/Land';
import About from './components/About';
import Faq from './components/Faq';
import Terms from './components/Terms';
import Login from './components/SignUp-Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <Router>
    <div className="App">
  <Header/>

  <div class="container">
<Switch>
  <Route exact path = "/">
  <Land />
  </Route>
  <Route exact path = "/about-us" component={About}/>
  <Route exact path = "/faq" component={Faq}/>
  <Route exact path = "/terms" component={Terms}/>
  <Route exact path = "/login" component={Login}/>
</Switch>
    
  </div>
  <Footer />
 
</div>
  </Router>
  );
}

export default App;
