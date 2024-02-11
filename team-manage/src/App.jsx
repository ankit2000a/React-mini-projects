import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context";
const Nav = React.lazy(() => import("./Components/Nav"));
const Header = React.lazy(() => import("./Components/Header"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Employee = React.lazy(() => import("./Components/Employee"));
const PageNotFound = React.lazy(() => import("./Components/PageNotFound"));
const GroupedTeamMember = React.lazy(() =>
  import("./Components/GroupedTeamMember")
);

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"..loading"}>
                <Employee />
              </Suspense>
            }
          ></Route>
          <Route
            path="/GroupedTeamMember"
            element={
              <Suspense fallback={"..loading"}>
                <GroupedTeamMember />
              </Suspense>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}
