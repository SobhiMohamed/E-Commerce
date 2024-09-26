import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
const Product = ({ title, price, description, image }) => {
    return (
        <Card className="mt-6 w-96 bg-[#be9a9a] h-[60vh]">
            <CardHeader color="blue-gray" className="relative max-h-60">
                <img
                src={image}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title.slice(0,20)}
                </Typography>
                <Typography>
                    {description.slice(0,30)}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                {price}
            </CardFooter>
        </Card>
    );
};

export default Product;
