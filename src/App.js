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
import Payment from "./pages/Dashbord/Payment/Payment";
import RequireAdmin from "./pages/LogIn/RequireAdmin/RequireAdmin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='product/:productId' element={<ProductDetail />} />
        <Route path="blogs" element={<Blogs />} />
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
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
