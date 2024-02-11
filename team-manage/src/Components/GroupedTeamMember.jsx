import { useState, useContext } from "react";
import AppContext from "../context";

const GroupedTeamMember = () => {
  const { Employees, selectedTeam, setSelectedTeam } = useContext(AppContext);
  const [groupedTeamData, setGroupedTeamData] = useState(groupedTeamMembers());

  // get all team members grouped:
  function groupedTeamMembers() {
    const teamNames = ["TeamA", "TeamB", "TeamC", "TeamD"];
    let teams = [];

    for (let teamName of teamNames) {
      const teamMembers = Employees.filter(
        (teamItem) => teamItem.teamName === teamName
      );

      const team = {
        teamName,
        teamMembers,
        isCollapsed: selectedTeam === teamName ? false : true,
      };
      teams.push(team);
    }
    return teams;
  }

  // toggle team data:
  function handleTeamClick(e) {
    let transformedGroupedTeam = groupedTeamData.map((groupData) =>
      groupData.teamName === e.currentTarget.id
        ? { ...groupData, isCollapsed: !groupData.isCollapsed }
        : groupData
    );

    setGroupedTeamData(transformedGroupedTeam);
    setSelectedTeam(e.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedTeamData.map((item) => {
        return (
          <div
            key={item.teamName}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.teamName}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {item.teamName}
            </h4>
            <div
              id={"collapse_" + item.teamName}
              className={item.isCollapsed === true ? "collapse" : ""}
            >
              <hr />
              {item.teamMembers.map((member) => {
                return (
                  <div key={member.id} className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full-Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMember;
