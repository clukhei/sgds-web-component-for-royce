import { Input, Text } from '@chakra-ui/react'

export const ChakraInput = () => {
    return (
        <div>
        <Text as='b'>Label</Text>
        <Text>This is a hint text</Text>
        <Input placeholder='Placeholder' />
        </div>
    )
};