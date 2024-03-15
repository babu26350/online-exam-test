export default function QuestionsCount(props) {
  return (
    <>
      {props.count === 1 || (
        <button
          className="buttonstyle"
          onClick={() => props.QuizCountHandler(-1,"count")}
        >
          BACK
        </button>
      )}
      {props.count === props.data.length || (
        <button
          className="buttonstyle"
          onClick={() => props.QuizCountHandler(+1,"count")}
        >
          NEXT
        </button>
      )}
    </>
  );
}
