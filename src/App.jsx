import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Connections from "./components/Connections";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} >
          <Route path="/login" element={<Login />} />
          <Route path="/connection" element={<Connections />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
