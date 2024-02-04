import femaleProfile from "../Assets/femaleProfile.jpeg";
import maleProfile from "../Assets/maleProfile.jpg";

const TeamMemberCard = ({ employ, handleEmployeeCardClick, selectedTeam }) => {
  return (
    <div
      key={employ.id}
      className={
        employ.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={() => handleEmployeeCardClick(employ.id)}
    >
      <img
        className="card-img-top"
        src={employ.gender === "male" ? maleProfile : femaleProfile}
        alt="profile photo"
      />
      <div className="card-body">
        <h5 className="card-title">Full name: {employ.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employ.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
