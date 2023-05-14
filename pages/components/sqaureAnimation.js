import { Avatar, Button, Center, Stack, Text, VStack } from "@chakra-ui/react"
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import { useRef } from "react"
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const SquareAnimation = () => {

    const router = useRouter();
    const ref = useRef(null)
    return (
        <>
            <div className="area" >
                <VStack
                    color={'#fff'}
                    fontFamily={'Cambria'}
                    mt={'5rem'}
                    mb={'2rem'}
                >
                    <Center>
                        <Text fontSize={'3rem'} >Happy </Text>
                    </Center>
                    <Center>
                        <Text fontSize={'3rem'} > Birthday </Text>
                    </Center>
                    <Center>
                        <Text fontSize={'3rem'} > Rosee ji </Text>
                    </Center>
                    <Center>
                        <Text fontSize={'3rem'} > &#127874; &#x1F382;</Text>
                    </Center>
                    <Center fontSize={'1.5rem'} px={4} style={{ marginBottom: '5rem' }}>
                        <Text>Let me show you the best wishes from some of the great people around </Text>
                    </Center>
                    <Button
                        zIndex={'100000000'}
                        bg={'transparent'}
                        border={'1px solid #fff'}
                        color={'#fff'}
                        onClick={() => {
                            console.log('yes')
                            ref.current.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }}
                    >
                        Click to see
                    </Button>
                </VStack>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div >
            <Stack
                mx={2}
                color={'#f2a0d4'}
                p={'2rem'}
                ref={ref}
            // bg={'#f2a0d4'}
            >

                <Center>
                    <VStack>
                        <Text fontSize={'1.5rem'}>From your Crime Partner</Text>
                        <Avatar size={'2xl'} src="/mamta.jpeg" />
                    </VStack>
                </Center>
                <Text>~ Mamta</Text>
                <Stack>
                    <video src="/mamta.mp4" width="320" height="240" controls />
                </Stack>

            </Stack>
            <Stack
                mx={2}
                color={'#f2a0d4'}
                p={'2rem'}
            // bg={'#f2a0d4'}
            >

                <Center>
                    <VStack>
                        <Text fontSize={'1.5rem'}>Cutie Cat</Text>
                        <Avatar size={'2xl'} src="/cat.jpeg" />
                    </VStack>
                </Center>
                <Text>~ Catherine</Text>
                <Stack>
                    <video src="/cat.mp4" width="320" height="240" controls />
                </Stack>

            </Stack>
            <Stack
                mx={2}
                color={'#f2a0d4'}
                p={'2rem'}
            // bg={'#f2a0d4'}
            >

                <Center>
                    <VStack>
                        <Text fontSize={'1.5rem'}>Uniquely Nargis</Text>
                        <Avatar size={'2xl'} src="/nargis.jpeg" />
                    </VStack>
                </Center>
                <Text>~ Nargis</Text>
                <Stack>
                    <video src="/nargis.mp4" width="320" height="240" controls />
                </Stack>

            </Stack>
            
            <Stack
                mx={2}
                color={'#f2a0d4'}
                p={'2rem'}
            // bg={'#f2a0d4'}
            >

                <Center>
                    <VStack>
                        <Text fontSize={'1.5rem'}>Pretty Precious</Text>
                        <Avatar size={'2xl'} src="/precious.jpeg" />
                    </VStack>
                </Center>
                <Text>~ Precious</Text>
                <Stack>
                    <video src="/precious.mp4" width="320" height="240" controls />
                </Stack>

            </Stack>
            <Stack
                mx={2}
                color={'#f2a0d4'}
                p={'2rem'}
                pb={'5rem'}
            // bg={'#f2a0d4'}
            >

                <Center>
                    <VStack>
                        <Text fontSize={'1.5rem'}>Lovely Jayshree</Text>
                        <Avatar size={'2xl'} src="/jayshree.jpeg" />
                    </VStack>
                </Center>
                <Text>~ Mamta</Text>
                <Stack>
                    <video src="/jayshree.mp4" width="320" height="240" controls />
                </Stack>

            </Stack>
            <Button onClick={() => router.push('/mylove')}
                border={'1px solid #f2a0d4'}
                color={'#fff'}
                bg={'#f2a0d4'}
            >
                Click here for mine  
             </Button>         

        </>

    )
}

export default SquareAnimation