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
  collapse,
} from "@material-tailwind/react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function DialogForm({ open }) {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const [college, setCollege] = useState('');
  const [education, setEducation] = useState('');
  const [expertise, setExpertise] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [input, setInput] = useState('');
  // function to add skills to array
  const handleChange = (event) => {
    setInput(event.target.value);
    const newSkills = event.target.value.split(',').map(skill => skill.trim());
    setSkills(newSkills);
    // console.log(skills);
  };
  const userinfo = JSON.parse(localStorage.getItem('userLocalData'))
  console.log("userinfo ", userinfo);


  const handleSubmit = async(event)=>{
    event.preventDefault();

    // Check if all fields are filled
    const areFieldsFilled = input && skills.length > 0 && college && education && expertise && experience && city && age;
    const data = {
      college: college,
      education: education,
      expertise: expertise,
      experience: experience,
      skills: skills,
      city: city,
      age: age
    };
    if(areFieldsFilled){
      try{
        const config = {
          headers: {
              Authorization: `Bearer ${authUser.token}`
          }
      }
        
				const response = await axios.post(`http://localhost:6001/api/profile/${userinfo._id}`, data, config);
				console.log(response.data);
        

      }catch(e) {
        console.log("Error in submitting form", e);
      }
    }
    

  }
  


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
                  value={expertise}
                  onChange={(e) => setExpertise(e.target.value)}
                  placeholder="Enter your Expertise" />
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='Age'
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="How Old Are You" />
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='City'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter your City" />
              </div>
              <div className='space-y-8 w-full'>
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='College'
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  placeholder="Enter your College" />
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='Education'
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  placeholder="Enter Your Degree" />
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label='Experience'
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
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
                onKeyDown={handleChange}
                placeholder="Any Experience" />
            </div>

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit} fullWidth>
              Submit
            </Button>
            
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  )
}

export default DialogForm