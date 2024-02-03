const Header = ({ selectedTeam, selectedTeamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Members Allocation:</h1>
          <h3>
            The {selectedTeam} has {selectedTeamMemberCount} Members.
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
