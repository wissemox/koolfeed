import logo from './logo.svg';
import './App.css';
import './css/widht.css'
import './css/fontsize.css'
import './css/margin.css'
import './css/fontweight.css'
import Home from './component/Home'
import './css/Resposive/CrasoelResposive.css'
// mt-220
import './css/Resposive/RespoiveVideNumber.css'

import {BrowserRouter ,Route, Switch} from 'react-router-dom'

function App() {
  
  return (
    <div>
      {/* Home */}
      <BrowserRouter>
         {/* Here vide and serche bar */}
         <Route exact path="/" render={()=> <Home/> }/>
         <Route exact path="/Product" render={()=> <p>Welcome</p> }/>
         </BrowserRouter>
        
        <p>a</p>
    </div>
  );
}

export default App;
