export default function ProductsUI({products,handleDelete,handleView}){
    return(<>
        <div className="container-fluid my-5 p-md-5 p-2 shadow border-top border-info border-5 rounded">
            <h1 className="text-center text-uppercase">Products table</h1>
            <hr />
            <div className="overflow-x-auto">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((product,index)=>{
                                const {id, title, price, image} = product;
                                return<tr key={id}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{price}</td>
                                    <td><img src={image} alt={title} style={{height:'50px', width:'100%', objectFit:'cover'}} /></td>
                                    <td className="d-flex gap-2">
                                        <button className="btn btn-info" onClick={()=> {handleView(id)}}>View</button>
                                        <button className="btn btn-danger" onClick={()=>{handleDelete(id)}}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    </>)
}