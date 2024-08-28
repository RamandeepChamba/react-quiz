function Progress({
  numQuestions,
  numAnsweredQuestions,
  index,
  points,
  maxPossiblePoints,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={numAnsweredQuestions}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points} / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
