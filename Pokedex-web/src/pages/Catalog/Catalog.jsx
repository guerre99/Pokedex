import { useEffect, useState } from 'react'

import { Heading, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'

import { ProductCard, Pagination, SearchBox } from 'components'

const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=1229'

function Catalog() {
  const [Pokemons, setPokemons] = useState([])

  const [pageSetup, setPageSetup] = useState({
    query: '',
    currentPage: 1,
    pageSize: 45,
  })

  const { currentPage, pageSize, query } = pageSetup

  const offset = (currentPage - 1) * pageSize

  let filteredPokemons = Pokemons

  if (query) {
    filteredPokemons = filteredPokemons.filter((Pokemon) =>
      Pokemon.name.toUpperCase().startsWith(query.toUpperCase())
    )
  }

  useEffect(() => {
    console.log('OH')
    axios.get(baseURL).then(({ data }) => {
      setPokemons(
        data.results.map((item) => ({
          id: item.name,
          name: item.name,
          url: item.url,
        }))
      )
    })
  }, [])

  return (
    <div>
      <Heading px={5} py={2} pos="fixed" zIndex={999} w="100%" bg="background">
        <SearchBox
          bg="text"
          color="black"
          value={query}
          onChange={(e) =>
            setPageSetup({
              ...pageSetup,
              query: e.target.value,
              currentPage: 1,
            })
          }
          placeholder="vamos"
        />
      </Heading>

      <SimpleGrid columns={5} spacing={5} pt="90px" pb={10} px={10}>
        {filteredPokemons.slice(offset, offset + pageSize).map((pokemon) => (
          <ProductCard key={pokemon.id} {...pokemon} />
        ))}
      </SimpleGrid>

      <Pagination
        itemCount={filteredPokemons.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onChangePage={(newPage) =>
          setPageSetup({ ...pageSetup, currentPage: newPage })
        }
      />
    </div>
  )
}
export default Catalog
