import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { authDataContext } from "./AuthContext";
import axios from "axios";

export const adminDataContext = createContext();

function AdminContext({ children }) {
    const [adminData, setAdminData] = useState(null);
    const { serverUrl } = useContext(authDataContext);

    const getAdmin = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/user/getadmin", { withCredentials: true });
            setAdminData(result.data);
        } catch (error) {
            setAdminData(null);
            console.log(error)
        }
    }
    useEffect(() => {
        getAdmin();
    }, [])
    let value = { adminData, getAdmin }
    return (
        <adminDataContext.Provider value={value}>
            {children}
        </adminDataContext.Provider>
    )
}

export default AdminContext