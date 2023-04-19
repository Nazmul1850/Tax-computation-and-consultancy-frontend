
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const Protectedroute = ({children})=> {
    const {user} = useAppContext();
    if(!user) {
        return (
            <Navigate to="/home"></Navigate>
        )
    }
    return children;
}

export default Protectedroute;