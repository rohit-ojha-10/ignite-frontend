import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { SiFireship } from "react-icons/si";
import { useFormik } from "formik";
import axios from "axios";

export default function LoginCard() {
  const [type, setType] = React.useState("card");
  const handleSignUp = async ({ values }) => {
    const response = await axios.post("http://localhost:2000/user/create", {
      ...values,
      username: values.newUsername,
      password: values.newPassword,
    });
    console.log({ response });
  };
  const handleLogin = async ({ values }) => {
    console.log({ values });
    const response = await axios.post("http://localhost:2000/user/login", {
      ...values,
    });
    console.log({ response });
  };
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      newUsername: "",
      newPassword: "",
    },
    onSubmit: async (values) => {
      await handleSignUp({ values });
    },
  });
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      await handleLogin({ values });
    },
  });
  return (
    <Card>
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center"
      >
        <div className="mb-4 h-20 p-6 text-white">
          <SiFireship size={50} />
        </div>
        <Typography variant="h4" color="white">
          Ignite your own project , or help someone else begin one!
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0 ">
            <Tab value="card" onClick={() => setType("card")}>
              Sign In
            </Tab>
            <Tab value="paypal" onClick={() => setType("paypal")}>
              Sign Up
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "card" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "card" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="card" className="p-0">
              <form
                onSubmit={loginForm.handleSubmit}
                className="mt-12 flex flex-col gap-4"
              >
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Username
                  </Typography>
                  <Input
                    type="username"
                    placeholder="username101"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    id="username"
                    value={loginForm.values.username}
                    onChange={loginForm.handleChange}
                  />
                </div>

                <div className="my-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium "
                  >
                    Password
                  </Typography>

                  <Input
                    maxLength={19}
                    type="password"
                    id="password"
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                  />
                </div>
                <Button type="submit" size="lg">
                  Login
                </Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
            <TabPanel value="paypal" className="p-0">
              <form
                onSubmit={signUpForm.handleSubmit}
                className="mt-12 flex flex-col gap-4"
              >
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Name
                  </Typography>
                  <Input
                    type="text"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    id="name"
                    value={signUpForm.values.name}
                    onChange={signUpForm.handleChange}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Username
                  </Typography>
                  <Input
                    type="text"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    id="newUsername"
                    value={signUpForm.values.newUsername}
                    onChange={signUpForm.handleChange}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Email
                  </Typography>
                  <Input
                    type="email"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    id="email"
                    value={signUpForm.values.email}
                    onChange={signUpForm.handleChange}
                  />
                </div>
                <div className="my-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium "
                  >
                    Password
                  </Typography>

                  <Input
                    maxLength={19}
                    type="password"
                    id="newPassword"
                    value={signUpForm.values.password}
                    onChange={signUpForm.handleChange}
                  />
                </div>
                <Button type="submit" size="lg">
                  Signup
                </Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}
