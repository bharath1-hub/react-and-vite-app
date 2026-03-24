import { use, useState } from 'react'
import { Box, Container, Heading, VStack, useColorModeValue,Input, Button } from "@chakra-ui/react";
import { useProductStore } from '../store/product.js';
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const {createProduct}=useProductStore();
  const handleAddProduct = async() => {
  const {success, message} = await createProduct(newProduct);
  console.log("Success:", success, "Message:", message);
  };
    return <Container maxW={"container.sm"}>
      <VStack
        spacing={9}
      >
        <Heading as="h1" size={"2xl"} textAlign={"center"} mb={7}>
          Create Product Here
        </Heading>

        <Box
          w={"full"} bg={useColorModeValue("white", "gray.700")}
          p={6} rounded={"lg"} shadow={"md"}
        >

          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />

            <Input
              placeholder='Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />

            <Input
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />

            <Button colorScheme='teal' onClick={handleAddProduct} w='full'>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>



    </Container>

  };
  export default CreatePage;