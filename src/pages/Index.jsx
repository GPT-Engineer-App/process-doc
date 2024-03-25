import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Container, SimpleGrid, Icon, Link } from "@chakra-ui/react";
import { FaFileAlt, FaUsers, FaChartLine } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"gray.100"} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"7xl"}>
      <Stack align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Streamline,
            </Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              Document, Succeed!
            </Text>
          </Heading>
          <Text color={"gray.500"}>Our team of experts helps businesses document their processes effectively. We analyze your workflows, create clear documentation, and optimize your operations for maximum efficiency. Let us help you streamline your business processes today!</Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }}>
              Get started
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              Learn more
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
          <Box position={"relative"} height={"300px"} rounded={"2xl"} boxShadow={"2xl"} width={"full"} overflow={"hidden"}>
            <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"100%"} h={"100%"} src={"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlb3BsZSUyMHdvcmtpbmclMjBvbiUyMGRvY3VtZW50aW5nJTIwcHJvY2Vzc2VzfGVufDB8fHx8MTcxMTM5Njk0Nnww&ixlib=rb-4.0.3&q=80&w=1080"} />
          </Box>
        </Flex>
      </Stack>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature icon={<Icon as={FaFileAlt} w={10} h={10} />} title={"Detailed Documentation"} text={"We create comprehensive, easy-to-follow documentation for your business processes."} />
          <Feature icon={<Icon as={FaUsers} w={10} h={10} />} title={"Expert Consulting"} text={"Our team of experienced consultants will analyze your workflows and provide valuable insights."} />
          <Feature icon={<Icon as={FaChartLine} w={10} h={10} />} title={"Improved Efficiency"} text={"By streamlining your processes, we help you increase productivity and reduce costs."} />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;
