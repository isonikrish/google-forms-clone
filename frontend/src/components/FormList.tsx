import { useNavigate } from "react-router-dom";
import logo from "/formsLogo.png";

function FormList() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="w-[80%]">
        <div>
          <p className="font-medium mb-10">Recent forms</p>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md bg-white px-10 py-7">
          <table className="table-auto w-full text-sm text-left text-gray-600">
            <tbody>
              <tr className="cursor-pointer hover:bg-purple-100" onClick={()=>navigate('/forms/2934728/edit')}>
                <th className="p-4 rounded-l-full">
                  <img src={logo} className="w-6" alt="Form Logo" />
                </th>
                <td className="p-4 font-medium">Untitled Form</td>
                <td className="p-4 text-right rounded-r-full">Dec 18, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FormList;
