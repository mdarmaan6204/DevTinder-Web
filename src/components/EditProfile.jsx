import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [fname, setFname] = useState(user?.fname);
  const [lname, setLname] = useState(user?.lname);
  const [age, setAge] = useState(user?.age || 20);
  const [gender, setGender] = useState(user?.gender || "Male");
  const [about, setAbout] = useState(user?.about);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    try {
      setError("");
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { fname, lname, about, gender, age, photoUrl },
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      dispatch(addUser(res?.data?.data));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 7777);
      
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  return (
    <div>
      <div className="flex justify-center my-10 ">
        <div className="flex justify-center my-10 ">
          <div className="card bg-neutral-400 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title flex justify-center">Edit Profile</h2>
              <div>
                <label className="form-control w-full max-w-xs mb-4">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={fname}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs mt-4">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lname}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs mt-4">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </label>
                <label className="form-control w-full max-w-xs mt-4">
                  <div className="label">
                    <span className="label-text">Age</span>
                  </div>
                  <input
                    type="number"
                    value={age}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs mt-4">
                  <div className="label">
                    <span className="label-text">Photo URL</span>
                  </div>
                  <input
                    type="text"
                    value={photoUrl}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs mt-4">
                  <div className="label">
                    <span className="label-text">About</span>
                  </div>
                  <textarea
                    className="textarea"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  ></textarea>
                </label>
              </div>
              <p className=" text-red-600 text-lg font-bold">{error}</p>
              <div className="card-actions justify-center my-2 ">
                <button
                  className="btn btn-primary hover:shadow-lg hover:scale-105 font-bold"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard user={{ fname, lname, about, gender, age, photoUrl }} />
      </div>
      {success && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile updated successfully!!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
