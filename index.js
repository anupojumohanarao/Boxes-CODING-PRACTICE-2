const Box = (props) => {
  //  Write your code here.
  const { boxText, className } = props;
  return (
    <div className={`box ${className}`}>
      <h1 className="heading-title">{boxText}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="container-boxes">
      <Box boxText="Small" className="small-card" />
      <Box boxText="Medium" className="medium-card" />
      <Box boxText="Large" className="large-card" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
