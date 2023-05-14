const { Stack, Text, Center, VStack, Avatar } = require("@chakra-ui/react")
const { default: Love } = require("./components/love")

const MyLovee = () => {
    return (
        <Stack >
            <Love />
            <Text
                color={'#fff'}
                pos={'absolute'}
                top={'20%'}
                left={'50%'}
                transform={'translate(-50%,0)'}
            >
                Hope you liked it..
            </Text>
            <Stack
                p={4}
                bg={'#f2a0d4'}
                color={'#fff'}
            >
                <Text>
                    I m sorry to make you upset sometimes....
                </Text>
                <Text>
                    But I promise I will try my best to make you happy always...
                </Text>
                <Text>
                    I love you so much...&#10084;&#65039;
                </Text>

            </Stack>
            <Stack
                mx={2}
                color={'#f2a0d4'}
                p={'2rem'}
            // bg={'#f2a0d4'}
            >

                <Center>
                    <VStack>
                        <Text fontSize={'1.5rem'}>My Message</Text>
                    </VStack>
                </Center>
                <Text>~ Your Love</Text>
                <Stack>
                    <video src="/nahid.mp4" width="320" height="240" controls />
                </Stack>

            </Stack>
        </Stack>
    )
}
export default MyLovee