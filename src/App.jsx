import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import UserLayout from "./pages/UserLayout";
import AdminLayout from "./pages/AdminLayout";

function App() {
    const [users, setUsers] = useState(null);
    const [user, setUser] = useState(null);
    const [allProducts,setAllProducts]=useState(null)
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLogin, setIsLogin] = useState(localStorage.c ? true : false);
    const getAllUsers = () => {
        axios({
            method: "get",
            url: `http://localhost:3000/users`,
        }).then(({ data }) => setUsers(data));
    };
    const getUser = () => {
        axios({
            method: "get",
            url: `http://localhost:3000/users/${localStorage.getItem("c")}`,
        }).then(({ data }) => setUser(data));
    };
    const getAllProducts=()=>{
        axios({
            method: "get",
            url: `http://localhost:3000/products`,
        }).then(({ data }) => setAllProducts(data));
    }
    useEffect(() => {
        getAllProducts()
    },[])
    useEffect(() => {
        if (isLogin) getUser();
    }, [isLogin]);
    useEffect(() => {
        getAllUsers();
    }, [isSignUp]);
    return (
        <div>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <UserLayout
                            setIsSignUp={setIsSignUp}
                            users={users}
                            setIsLogin={setIsLogin}
                            isLogin={isLogin}
                            user={user}
                            allProducts={allProducts}
                        />
                    }
                ></Route>
                <Route path="/admin/*" element={<AdminLayout />}></Route>
            </Routes>
        </div>
    );
}

export default App;
