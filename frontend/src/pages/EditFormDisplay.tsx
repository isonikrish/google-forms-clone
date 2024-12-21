import { useEffect, useState } from "react";
import { MdInsertLink } from "react-icons/md";
import QuestionsList from "../components/QuestionsList";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/useAuth";
import { question } from "../store/types";
import Responses from "../components/Responses";
function FormDisplay() {
  const [tab, setTab] = useState<string>("questions");
  const { id } = useParams<Record<string, string | undefined>>();
  const [questions, setQuestions] = useState<question[]>([]);
  const { getEditForm, editForm, publishForm} = useAuth();

  const parseId = (): number | null => {
    if (id) {
      const parsedId = parseInt(id, 10);
      if (!isNaN(parsedId)) return parsedId;
      console.error("Invalid ID format in URL:", id);
    } else {
      console.error("ID is missing from the URL");
    }
    return null;
  };
  useEffect(() => {
    const parsedId = parseId();
    if (parsedId) getEditForm(parsedId);
  }, [id, getEditForm]);

  const handlePublishForm = async () => {
    const parsedId = parseId();
    if (parsedId) {
      try {
        await publishForm(questions, parsedId);
      } catch (error) {
        console.error("Failed to publish form:", error);
      }
    }
  };
  
  return (
    <div className="pt-8">
      <div className="flex items-center justify-between px-10">
        <div className="flex space-x-4">
          <button>
            <MdInsertLink className="text-xl" />
          </button>
          {editForm?.status === "PUBLISHED" ? (
            <button className="btn bg-green-500 flex items-center space-x-2 text-white hover:bg-green-400 w-32">
              <span>Published</span>
            </button>
          ) : (
            <button
              className="btn bg-purple-500 flex items-center space-x-2 text-white hover:bg-purple-400 w-32"
              onClick={handlePublishForm}
            >
              <span>Publish</span>
            </button>
          )}
        </div>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-bordered">
          <a
            role="tab"
            className={`tab ${tab === "questions" ? "tab-active" : ""}`}
            onClick={() => setTab("questions")}
          >
            Questions
          </a>

          <a
            role="tab"
            className={`tab ${tab === "responses" ? "tab-active" : ""}`}
            onClick={() => setTab("responses")}
          >
            Responses
          </a>
        </div>

        {tab === "questions" ? (
          editForm?.status === "PUBLISHED" ? (
            <QuestionsList setQuestions={setQuestions} questions={editForm.questions} />
          ):  (
            <QuestionsList setQuestions={setQuestions} questions={questions} />
          )
          
        ) : (
          <Responses />
        )}
      </div>
    </div>
  );
}

export default FormDisplay;
