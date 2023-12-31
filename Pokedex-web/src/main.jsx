import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import { RouterProvider } from 'react-router-dom'

import router from './router'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider theme={theme}>
		<RouterProvider router={router} />
	</ChakraProvider>
)
