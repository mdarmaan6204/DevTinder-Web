1. Install react-redux & @redux/toolkit 
2. Configure __appStore__ (Create a file __appSotre.js__ in __utilis__ folder)

        import { configureStore } from '@reduxjs/toolkit';
        import userSlice from './userSlice';

        const appStore = configureStore({
            reducer : {
                user : userSlice
            }
        })

        export default appStore;

3. Create Slice like __userSlice__   (Create a file __userSlice.js__ in __utilis__ folder)


        import {createSlice} from "@reduxjs/toolkit"

        const userSlice = createSlice({
        name: "user",
        initialState: null,

        reducers: {
            addUser(state, action) {
            return action.payload;
            },
            removeUser(state, action) {
            return null;
            },
        },
        });

        export const {addUser , removeUser}  = userSlice.actions;
        export default userSlice.reducer;

4. Wrap the __app.js__ in __Provider__ with appStore

        export default function App() {
        return (
            <div>
            <Provider store={appStore}>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Body />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
                </Provider>
            </div>
        );
        }

5. Add data to store , we have to dispatch action

        import { useDispatch } from "react-redux";
        import { addUser } from "../utils/userSlice";

        const Login = () => {

            // Dispatch the hook
            const dispatch = useDispatch();

            const handleLogin = async () => {
            try {
            const res = await axios.post(
                "http://localhost:7777/login",
                {
                email,
                password,
                },
                { withCredentials: true }
            );
            dispatch(addUser(res?.data?.data));
            console.log(res.data);
            } catch (err) {
            console.log(err);
            }
        };

            //return ...Code
        }

6. To fetch the data from store , we have to subscribe to the store using __useSelector__ hook

        const user = useSelector((store) => store.user);
        
