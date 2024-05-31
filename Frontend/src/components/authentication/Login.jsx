import {FormControl,FormLabel,Input,InputGroup,InputRightElement,VStack,Button,} from "@chakra-ui/react";
import React, { useState } from "react";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const buttonClick = () => {
    setShow((show) => !show);
  };
  const submitHandler = () => {};
  return (
    <VStack spacing="5px">
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
      
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >Login</Button>
      <Button variant="solid"
      colorScheme="red"
      width="100%"
      onClick={()=>{
        setEmail("guest@example.com")
        setPassword("123456")
      }}>
        Get Guest User Credentials
      </Button>
    </VStack>
  );
}

export default Login;
