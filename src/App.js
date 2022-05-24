import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import NotFound from "./pages/NotFound/NotFound";
import Reviews from "./pages/Home/Reviews/Reviews";
import MyOrders from "./pages/MyOrders/MyOrders";
import LogIn from "./pages/LogIn/LogIn/LogIn";
import SignUp from "./pages/LogIn/SignUp/SignUp";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="myorders" element={<MyOrders />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
