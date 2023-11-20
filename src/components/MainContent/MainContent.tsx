import { Route, Routes } from "react-router-dom";
import ControlSideBar from "../ControlSideBar/ControlSideBar";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainSideBar from "../MainSideBar/MainSideBar";
import Product from "../Product/Product";

function MainContent() {
    return (
        <div>
            <Header></Header>
            <MainSideBar></MainSideBar>
            <div className="content-wrapper" style={{ minHeight: '870px' }}>
                <Routes>
                    <Route path="" Component={Dashboard} />
                    <Route path="dashboard" Component={Dashboard} />
                    <Route path="product" Component={Product} />
                </Routes>
            </div>
            <Footer></Footer>
            <ControlSideBar></ControlSideBar>
            <div className="control-sidebar-bg"></div>
        </div>
    )
}

export default MainContent;