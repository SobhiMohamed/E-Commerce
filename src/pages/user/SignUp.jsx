import React, { useState } from "react";
import {
    Card,
    Input,
    Button,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = ({ setIsSignUp, users }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        role: "user",
    });
    const navigate = useNavigate();
    const sendUser = (e) => {
        e.preventDefault();
        const check = users.find(({ email }) => {
            return email === user.email;
        });
        if (check) {
        } else {
            axios({
                method: "post",
                url: `http://localhost:3000/users`,
                data: user,
            }).then(() => {
                setIsSignUp(true);
                navigate("/login");
            });
        }
    };
    return (
        <Card
            color="transparent"
            shadow={false}
            className="flex justify-center items-center mt-12"
        >
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <form
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                onSubmit={(e) => sendUser(e)}
            >
                <div className="mb-1 flex flex-col gap-6">
                    <Input
                        label="Username"
                        value={user.name}
                        onChange={(e) => {
                            setUser({ ...user, name: e.target.value });
                        }}
                    />
                    <Input
                        label="Email"
                        value={user.email}
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                        }}
                    />
                    <Select
                        label="Select Gender"
                        onChange={(e) => {
                            setUser({ ...user, gender: e });
                        }}
                    >
                        <Option value="female">Female</Option>
                        <Option value="male">Male</Option>
                    </Select>
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

export default SignUp;
