import TeamMemberCard from "./TeamMemberCard";
import { useContext } from "react";
import AppContext from "../context";

const TeamMembers = () => {
  const { Employees } = useContext(AppContext);
  return Employees.map((employ) => (
    <TeamMemberCard key={employ.id} employ={employ} />
  ));
};

export default TeamMembers;
