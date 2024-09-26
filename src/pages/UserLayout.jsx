import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from '../componants/user/UserHeader';
import Home from "./user/Home";
import LogIn from "./user/LogIn";
import SignUp from "./user/SignUp";
import MainProducts from "./user/MainProducts";
import Profile from "./user/Profile";

const UserLayout = ({setIsSignUp,users,setIsLogin,isLogin,user,allProducts}) => {
  return (
    <div>
      <UserHeader isLogin={isLogin} setIsLogin={setIsLogin} setIsSignUp={setIsSignUp} user={user} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn users={users} setIsLogin={setIsLogin}/>}></Route>
        <Route path="/signup" element={<SignUp  setIsSignUp={setIsSignUp} users={users}/>}></Route>
        <Route path="/products" element={<MainProducts allProducts={allProducts} />}></Route>
        <Route path="/profile" element={<Profile user={user}/>}></Route>
      </Routes>
    </div>  )
}

export default UserLayout