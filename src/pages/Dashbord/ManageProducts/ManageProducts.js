import ManageProduct from '../DashBoard/ManageProduct/ManageProduct';
import useProducts from '../../../Hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();


    const handleDelete = productId => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${productId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== productId);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div id="" className='container'>
            <div className="row">
                <h1 className='text-center mb-12 text-4xl'> Our Feature Product</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        products.map(product => <ManageProduct
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}>
                        </ManageProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;