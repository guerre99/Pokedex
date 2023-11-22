import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

function SearchBox({ value, onChange, ...rest }) {
	return (
		<InputGroup>
			<InputLeftElement pointerEvents="none">
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</InputLeftElement>
			<Input type="text" value={value} onChange={onChange} {...rest} />
		</InputGroup>
	)
}
export default SearchBox
