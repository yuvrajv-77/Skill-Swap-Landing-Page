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
  Textarea,
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
  const [isloading, setIsLoading] = useState();
  const [dialogopen, setdialogOpen] = useState(open)
  const [title,setTitle] = useState("")
  const [description, setDescription] = useState("")
  // function to add skills to array
  const handleChange = (event) => {
    setInput(event.target.value);
    const newSkills = event.target.value.split(',').map(skill => skill.trim());
    setSkills(newSkills);
    // console.log(skills);
  };
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading('true');

    // Check if all fields are filled
    const areFieldsFilled = input && skills.length > 0 && college && education && expertise && experience && city && age;
    const data = {
      college: college,
      education: education,
      expertise: expertise,
      experience: experience,
      skills: skills,
      city: city,
      age: age,
      title: title,
      description: description
    };
    if (areFieldsFilled) {
      
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${authUser.token}`
          }
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await axios.post(`http://localhost:6001/api/profile/${authUser._id}`, data, config);
        console.log("updated",response.data.updated);
        setAuthUser(response.data.updated);

        setIsLoading(false)

      } catch (e) {
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
          <CardBody className="flex flex-col gap-3">
            <h1 className='text-2xl font-bold text-black'>Hello, {authUser?.name}</h1>
            <h1 className='text-xl'>Complete Your Profile</h1>
            <div className='flex gap-7'>


              <div className='space-y-4 w-full'>
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
                  type="number"
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
              <div className='space-y-4 w-full'>
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
              <h1 className='text-lg font-semibold mb-3 '>Add Skills</h1>
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                variant='outlined'
                label='Type Your Skills'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleChange}
                placeholder="Add Skills comma seperated" />
            </div>
            <div className='space-y-2'>
              <h1 className='text-lg font-semibold mb-2 '>Add Bio</h1>
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                variant='outlined'
                label='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add Title" />

                <Textarea 
                  type="text"
                  color="lightBlue"
                  size="regular"
                  variant='outlined'
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  
                />
            </div>

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient"
              loading={isloading}
              disabled={!college || !education || !expertise || !experience || !skills.length || !city || !age}
              onClick={handleSubmit}
              className=" flex justify-center"
              fullWidth>
              Submit
            </Button>

          </CardFooter>
        </Card>
      </Dialog>
    </div>
  )
}

export default DialogForm