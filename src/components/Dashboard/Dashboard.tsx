import  { Breadcrumbs } from "../Breadcrumbs/Bredcrumbs";

function Dashboard() {
    return (
        <div>
            <section className="content-header">
                <h1>
                    Dashboard
                    <small>Version 2.0</small>
                </h1>
              
                <Breadcrumbs name="Dashboard"></Breadcrumbs>
            </section>
            <section className="content">
            
            </section>
        </div>
    )
}
export default Dashboard;