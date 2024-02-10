import React, { useState, useEffect } from 'react'
import { Box, Button, Center, ChakraProvider, IconButton, Stack, Text  } from '@chakra-ui/react'
import { FaCheck } from "react-icons/fa6"


const RandomNumberGenerator = () => {
  const [rn0, setRn0] = useState(0)
  const [rn1, setRn1] = useState(0)
  const [rn2, setRn2] = useState(0)
  const [rn3, setRn3] = useState(0)
  const [rn4, setRn4] = useState(0)
  const [rn5, setRn5] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [digits, setDigits] = useState(6)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isGenerating) {
        const newRn0 = Math.floor(Math.random() * 10)
		const newRn1 = Math.floor(Math.random() * 10)
		const newRn2 = Math.floor(Math.random() * 10)
		const newRn3 = Math.floor(Math.random() * 10)
		const newRn4 = Math.floor(Math.random() * 10)
		const newRn5 = Math.floor(Math.random() * 10)
        setRn0(()=>newRn0)
		setRn1(()=>newRn1)
		setRn2(()=>newRn2)
		setRn3(()=>newRn3)
		setRn4(()=>newRn4)
		setRn5(()=>newRn5)
      }
    }, 10)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [isGenerating])

  const handleStartStopButtonClick = () => {
    // Toggle between generating and stopping random numbers
    setIsGenerating((prevIsGenerating) => !prevIsGenerating)
  }
  
  const handleDigitsButtonClick = (d) => {
    // Toggle between generating and stopping random numbers
    setDigits(() => d)
	setIsGenerating(() => false)
	setRn0(()=>0)
	setRn1(()=>0)
	setRn2(()=>0)
	setRn3(()=>0)
	setRn4(()=>0)
	setRn5(()=>0)
  }

  return (
    <ChakraProvider>
		<Stack direction='row' spacing={1} align='center' backgroundColor='teal.50'>
			<Button 
				width='33%' 
				size='lg' 
				colorScheme='teal'
				variant={digits==6?'solid':'ghost'}
				onClick={()=>handleDigitsButtonClick(6)}
			>
				6 digits
			</Button>
			<Button 
				width='33%' 
				size='lg' 
				colorScheme='teal'
				variant={digits==3?'solid':'ghost'}
				onClick={()=>handleDigitsButtonClick(3)}
			>
				3 digits
			</Button>
			<Button 
				width='33%' 
				size='lg' 
				colorScheme='teal'
				variant={digits==2?'solid':'ghost'}
				onClick={()=>handleDigitsButtonClick(2)}
			>
				2 digits
			</Button>
		</Stack>
		<Center mt={16} mb={8}>
			{digits==6?<Text fontSize='8xl'>{rn0}</Text>:<></>}
			{digits==6?<Text fontSize='8xl'>{rn1}</Text>:<></>}
			{digits==6?<Text fontSize='8xl'>{rn2}</Text>:<></>}
			{digits>=3?<Text fontSize='8xl'>{rn3}</Text>:<></>}
			<Text fontSize='8xl'>{rn4}</Text>
			<Text fontSize='8xl'>{rn5}</Text>
		</Center>

		<Center>
		<Box
		  as='button'
		  height='300px'
		  width='300px'
		  backgroundColor={isGenerating?'red.500':'green.600'}
		  border='none'
		  color='white'
		  padding='20px'
		  textAlign='center'
		  textDecoration='none'
		  display='inline-block'
		  fontSize='60px'
		  margin='4px 2px'
		  borderRadius='50%'
		  mt={16}
		  onClick={handleStartStopButtonClick}
		>
		  {isGenerating?'Stop':'Start'}
		</Box>
		</Center>
		
    </ChakraProvider>
  );
};

export default RandomNumberGenerator
