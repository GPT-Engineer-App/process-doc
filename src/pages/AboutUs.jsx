import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Container maxW={"7xl"} py={12}>
      <Heading as="h1" size="2xl" mb={6}>
        About Us
      </Heading>
      <Text fontSize="xl" mb={8}>
        We are a team of experienced consultants dedicated to helping businesses streamline their processes and improve efficiency through effective documentation. With years of experience in various industries, we understand the challenges companies face in managing complex workflows and ensuring consistency across teams.
      </Text>
      <Text fontSize="xl">Our mission is to empower organizations by providing them with the tools and knowledge they need to optimize their operations. We work closely with our clients to analyze their existing processes, identify areas for improvement, and create clear, comprehensive documentation that enables teams to work more effectively and collaboratively.</Text>
    </Container>
  );
};

export default AboutUs;
