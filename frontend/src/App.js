import logo from './logo.svg';
import './App.css';
import 'mdb-ui-kit/css/mdb.min.css';
import { ToastContainer, toast } from 'react-toastify';

import Home from './pages/Home';

function App() {
  return (
    <>
      <ToastContainer autoClose={1000}/>
      <Home />
    </>
  );
}

export default App;
