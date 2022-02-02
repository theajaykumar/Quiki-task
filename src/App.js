
import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';





function App() {
  
  const useStyles = makeStyles({
    root: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      background: "#14161a",
      color:"white",
      minHeight:'100vh'
    },
  });
  const classes = useStyles();



  return (
   <BrowserRouter>
  
   <div className={classes.root}>
     <Header />
     <Routes>
     <Route path="/" element={<Homepage />} exact/>
     <Route path="/coins/:id" element={<CoinPage />} />
     </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
