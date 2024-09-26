import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myIcon from '../../images/icon.jpg'
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
} from "@material-tailwind/react";
import { ChevronDownIcon, Bars2Icon } from "@heroicons/react/24/solid";
const ProfileMenu = ({ setIsLogin, setIsSignUp ,user}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const closeMenu = () => setIsMenuOpen(false);
    const SignOut = () => {
        setIsLogin(false);
        setIsSignUp(false);
        localStorage.removeItem("c");
        navigate("/");
    };
    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    {user?.gender == "male" ? (
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="tania andrew"
                            className="border border-gray-900 p-0.5"
                            src="https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png"
                        />
                    ) : (
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="tania andrew"
                            className="border border-gray-900 p-0.5"
                            src="https://w7.pngwing.com/pngs/439/19/png-transparent-avatar-user-profile-icon-women-wear-frock-face-holidays-women-accessories-thumbnail.png"
                        />
                    )}

                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                <Link to="/profile">
                    <MenuItem
                        onClick={closeMenu}
                        className={`flex items-center gap-2 rounded "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"`}
                    >
                        <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color="red"
                        >
                            Profile
                        </Typography>
                    </MenuItem>
                </Link>
                <Link to="/admin">
                    <MenuItem
                        onClick={closeMenu}
                        className={`flex items-center gap-2 rounded "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"`}
                    >
                        <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color="red"
                        >
                            Dashboard
                        </Typography>
                    </MenuItem>
                </Link>
                <Link to="/" onClick={SignOut}>
                    <MenuItem
                        onClick={closeMenu}
                        className={`flex items-center gap-2 rounded "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"`}
                    >
                        <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color="red"
                        >
                            Sign Out
                        </Typography>
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
    );
};
const NavList = () => {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:gap-12 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <Typography
                as={Link}
                to="/"
                variant="small"
                color="gray"
                className="font-medium text-blue-gray-500"
            >
                <MenuItem className="flex items-center gap-2  text-[1.2rem] lg:rounded-full">
                    <span className="text-gray-900"> Home</span>
                </MenuItem>
            </Typography>
            <Typography
                as={Link}
                to="/products"
                variant="small"
                color="gray"
                className="font-medium text-blue-gray-500"
            >
                <MenuItem className="flex items-center gap-2  text-[1.2rem] lg:rounded-full">
                    <span className="text-gray-900"> Products</span>
                </MenuItem>
            </Typography>
        </ul>
    );
};
const UserHeader = ({ isLogin, setIsLogin, setIsSignUp, user }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    return (
        <Navbar className="mx-auto max-w-screen-3xl p-3 bg-[#9f9393] rounded-none lg:pl-6">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as={Link}
                    to="/"
                    className=" ml-2 cursor-pointer  font-medium  flex flex-col justify-center items-center "
                >
                    <img src={myIcon} className="rounded-full w-12 " alt="" />
                    <p className="font-bold text-[1rem]">Haulify</p>
                </Typography>
                <div className="hidden lg:flex w-[50%] lg:justify-end ">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2  lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>
                {isLogin ? (
                    <ProfileMenu
                        setIsLogin={setIsLogin}
                        setIsSignUp={setIsSignUp}
                        user={user}
                    />
                ) : (
                    <div className="flex lg:ml-auto">
                        <Link to="/login">
                            <Button className="text-[.9rem]" variant="text">
                                <span>Log In</span>
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="text-[.9rem]" variant="text">
                                <span>Sign Up</span>
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
            <Collapse open={isNavOpen} className="overflow-scroll">
                <NavList />
            </Collapse>
        </Navbar>
    );
};

export default UserHeader;
