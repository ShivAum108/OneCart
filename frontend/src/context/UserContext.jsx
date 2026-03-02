import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import { authDataContext } from "./AuthContext";

export const userDataContext = createContext();

function UserContext({ children }) {
    const [userData, setUserData] = useState(null);
    const { serverUrl } = useContext(authDataContext);

    const getCurrentUser = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/user/currentuser", { withCredentials: true });
            setUserData(result.data);
        } catch (error) {
            setUserData(null)
            console.log(error)
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, []);

    const value = { userData, getCurrentUser }
    return (
        <userDataContext.Provider value={value}>
            {children}
        </userDataContext.Provider>
    )
}

export default UserContext