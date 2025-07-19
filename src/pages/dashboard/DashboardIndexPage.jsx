import ProductsIndexPage from '../products/ProductsIndexPage'

export default function DashboardIndexPage(){
    return(<>
        <section className="container my-5">
            <h1 className="text-uppercase">Dashboard</h1>
            <hr />
            <ProductsIndexPage />
        </section>
    </>)
}