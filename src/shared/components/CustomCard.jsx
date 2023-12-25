import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Progress,
} from "@material-tailwind/react";

export function CustomCard({ props }) {
  const { title, desc, createdBy, image, raisedAmount, raisingAmount, id } = props;
  const getProgressValue = () => {
    return Math.floor((raisedAmount / raisingAmount) * 100);
  };
  return (
    <Card className="mt-12 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Progress value={getProgressValue()} />
        <Typography
          style={{ margin: "0.2em" ,color:'purple'}}
        >{`Raised ${raisedAmount}ETH out of ${raisingAmount}ETH`}</Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{desc}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
