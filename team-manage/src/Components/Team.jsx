import { useContext } from "react";
import AppContext from "../context";

const Team = () => {
  const { selectedTeam, handleSelectedTeamChange } = useContext(AppContext);
  return (
    <select
      className="form-select form-select-lg"
      value={selectedTeam}
      onChange={handleSelectedTeamChange}
    >
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
  );
};

export default Team;
