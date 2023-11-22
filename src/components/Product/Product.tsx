import {Breadcrumbs} from "../Breadcrumbs/Bredcrumbs";

function Product() {
    return (
        <div>
            <section className="content-header">
                <h1>
                    Product
                    <small>Details</small>
                </h1>
                <Breadcrumbs name="Product"></Breadcrumbs>
            </section>
            <section className="content">
            </section>
        </div>
    )
}
export default Product;