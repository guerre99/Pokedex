import { Button, HStack } from '@chakra-ui/react'

function Pagination({ itemCount, pageSize, currentPage, onChangePage }) {
  const pageCount = Math.ceil(itemCount / pageSize)
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  return (
    <HStack ml="10px">
      {pages.map((page) => (
        <Button
          key={page}
          isActive={page === currentPage}
          onClick={() => onChangePage(page)}
        >
          {page}
        </Button>
      ))}
    </HStack>
  )
}
export default Pagination
