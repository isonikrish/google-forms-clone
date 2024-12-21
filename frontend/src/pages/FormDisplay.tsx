import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/useAuth";

function FormDisplay() {
  const { id } = useParams();
  const { getForm, form, user ,createResponse} = useAuth();
  const [answers, setAnswers] = useState<{ questionId: number; answer: string }[]>([]);

  useEffect(() => {
    if (id) {
      getForm(id); 
    }
  }, [id]);
  console.log(form)

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => {
      const existingAnswer = prevAnswers.find((a) => a.questionId === questionId);
      if (existingAnswer) {
        return prevAnswers.map((a) =>
          a.questionId === questionId ? { ...a, answer } : a
        );
      } else {
        return [...prevAnswers, { questionId, answer }];
      }
    });
  };

  if (form?.status === "UNPUBLISHED") {
    return (
      <div className="m-10 text-xl font-medium text-gray-500">
        Sorry, this form isn't published yet.
      </div>
    );
  }
  async function handleCreateResponse(){
    await createResponse(form?.id, answers)
  }

  return (
    <div className="p-8 rounded-xl shadow-xl min-h-screen bg-gray-100">
      <div className="w-[50%] flex justify-center flex-col mx-auto">
        <div className="card bg-base-100 shadow-xl border-t-8 border-l-4 border-purple-600 mb-10">
          <div className="card-body">
            <input
              className="card-title border-b"
              disabled
              value={form?.title}
            />
          </div>
        </div>

        <div className="space-y-6">
          {form?.questions.map((question: any) => (
            <div key={question.id} className="card shadow-xl border-l-4 border-purple-600 mb-4 bg-white">
              <div className="card-body p-6">
                <label
                  htmlFor={`question-${question.id}`}
                  className="block text-lg font-medium text-gray-700 mb-4"
                >
                  {question.question}
                </label>
                <input
                  type="text"
                  id={`question-${question.id}`}
                  placeholder="Your answer"
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="w-full px-4 py-2 font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400" onClick={handleCreateResponse}>
            Create Response
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormDisplay;
