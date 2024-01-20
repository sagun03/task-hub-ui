import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Board from "../pages/Board";
import Home from "../pages/Home";
import Layout from "../components/Layout/Layout";


const AppRoutes = () => {
  console.log("Inside Routes");
  // put the logic for authenticated here
  const isAuthenticated = true;
  return (
    <Routes>
         <Route
      path="/"
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
      <Route
        path="/board/:id"
        element={
          isAuthenticated ? (
            <Layout>
              <Board />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      {/* Add other routes as needed */}
    </Routes>
  );
};
const AppRouter = () => {
  console.log("Inside AppRouter");
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
export default AppRouter;
