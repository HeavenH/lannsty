import { Button, Flex, Heading, Text, ButtonGroup, Image, Box } from '@chakra-ui/core'

export default function Home() {
  return (
    <>
    <Flex flexDir="column" height="100vh">

      <Flex marginLeft={8} marginTop={4}>
        <Text fontSize="4xl">Lannsty</Text>
        <ButtonGroup marginLeft={20} marginTop={2} spacing={4}>
          <Button fontSize={20} variantColor="white" size="lg" variant="ghost">Docs</Button>
          <Button fontSize={20} variantColor="white" size="lg" variant="ghost">Api</Button>
          <Button fontSize={20} variantColor="white" size="lg" variant="ghost">Blog</Button>
          <Button fontSize={20} variantColor="white" size="lg" variant="ghost">Faq</Button>
        </ButtonGroup>
        <ButtonGroup marginLeft={1050} spacing={8}>
        <Button width={180} margin={2} variantColor="green" variant="solid" leftIcon="triangle-up">Getting Started</Button>
        </ButtonGroup>
      </Flex>

      <Flex flexDir="column" alignItems="center" marginTop={200}>
        <Heading fontSize='6rem'>Lannsty</Heading>
        <Heading size="xl">The best developer experience with all</Heading>
        <Heading size="xl">the features you need for production.</Heading>
      </Flex>

      <Flex flexDir="row" height="200px" marginTop={5} justifyContent="center">  
        <Button width={180} margin={2} variantColor="green" variant="outline">Start Learning</Button>
        <Button width={180} margin={2} variantColor="green" variant="solid">Documentation</Button>
      </Flex>

      <Flex flexDir="row" justifyContent="space-between" margin={20}>
        <Box color="white">
          <Image src="module.png" alt="Extensible" />
          <Heading size="lg">Extensible</Heading>
        </Box>
        <Box color="white">
          <Image src="skeleton.png" alt="Versatile" />
          <Heading size="lg">Versatile</Heading>
        </Box>
        <Box color="white">
          <Image src="docker.png" alt="Progressive" />
          <Heading size="lg">Progressive</Heading>
        </Box>
      </Flex>
    </Flex>
    </>
  )
}
