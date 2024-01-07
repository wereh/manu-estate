import { BrowserRouter, Routes,  Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Header from './components/Header';

export default function App() {
  return (<BrowserRouter>
  <Header />

  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Sign-Up' element={<SignUp />} />
    <Route path='/Sign-In' element={<SignIn />} />
    <Route path='/Profile' element={<Profile />} />
    
    
  </Routes>
  </BrowserRouter>
  );
}
