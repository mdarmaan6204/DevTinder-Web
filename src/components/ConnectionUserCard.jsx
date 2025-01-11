import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/request";

const ConnectionUserCard = ({ user, showActions }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (user.length == 0) return <div></div>;


  const { _id, fname, lname, skills, about, photoUrl, gender, age } = user;

  const reviewRequest = async (status) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <div className="my-4 px-4 ">
      <div className="card card-side bg-neutral-400 shadow-xl">
        <figure className="rounded-full h-40 w-40 my-auto">
          <img src={photoUrl} alt="profile photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-b">{fname + " " + lname}</h2>
          {age && gender && (
            <p className="my-2 font-bold text-emerald-500 ">
              {gender + " / " + age}
            </p>
          )}
          <p className="font-serif">{about} </p>
          {showActions && (
            <div className="card-actions justify-end">
              <button
                className="btn bg-red-500"
                onClick={() => reviewRequest("rejected")}
              >
                Reject
              </button>
              <button
                className="btn bg-green-500"
                onClick={() => reviewRequest("accepted")}
              >
                Accept
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectionUserCard;
