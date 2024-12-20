import logo from "/formsLogo.png";
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/useAuth";

function Navbar() {
  const {logout, fetchMe} = useAuth()
  const navigate = useNavigate()
  function handleLogout(){
    logout()
    navigate("/")
    fetchMe()
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md px-10">
        <div className="flex-1">
          <Link to={"/forms"} className="flex items-center">
            <img src={logo} alt="logo" className="w-10" />
            <p className="text-black text-xl font-normal">Forms</p>
          </Link>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2 w-[500px]">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border"
            >
              <li>
                <Link to={"/profile"}>
                  <FaUser />
                  Profile
                </Link>
              </li>
              <li>
                <a onClick={handleLogout}>
                  <IoLogOutOutline />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
