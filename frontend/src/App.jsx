import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    // We use BrowserRouter for client side rendering which loads specific content based on the URL path. Routes are used to define different routes in the application, and Route is used to define a specific route and its corresponding component.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User Layout */}
        </Route>
        <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
