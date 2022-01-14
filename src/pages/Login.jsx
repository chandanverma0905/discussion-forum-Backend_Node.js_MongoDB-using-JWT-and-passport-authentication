import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setForm({ ...form, [key]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(form.username);
  };

  return (
    <div>
      <Header>
        <Link to="/">
          <Button colorScheme="teal" variant={"outline"}>
            Signup
          </Button>
        </Link>
      </Header>
      <Center w="100%" height={"50vh"}>
        <Box width="26rem" borderRadius={"10px"} shadow={"xl"} padding={"2rem"}>
          <VStack spacing={4}>
            <Text fontSize={"1.5rem"} fontWeight={"bold"} color="teal">
              Login to Node Blogs
            </Text>
            <Input
              placeholder="Username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleInputChange}
            />
            <Button colorScheme={"teal"} onClick={handleLoginSubmit}>
              Login
            </Button>
          </VStack>
        </Box>
      </Center>
    </div>
  );
};

export default Login;
