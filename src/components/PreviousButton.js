function PreviousButton({ index, dispatch }) {
  if (index === 0) return;

  return (
    <button
      className="btn btn-ui btn-previous"
      onClick={() => dispatch({ type: "previousQuestion" })}
    >
      Previous
    </button>
  );
}

export default PreviousButton;