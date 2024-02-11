import { useContext } from "react";
import AppContext from "../context";

const Header = () => {
  const { selectedTeam, Employees } = useContext(AppContext);
  const selectedTeamMemberCount = Employees.filter(
    (employee) => employee.teamName === selectedTeam
  ).length;
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Members Allocation:</h1>
          <h3>
            The {selectedTeam} has {selectedTeamMemberCount}{" "}
            {selectedTeamMemberCount <= 1 ? "Member" : "Members"}.
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
