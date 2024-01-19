import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import PublicLayout from "../components/Layout/PublicLayout";
import PrivateLayout from "../components/Layout/PrivateLayout";
import Board from "../pages/Board";
import Home from "../pages/Home";


const AppRoutes = () => {
  console.log("Inside Routes");
  // put the logic for authenticated here
  const isAuthenticated = true;
  return (
    <Routes>
         <Route
      path="/"
      element={
        <PublicLayout>
          <Home />
        </PublicLayout>
      }
    />
      <Route
        path="/board/:id"
        element={
          isAuthenticated ? (
            <PrivateLayout>
              <Board />
            </PrivateLayout>
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
