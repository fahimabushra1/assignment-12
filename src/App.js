import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import NotFound from "./pages/NotFound/NotFound";
import MyOrders from "./pages/Dashbord/MyOrders/MyOrders";
import LogIn from "./pages/LogIn/LogIn/LogIn";
import SignUp from "./pages/LogIn/SignUp/SignUp";
import MyProfile from "./pages/Dashbord/MyProfile/MyProfile";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./pages/Dashbord/DashBoard/DashBoard";
import RequireAuth from "./pages/LogIn/RequireAuth/RequireAuth";
import MyReview from "./pages/Dashbord/MyReview/MyReview";
import Users from "./pages/Dashbord/Users/Users";
import AddProduct from "./pages/Dashbord/AddProduct/AddProduct";
import Payment from "./pages/Dashbord/Payment/Payment";
import RequireAdmin from "./pages/LogIn/RequireAdmin/RequireAdmin";
import ManageProducts from "./pages/Dashbord/ManageProducts/ManageProducts";
import Portfolio from "./pages/Portfolio/Portfolio";
import Products from "./pages/Home/Products/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Products />} />
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail />
          </RequireAuth>} />
        <Route path="dashboard" element={
          <RequireAuth>
            <DashBoard />
          </RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="myreview" element={<MyReview />} />
          <Route path="payment/:id" element={<Payment></Payment>} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="users" element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>} />
          <Route path="manageProducts" element={
            <RequireAdmin>
              <ManageProducts />
            </RequireAdmin>} />
          <Route path="addProduct" element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
