import CreateForm from "../components/CreateForm";
import FormList from "../components/FormList";

function Forms() {
  return (
    <div>
      <CreateForm />
      <div className="mx-10 my-10 ">


        <FormList />
      </div>
    </div>
  );
}

export default Forms;
