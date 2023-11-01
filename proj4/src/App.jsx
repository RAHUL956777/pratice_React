import Header from './components/Header';
import Home from './components/Home';
import './styles/app.scss';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster />
  </Router>;
}

export default App;
