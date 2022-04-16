const Quote = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{props.text}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{props.person}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Quote;
