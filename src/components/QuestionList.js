import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion, updateQuestion}) {

  const questionLists = questions.map((question) =>{
    return <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} updateQuestion={updateQuestion}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionLists}</ul>
    </section>
  );
}

export default QuestionList;
