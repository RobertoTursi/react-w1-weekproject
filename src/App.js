import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCarousel from './components/CustomCarousel'
import './App.css';
import DivSottoNavBar from './components/DivSottoNavBar';
import NavBar from './components/NavBar';
import CustomFooter from './components/CustomFooter';

function App() {
  return (
    <>
    <div id="top">
    <NavBar />
    <div className='container-fluid px-4'>
      <DivSottoNavBar />
      <CustomCarousel movie= "Harry Potter"/>
      <CustomCarousel movie= "Lord of Rings"/>
      <CustomCarousel movie= "Batman"/>
      <CustomFooter />
      </div>
      </div>
      </>
  );
  
}

export default App;

//key: de0e22be