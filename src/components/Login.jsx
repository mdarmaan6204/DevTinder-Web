import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setSignUp] = useState(false);

  const user = useSelector((store) => store.user);

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data);
    }
  };
  const handlSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          email,
          password,
          fname,
          lname,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile");
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, []);

  return (
    <div className="flex justify-center my-10 ">
      <div className="card bg-neutral-400 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          {isSignUp && (
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
            </div>
          )}
          <div>
            <label className="form-control w-full max-w-xs mb-4">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                value={email}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs mt-4">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="Password"
                value={password}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <p className=" text-red-600 text-lg font-bold">{error}</p>
          {!isSignUp ? (
            <div className="card-actions justify-center my-2">
              <button
                className="btn btn-primary hover:shadow-lg hover:scale-105 font-bold"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="my-auto text-lg text-green-600"
                onClick={() => setSignUp(true)}
              >
                New User?
              </button>
            </div>
          ) : (
            <div className="card-actions justify-center my-2">
              <button
                className="btn btn-primary hover:shadow-lg hover:scale-105 font-bold"
                onClick={handlSignUp}
              >
                Signup
              </button>
              <button
                className="my-auto text-lg text-green-600"
                onClick={() => setSignUp(false)}
              >
                Already User?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
