import React, { useContext, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { AuthContext } from "../context/AuthContext";

function DialogForm({ open }) {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { college, setCollege } = useState('');
  const { education, setEducation } = useState('');
  const { expertise, setExpertise } = useState('');
  const { experience, setExperience } = useState('');
  const { skills, setSkills } = useState('');
  const { city, setCity } = useState('');
  const { age, setAge } = useState('');
  const { input, setInput } = useState('');

  // function to add skills to array
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSkills([...skills, input]);
      setInput('');
    }
  };
  console.log("Skills", skills);

  return (
    <div>
      <Dialog
        size="xs"
        open={open}
        // handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto -ml-[100px] w-[46rem]">
          <CardBody className="flex flex-col gap-4">
            <h1 className='text-2xl font-bold'>Hello, {authUser?.name}</h1>
            <h1 className='text-xl'>Complete Your Profile</h1>
            <div className='flex gap-8'>


              <div className='space-y-8 w-full'>
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='Expertise'
                  placeholder="Enter your Expertise" />
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='Age'
                  placeholder="How Old Are You" />
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='City'
                  placeholder="Enter your City" />
              </div>
              <div className='space-y-8 w-full'>
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='College'
                  placeholder="Enter your College" />
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='Education'
                  placeholder="Enter Your Degree" />
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='Experience'
                  placeholder="Any Experience" />
              </div>


            </div>
            <div className=''>
              <h1 className='text-lg font-semibold '>Add Skills</h1>
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                variant='outlined'
                label='Type Your Skills'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Any Experience" />
            </div>

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  )
}

export default DialogForm