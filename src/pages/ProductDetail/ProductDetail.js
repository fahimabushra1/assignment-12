// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetail = () => {
//     const { productId, _id } = useParams();
//     console.log(productId)
//     const [products, setProducts] = useState({});


//     useEffect(() => {
//         const url = `http://localhost:5000/product/${productId}`;
//         console.log(url);
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setProducts(data));

//     }, [])

//     const handleUpdate = (e) => {
//         e.preventDefault()
//         const quantityCount = e.target.quantity.value
//         const stockQuantity = parseInt(products.quantity)
//         console.log(stockQuantity)
//         const updatedQuantityCount = parseInt(quantityCount) + stockQuantity
//         console.log(updatedQuantityCount)
//         const updatedQuantity = { updatedQuantityCount }
//     }



//     const handleDelete = () => {
//         const presentQuantity = parseInt(products.quantity)
//         console.log(presentQuantity)
//         const deletedQuantityCount = presentQuantity - 1
//         console.log(deletedQuantityCount)
//         const deletedQuantity = { deletedQuantityCount }

//     }

//     return (
//         <div>
//             <div className='flex flex-row justify-around'>
//                 <img className='w-1/2' src={products.img} alt="" />
//                 <div className='border-2 px-6 py-40 bg-slate-400 shadow-2xl'>
//                     <h2>{products.name}</h2>
//                     <p className='text-yellow-400 text-2xl'>Price: {products.price}</p>
//                     <p className='my-2'>Description: {products.description}</p>
//                     <p> Minimum Order Quantity: {products.orderQuantity}</p>
//                     <p>Available Quantity: {products.availableQuantity}</p>
//                     <div className='flex flex-row justify-around mt-10'>
//                         <form onSubmit={handleUpdate}>
//                             <input className='mb-2' name='quantity' placeholder='Quantity' type="number" />
//                             <input className='ml-2 cursor-pointer bg-yellow-400 p-2 rounded' type='submit' value='Update' />
//                         </form>
//                         <button className='bg-yellow-400 p-2 rounded' onClick={() => handleDelete(_id)}>deliever</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;