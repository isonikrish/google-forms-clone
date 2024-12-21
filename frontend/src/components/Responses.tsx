import { useEffect, useState } from "react";
import { useAuth } from "../store/useAuth";
import { useParams } from "react-router-dom";

function Responses() {
  const { getResponses, responses } = useAuth();
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getResponses(id);
  }, [id]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (responses && currentIndex < responses.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentResponse = responses?.[currentIndex];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
        {responses?.length > 0 ? (
          <>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                {currentResponse?.form.title}
              </h1>
              <p className="text-gray-500">Response {currentIndex + 1} of {responses.length}</p>
            </div>


            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">

              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Response by: {currentResponse?.user.username}
                </h2>
                <p className="text-gray-500">{currentResponse?.user.email}</p>
              </div>

              <div className="space-y-4">
                {currentResponse?.answers.map((answer, index) => {
                  const question = currentResponse?.form.questions.find(
                    (q) => q.id === answer.questionId
                  );

                  return (
                    <div
                      key={index}
                      className="p-4 bg-white border rounded-md shadow-sm"
                    >
                      <p className="font-medium text-gray-700">
                        {question?.question}
                      </p>
                      <p className="mt-2 text-gray-600">{answer.answer}</p>
                    </div>
                  );
                })}
              </div>
            </div>


            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrevious}
                className={`px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className={`px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 ${
                  currentIndex === responses.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={currentIndex === responses.length - 1}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500">
            <p>No responses yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Responses;
