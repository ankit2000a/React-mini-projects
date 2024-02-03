import femaleProfile from "../Assets/femaleProfile.jpeg";
import maleProfile from "../Assets/maleProfile.jpg";

const Employee = (props) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={props.selectedTeam}
            onChange={props.handleSelectedTeamChange}
          >
            <option value="TeamA">Team-A</option>
            <option value="TeamB">Team-B</option>
            <option value="TeamC">Team-C</option>
            <option value="TeamD">Team-D</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {props.Employees.map((employ) => (
              <div
                key={employ.id}
                className={
                  employ.teamName === props.selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
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
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;
