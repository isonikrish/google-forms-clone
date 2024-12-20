import { useState } from "react";
import { MdInsertLink } from "react-icons/md";
import QuestionsList from "../components/QuestionsList";

function FormDisplay() {
  const [tab, setTab] = useState<string>("questions");
  return (
    <div className="pt-8">
      <div className="flex items-center justify-between px-10">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Untitled Form"
            className="input input-bordered w-72"
          />
        </div>

        <div className="flex space-x-4">
          <button>
            <MdInsertLink className="text-xl" />
          </button>

          <button className="btn bg-purple-500 flex items-center space-x-2 text-white hover:bg-purple-400 w-32">
            <span>Publish</span>
          </button>
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

        {tab === "questions"? <QuestionsList /> : <h1>Your responses</h1>}
      </div>
    </div>
  );
}

export default FormDisplay;
