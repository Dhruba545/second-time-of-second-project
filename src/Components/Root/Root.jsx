import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex justify-center"><Outlet></Outlet></div>
        </div>
    );
};

export default Root;