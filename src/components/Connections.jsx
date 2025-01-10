import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import ConnectionUserCard from "./ConnectionUserCard";

const Connections = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const connection = useSelector((store) => store.connection);

  const fetchConnections = async () => {
    if (connection) {
      return;
    }

    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  };

  useEffect(() => {
    fetchConnections();
  }, [connection]);

  if (connection && connection.length === 0) {
    return (
      <div className="text-2xl font-bold text-red-500 flex justify-center">
        No connection found
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-bold flex justify-center my-4 text-2xl">
        Your Connections
      </h1>
      {connection &&
        connection.map((user) => (
          <ConnectionUserCard user={user} key={user._id} showActions={false} />
        ))}
    </div>
  );
};

export default Connections;
