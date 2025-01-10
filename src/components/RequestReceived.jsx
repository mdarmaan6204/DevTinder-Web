import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRequest } from "../utils/request";
import { useEffect } from "react";
import ConnectionUserCard from "./ConnectionUserCard";
import { BASE_URL } from "../utils/constants";

const RequestReceived = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const request = useSelector((store) => store.request);

  const requestReceived = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });

      console.log(res.data.data);

      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  };

  useEffect(() => {
    requestReceived();
  }, []);

  if (!request) {
    return;
  }

  if (request.length === 0) {
    return (
      <div className="text-2xl font-bold text-red-500 flex justify-center">
        No request found
      </div>
    );
  }

  return (
    <div>
      {request.map((user) => (
        <ConnectionUserCard
          user={user.fromUserId}
          showActions={true}
          key={user._id}
          _id={user._id}
        />
      ))}
    </div>
  );
};

export default RequestReceived;
