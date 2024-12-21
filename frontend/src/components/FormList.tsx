import { useNavigate } from "react-router-dom";
import logo from "/formsLogo.png";
import { useAuth } from "../store/useAuth";
import { useEffect } from "react";

function FormList() {
  const navigate = useNavigate();
  const { getAllForms, userForms } = useAuth();
  useEffect(() => {
    getAllForms();
  }, []);
  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="w-[80%]">
        <div>
          <p className="font-medium mb-10">Recent forms</p>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md bg-white px-10 py-7">
          <table className="table-auto w-full text-sm text-left text-gray-600">
            <tbody>
              {userForms?.map((form, index) => {
                return (
                  <tr
                    className="cursor-pointer hover:bg-purple-100"
                    onClick={() => navigate(`/forms/${form.id}/edit`)}
                    key={index}
                  >
                    <th className="p-4 rounded-l-full">
                      <img src={logo} className="w-6" alt="Form Logo" />
                    </th>
                    <td className="p-4 font-medium">{form.title}</td>
                    <td className="p-4 text-right rounded-r-full">
                      {form.status === "PUBLISHED" ? (
                        <span className="badge badge-success">PUBLISHED</span>
                      ) : (
                        <span className="badge badge-error">UNPUBLISHED</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FormList;
