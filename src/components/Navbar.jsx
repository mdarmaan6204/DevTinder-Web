import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="navbar bg-neutral-300 shadow-lg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          devTinder
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <p>Welcome {user?.fname}</p>
          <div className="dropdown dropdown-end mx-7">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Profile Picture" src={user?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/received">Request Received</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
