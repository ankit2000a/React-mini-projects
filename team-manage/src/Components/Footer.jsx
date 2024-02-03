const Footer = () => {
  const date = new Date();
  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h6>Jitendra Choudhary - {date.getFullYear()}</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
