import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { use, useEffect } from "react";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
       await axios.post(BASE_URL + "/logout", {
        withCredentials: true,
      });
      dispatch(removeUser());
    //   Remove token cookie
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      navigate("/login");
    } catch (err) {
      navigate("/error");
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return <div>Logout</div>;
};

export default Logout;
