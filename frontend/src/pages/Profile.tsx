import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import { useAuth } from "../store/useAuth";

function Profile() {
  const {user} = useAuth()
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-white shadow-md rounded-xl p-6 space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2 text-gray-600">Your profile information</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center text-gray-500 gap-2">
                <FaUser className="w-4 h-4" />
                <span>Username</span>
              </div>
              <input
                type="text"
                value={user?.username}
                disabled
                className="px-4 py-2 bg-gray-100 rounded-lg border text-gray-600 w-full"
                readOnly
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-gray-500 gap-2">
                <FaEnvelope className="w-4 h-4" />
                <span>Email Address</span>
              </div>
              <input
                type="text"
                value={user?.email}
                disabled
                className="px-4 py-2 bg-gray-100 rounded-lg border text-gray-600 w-full"
                readOnly
              />
            </div>
          </div>

          {/* <div className="mt-6 bg-gray-50 rounded-xl p-6 shadow-inner">
            <h2 className="text-lg font-medium mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="w-4 h-4 text-gray-500" />
                  Member Since
                </span>
                <span>2023-01-01</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
