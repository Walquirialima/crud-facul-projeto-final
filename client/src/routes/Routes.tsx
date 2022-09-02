import { Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Switch>
  );
};

export default Routes;