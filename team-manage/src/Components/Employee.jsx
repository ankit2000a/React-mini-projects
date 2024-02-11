import Team from "./Team";
import TeamMembers from "./TeamMembers";

const Employee = () => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Team />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;
