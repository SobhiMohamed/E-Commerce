import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const LogIn = ({ users, setIsLogin }) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const userFound = users.find(
            ({ email, password }) =>
                email == user.email && password == user.password
        );
        if (userFound) {
            setIsLogin(true);
            localStorage.setItem("c", userFound.id);
            navigate("/");
        }
    };
    return (
        <Card
            color="transparent"
            shadow={false}
            className="flex justify-center items-center mt-12"
        >
            <Typography variant="h4" color="blue-gray">
                Log In
            </Typography>
            <form
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                onSubmit={(e) => handleLogin(e)}
            >
                <div className="mb-1 flex flex-col gap-6">
                    <Input
                        label="Email"
                        value={user.email}
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                        }}
                    />
                    <Input
                        label="Password"
                        value={user.password}
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                        }}
                    />
                </div>
                <Button type="submit" className="mt-6" fullWidth>
                    sign up
                </Button>
            </form>
        </Card>
    );
};
export default LogIn;