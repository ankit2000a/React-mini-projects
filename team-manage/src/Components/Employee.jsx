import Team from "./Team";
import TeamMembers from "./TeamMembers";

const Employee = ({
  employees,
  selectedTeam,
  handleSelectedTeamChange,
  handleEmployeeCardClick,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Team
            selectedTeam={selectedTeam}
            handleSelectedTeamChange={handleSelectedTeamChange}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers
              employees={employees}
              handleEmployeeCardClick={handleEmployeeCardClick}
              selectedTeam={selectedTeam}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;
