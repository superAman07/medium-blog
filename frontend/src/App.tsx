import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { Blog } from "./pages/Blog";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");  

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
 
        <Route
          path="/blogs"
          element={isAuthenticated ? <Blogs /> : <Navigate to="/signin" />}
        />
        <Route
          path="/blog/:id"
          element={isAuthenticated ? <Blog /> : <Navigate to="/signin" />}
        />
        <Route
          path="/publish"
          element={isAuthenticated ? <Publish /> : <Navigate to="/signin" />}
        />
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/blogs" /> : <Navigate to="/signin" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
