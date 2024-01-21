import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import HomePage from "./components/homePage/HomePage";
import SignUp from "./components/signUpPage/SignUpPage";
import SignIn from "./components/signInPage/SignInPage";
import BrowsePage from "./components/browsePage/BrowserPage";
import FeatureModal from "./components/browsePage/featureModal/FeatureModal";
import CreateMovie from "./components/browsePage/movieModal/CreateMovie";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route
            path={ROUTES.SIGN_IN}
            element={
              // <UserSignedIn user={user}>
              <SignIn />
              // </UserSignedIn>
            }
          />
          <Route
            path={ROUTES.SIGN_UP}
            element={
              // <UserSignedIn user={user}>
              <SignUp />
              // </UserSignedIn>
            }
          />
          <Route
            path={ROUTES.BROWSE}
            element={
              // <ProtectedRoute user = { user }>
              <BrowsePage />
              // </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.FEATURE}
            element={
              // <ProtectedRoute user = { user }>
              <FeatureModal />
              // </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.MOVIE}
            element={
              // <ProtectedRoute user = { user }>
              <CreateMovie />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
