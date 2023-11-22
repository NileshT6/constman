import { useNavigate } from "react-router-dom";
import { Search } from "./Search/Search";
import { UserPanel } from "./UserPanel/UserPanel";

function MainSideBar() {
    const dashNavigate= useNavigate();
    //const prodNavigate= useNavigate();
    return (
        <div>
            <aside className="main-sidebar">
                <section className="sidebar">
                    <UserPanel/>
                   <Search/>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview" onClick={()=>dashNavigate('dashboard')}>
                            <a href="#">
                                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            
                        </li>
                        <li className="active treeview" onClick={()=>dashNavigate('product')}>
                            <a href="#">
                                <i className="fa fa-dashboard"></i> <span>Product</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            
                        </li>
                        
                       
                        
                       
                                        
                                              
                        
                        
                    </ul>
                </section>
            </aside>
        </div>
    )
}
export default MainSideBar;