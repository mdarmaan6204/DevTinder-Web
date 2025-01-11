import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user, showAction }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) return <div></div>;

  const { _id, fname, lname, skills, about, photoUrl, gender, age } = user;

  const handleAction = async (status) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(_id));
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <div className="flex justify-center my-10 mx-4">
      <div className="card bg-neutral-400 w-96 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={photoUrl} alt="Profile Picture" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{fname + " " + lname} </h2>
          {age && gender && (
            <p className="my-2 font-bold text-emerald-500 ">
              {gender + " / " + age}
            </p>
          )}
          <p className="my-2">{about}</p>
          {showAction && (
            <div className="card-actions">
              <button
                className="btn btn-primary"
                onClick={() => handleAction("ignored")}
              >
                Ignore
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleAction("interested")}
              >
                Interested
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
