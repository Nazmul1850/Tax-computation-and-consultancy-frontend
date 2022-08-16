
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const Protectedroute = ({children})=> {
    const {lawyer} = useAppContext();
    if(!lawyer) {
        return (
            <Navigate to="/home"></Navigate>
        )
    }
    return children;
}

export default Protectedroute;