import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const feed = useSelector((store) => store.feed);

  const fetchFeed = async () => {
    if (feed) {
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      navigate("/error");
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  if (!feed) return;

  if (feed.length === 0) {
    return (
      <div className=" flex justify-center text-red-400 text-2xl font-bold">
        No more user
      </div>
    );
  }

  return (
    <div className="">
      {feed && <UserCard user={feed[0]} showAction={true} />}
    </div>
  );
};

export default Feed;
