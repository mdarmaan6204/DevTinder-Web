import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Body from "./components/Body";
import Connections from "./components/Connections";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Error from "./components/Error";
import Logout from "./components/Logout";
import RequestReceived from "./components/RequestReceived";

export default function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/received" element={<RequestReceived />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/error" element={<Error />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
