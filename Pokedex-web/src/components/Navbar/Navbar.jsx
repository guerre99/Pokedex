import { Box, HStack, Heading, Image } from '@chakra-ui/react'

function Navbar() {
  return (
    <Box
      as="header"
      bg="background"
      color="text"
      pos="fixed"
      w="100%"
      zIndex="999"
    >
      <HStack alignItems="center" h="headerH" justifyContent="start" px={5}>
        <Image src="../Pokeball.svg" />
        <Heading as="h1" size="sm">
          POKÉDEX
        </Heading>
      </HStack>
    </Box>
  )
}
export default Navbar
