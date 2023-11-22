import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Center,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function ProductCard(Pokemons) {
  const [Pokemon, setPokemon] = useState({})
  useEffect(() => {
    const indiv = async () => {
      const { data } = await axios.get(Pokemons.url)
      setPokemon(data)
    }
    indiv()
  }, [Pokemons])

  if (!Object.values(Pokemon).length) return <p>CARGANDO....</p>

  console.log(Pokemon.types[0].type.name)

  return (
    <Card maxW="sm">
      <CardBody
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading size="md" backgroundColor={Pokemon.types[0].type.name}>
          {Pokemon.name.charAt(0).toUpperCase() + Pokemon.name.slice(1)}
        </Heading>
        <Image
          src={Pokemon.sprites.front_default}
          alt={Pokemon.sprites.front_default}
          borderRadius="lg"
        />
        <Stack mt="2" spacing="3">
          {Pokemon.abilities.map((item) => (
            <Text key={item.slot}>{item.ability.name}</Text>
          ))}
          <Text color="blue.600" fontSize="2xl">
            {Pokemon.weight / 10} Kg.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {Pokemon.height / 10} m.
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}
export default ProductCard
