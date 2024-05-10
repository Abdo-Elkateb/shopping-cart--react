
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MyContextProvider from './components/share-data/ContTextApi';
import Cart from './components/Cart';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <MyContextProvider>
        <div className='col-2'>
          <Cart />

        </div>
        {/* <Navbar/> */}
        <div className='col-10'>
          <Header />


        </div>
    

      </MyContextProvider>
    </>
  );
}

export default App;
