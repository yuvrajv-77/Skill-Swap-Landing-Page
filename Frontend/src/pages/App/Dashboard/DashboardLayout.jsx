import React, { useContext, useEffect, useState } from 'react'
import Searchbox from './Searchbox'
import { AuthContext } from '../../../context/AuthContext';
import BrandName from "../../../assets/brandName.svg?react";
import BrandLogo from "../../../assets/brandLogo.svg?react";
import SkillCard from './SkillCard';
import {
  Avatar, Menu, MenuHandler, MenuList, MenuItem, Tooltip, Typography, Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,

  Input,
  Checkbox,
} from "@material-tailwind/react";
import DialogForm from '../../../components/DialogForm';


function DashboardLayout() {
  const { authUser, setAuthUser, selectedChat, setSelectedChat, searchSkill, setSearchSkill } = useContext(AuthContext);
  const [isloading, setIsloading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  // const [dialogOpen, setDialogOpen] = React.useState(!authUser?.skills || authUser.skills.length === 0);
  // const handleOpen = () => setDialogOpen((cur) => !cur);
  // const handleOpen = () => {
  //   if (authUser.skills && authUser.skills.length > 0) {
  //     setDialogOpen((cur) => !cur);
  //   }
  // };
  const [dialogOpen, setDialogOpen] = React.useState(false);

  useEffect(() => {
    setDialogOpen(!authUser?.skills || authUser.skills.length === 0);
  }, [authUser?.skills]);



  const logOut = () => {
    localStorage.removeItem('userLocalData');
    navigate('/')
  }
  return (
    <div className='h-screen ml-[100px]'>
      <div className='flex  items-center justify-between px-11'>
        <a href="" className="flex ">
          <BrandName />
        </a>
        <Menu placement="bottom-end">
          <MenuHandler>

            <div className="py-1 cursor-pointer">
              <Tooltip content={authUser?.name} className='font-poppins rounded-full ' placement='left'>
                <Avatar
                  src={authUser?.avatar}
                  alt="avatar"
                  withBorder={true}
                  className="p-0.5"
                />
              </Tooltip>

            </div>
          </MenuHandler>
          <MenuList className="shadow-2xl rounded-xl">
            <MenuItem className="flex items-center gap-2">
              <Typography
                variant="h5"
                color="black"
                className="font-poppins">
                {authUser?.name}
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
              </svg>
              <p>Profile</p>
            </MenuItem>
            {/* <MenuItem className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                                <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>Dark Mode</p>
                        </MenuItem> */}
            <MenuItem className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                <path d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M11.992 17H12.001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>Help</p>
            </MenuItem>
            <MenuItem className="flex items-center gap-2" onClick={logOut}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#ff0000" fill="none">
                <path d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-red-500">Log Out</p>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className=''>
        <div className='  p-5 flex flex-col items-center my-3 '>
          <div className='p-2 text-center'>
            <h1 className='text-[4.3rem] font-medium text-center'>Connect And Swap Skills</h1>
            <span className='text-[2rem] py-2 px-5 rounded-3xl font- bg-second-500  '>With Like-Minded Peers</span>
          </div>
          <Searchbox />
        </div>

        {/* Results */}
        <div className='border-2 p-10 bg-gray-50 h-full'>
          <div className='flex flex-wrap gap-5 mx-auto'>
            <SkillCard />
           


          </div>
        </div>
      </div>







      <div>
        <DialogForm open={dialogOpen} />

        {/* <Dialog
          size="xs"
          open={dialogOpen}
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
        </Dialog> */}
      </div>
    </div>

  )
}

export default DashboardLayout