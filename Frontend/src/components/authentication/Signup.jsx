import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,Button } from '@chakra-ui/react'
import React,{useState} from 'react'
import { useToast } from '@chakra-ui/react'
function Signup() {
 const[name,setName]=useState()
 const[email,setEmail]= useState()
 const[password,setPassword]= useState()
 const[confirmpassword,setConfirmpassword]= useState()
 const[pic,setPic]= useState()
 const[show,setShow]=useState(false)
 const[loading,setLoading]=useState(false)
 const toast = useToast()
 const buttonClick=()=>{
  setShow(show=>!show)
 }
 const postDetails=(pic)=>{
  setLoading(true)
  if(pic===undefined){
    toast({
      title:"please select an image",
      status:"warning",
      duration:5000,
      isClosable:true,
      position:"bottom"
    })
    return;
  }
  if(pic.type==="image/jpeg"||pic.type==="image/png"){
    const data=new FormData()
    data.append("file",pic)
    data.append("upload_present","chat app")
    data.append("cloud name", dnacrjqqe);
    fetch("https://api.cloudinary.com/v1_1/dnacrjqqe/image/upload",{
      method:"post",
      body:data
    })
    .then((res)=>res.json())
    .then(data=>{
      setPic(data.url.toString())
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  }
  else{
    toast({
      title: "please select an image",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  }
 }
 const submitHandler=()=>{

 }
  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="enter your Password"
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button onClick={buttonClick}>{show ? "hide" : "show"}</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="Password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="enter your password"
            type={show ? "text" : "password"}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button onClick={buttonClick}>{show ? "hide" : "show"}</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic" isRequired>
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button colorScheme='blue'
      width="100%"
      style={{marginTop:15}}
      onClick={submitHandler}
      isLoading={loading}>
        Signup
      </Button>
    </VStack>
  );
}

export default Signup
