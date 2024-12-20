import { FaPlus } from "react-icons/fa6";

function CreateForm() {
  return (
    <div className=" fixed bottom-10 right-10">
      <div className="flex items-center justify-center w-16 h-16 bg-[#673AB7] text-white text-2xl rounded-full shadow-lg hover:shadow-xl hover:bg-[#5E35B1] transition-all cursor-pointer">
        <FaPlus className="w-full h-8"/>
      </div>
    </div>
  );
}

export default CreateForm;
