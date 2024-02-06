import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
const Nav = React.lazy(() => import("./Components/Nav"));
const Header = React.lazy(() => import("./Components/Header"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Employee = React.lazy(() => import("./Components/Employee"));
const PageNotFound = React.lazy(() => import("./Components/PageNotFound"));
const GroupedTeamMember = React.lazy(() =>
  import("./Components/GroupedTeamMember")
);

export default function App() {
  // selected team state:
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
  );

  // employee state:
  const [Employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeesList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  // Change the state of selected team;
  function handleSelectedTeamChange(e) {
    setSelectedTeam(e.target.value);
  }

  // change the team member:
  function handleEmployeeCardClick(employId) {
    const transformedEmployees = Employees.map((employee) =>
      employee.id === employId
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }

  // sending employees data to localStorage:
  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(Employees));
  }, [Employees]);

  // sending selected team data to localStorage:
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        selectedTeamMemberCount={
          Employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Employee
                employees={Employees}
                selectedTeam={selectedTeam}
                handleSelectedTeamChange={handleSelectedTeamChange}
                handleEmployeeCardClick={handleEmployeeCardClick}
              />
            </Suspense>
          }
        ></Route>
        <Route
          path="/GroupedTeamMember"
          element={
            <Suspense fallback={<Loading />}>
              <GroupedTeamMember
                Employees={Employees}
                setSelectedTeam={setSelectedTeam}
                selectedTeam={selectedTeam}
              />
            </Suspense>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
