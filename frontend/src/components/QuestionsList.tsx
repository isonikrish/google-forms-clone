import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { question } from "../store/types";

function QuestionsList() {
  const [questions, setQuestions] = useState<question[]>([]);
  const [nextId, setNextId] = useState(1);

  function addQuestion() {
    setQuestions([...questions, { id: nextId, question: "" }]);
    setNextId(nextId + 1);
  }

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div>
        <div className="mt-10 flex gap-2">
          <div className="card bg-base-100 w-[600px] shadow-xl border-t-8 border-l-4 border-purple-600">
            <div className="card-body">
              <input
                className="card-title border-b"
                disabled
                value={"Untitled Form"}
              />
            </div>
          </div>
          <div>
            <ul className="menu bg-base-200 rounded-box border">
              <li>
                <a
                  className="tooltip tooltip-right rounded-full bg-white"
                  data-tip="Create"
                  onClick={addQuestion}
                >
                  <FaPlus />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {questions.map((q) => (
            <div
              key={q.id}
              className="card bg-base-100 w-[600px] h-[100px] shadow-xl border-l-4 border-purple-600 mt-4"
            >
              <div className="flex justify-center py-4 px-2">
                <input
                  type="text"
                  placeholder={`Enter question ${q.id}`}
                  className="input input-bordered w-full border border-b border-t-0 border-l-0 border-r-0"
                  value={q.question}
                  onChange={(e) =>
                    setQuestions(
                      questions.map((question) =>
                        question.id === q.id
                          ? { ...question, question: e.target.value }
                          : question
                      )
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionsList;
