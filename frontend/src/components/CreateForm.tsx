import { FaPlus } from "react-icons/fa6";
import { useAuth } from "../store/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function CreateForm() {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_5"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    } else {
      console.error("Modal element not found");
    }
  };

  const { createForm } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  async function handleCreateForm() {
    const res = await createForm(title);
    if (res && res.status === 200) {
      navigate(`/forms/${res.data.id}/edit`);
      toast.success("Form Created");
    }
  }
  return (
    <div className="fixed bottom-10 right-10">
      <div
        className="flex items-center justify-center w-16 h-16 bg-[#673AB7] text-white text-2xl rounded-full shadow-lg hover:shadow-xl hover:bg-[#5E35B1] transition-all cursor-pointer"
        onClick={openModal}
      >
        <FaPlus className="w-full h-8" />
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <button
            className="absolute top-2 right-2 text-gray-800"
            onClick={() =>
              (
                document.getElementById("my_modal_5") as HTMLDialogElement
              )?.close()
            }
          >
            ✕
          </button>
          <div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Untitled Form"
                className="input input-bordered w-72"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button
                className="btn bg-purple-500 flex items-center space-x-2 text-white hover:bg-purple-400 w-32"
                onClick={handleCreateForm}
              >
                <span>Create</span>
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CreateForm;
