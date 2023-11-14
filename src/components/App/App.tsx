import './App.css';
import Header from '../Header/Header';
import ControlSideBar from '../ControlSideBar/ControlSideBar';
import MainSideBar from '../MainSideBar/MainSideBar';
import Footer from '../Footer/Footer';
import MainContent from '../MainContent/MainContent';

function App() {
  return (
    <div>
      <Header></Header>
      <MainSideBar></MainSideBar>
      <MainContent></MainContent>
      <Footer></Footer>
      <ControlSideBar></ControlSideBar>
      <div className="control-sidebar-bg"></div>
    </div>    
  );
}

export default App;
