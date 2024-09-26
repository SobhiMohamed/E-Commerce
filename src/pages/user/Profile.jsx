import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
const Profile = ({ user }) => {
    return (
        <div className="flex items-center justify-center mt-12">
            <Card className="mt-6 w-[40rem] mb-7 shadow-2xl	 ">
                <CardHeader
                    color="blue-gray"
                    className="relative h-90 w-[50%] m-auto mt-3"
                >
                    {user?.gender == "male" ? (
                        <img
                            src="https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png"
                            alt="card-image"
                        />
                    ) : (
                        <img
                            src="https://w7.pngwing.com/pngs/439/19/png-transparent-avatar-user-profile-icon-women-wear-frock-face-holidays-women-accessories-thumbnail.png"
                            alt="card-image"
                        />
                    )}
                </CardHeader>
                <CardBody className="flex flex-wrap gap-12">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        UserName : {user?.name}
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Email : {user?.email}
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Password : {user?.password}
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Gender : {user?.gender}
                    </Typography>
                    <Typography variant="h5" color="red" className="mb-2">
                        Role : {user?.role}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 m-auto">
                    <Button>Eidt</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Profile;
