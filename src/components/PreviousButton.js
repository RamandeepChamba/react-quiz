import { useQuiz } from "../contexts/QuizContext";

function PreviousButton() {
  const { index, dispatch } = useQuiz();
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
