import { Container, VStack, Heading, Text, Box, Flex, Icon } from "@chakra-ui/react";
import { FaGlobe, FaShareAlt, FaSearch, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const services = [
  {
    icon: FaGlobe,
    title: "Create a Website",
    description: "Your website serves as your digital storefront. Make sure it’s user-friendly, mobile-responsive, and provides essential information about your business.",
  },
  {
    icon: FaShareAlt,
    title: "Leverage Social Media",
    description: "Choose relevant platforms (e.g., Facebook, Instagram, LinkedIn) and create branded profiles. Regularly share content, engage with your audience, and showcase your expertise.",
  },
  {
    icon: FaSearch,
    title: "Optimize for SEO",
    description: "Improve your website’s visibility on search engines by using relevant keywords, creating high-quality content, and obtaining backlinks.",
  },
  {
    icon: FaEnvelope,
    title: "Email Marketing",
    description: "Communicate with your clients via email. Regular newsletters, promotions, and updates can keep your audience engaged.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Local Listings",
    description: "Ensure your business is listed on platforms like Google My Business. This helps local customers find you easily.",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Business Tech Company
        </Heading>
        <Text fontSize="xl" textAlign="center">
          We offer a range of services to help your business thrive in the digital age.
        </Text>
        {services.map((service, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Flex align="center">
              <Icon as={service.icon} w={10} h={10} mr={4} />
              <Box>
                <Heading as="h3" size="lg">
                  {service.title}
                </Heading>
                <Text mt={2}>{service.description}</Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;