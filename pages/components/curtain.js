import { Button, HStack, Stack, useBoolean, VStack, Text, Center, keyframes, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Particle from "./particle";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Curtain = () => {
    const [seconds, setSeconds] = useState(15);
    const [showButton, setShowButton] = useState(false);
    const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }`
    const moveInRight = keyframes`
        0% {
            opacity: 0;
            transform: translateX(10rem);
        }
    
        80% {
            transform: translateX(-1rem);
        }
    
        100% {
            opacity: 1;
            transform: translate(0);
        }`

    const moveInBottom = keyframes`
        0% {
            opacity: 0;
            transform: translateY(3rem);
        }
    
        100% {
            opacity: 1;
            transform: translate(0);
        }`

    const router = useRouter();
    const [flag, setFlag] = useBoolean();
    const handlers = useSwipeable({
        onSwipedUp: (eventData) => router.push("/surprises"),
    });

    setInterval(() => {
        setSeconds(seconds - 1);
        if(seconds === 0) {
            setShowButton(true);
        }
    }, 1000);

    return (
        <Stack
            animation={`${moveInBottom} 2s ease-in-out`}
            w={'100vw'}
            h={'93vh'}
        >
            <Particle />

            <Stack
               
                style={{ marginTop: 0 }}
                w={'50%'}
                h={'100%'}
                pos={'absolute'}
                top={'0'}
                left={'0'}
                zIndex={'10000000'}
                bg={'#081b29'}
                transform={
                    !flag ? 'translateX(0)' : 'translateX(-100%)'
                }
                transition={'transform 1s ease-in-out'}
            >

                <Center
                    mt={'5rem'}
                >
                    <VStack>
                        <Text
                            animation={`${moveInLeft} 2s ease-in-out`}
                            fontFamily={'Georgia'}
                            p={2}
                            fontSize={'1.2rem'}
                            color={'#fff'}>

                            Happy Birthday
                        </Text>
                        <Text
                            animation={`${moveInLeft} 2s ease-in-out`}
                            fontFamily={'Georgia'}
                            p={2}
                            fontSize={'1.2rem'}
                            color={'#fff'}>

                            &#127874; &#x1F382;
                        </Text>
                        
                        <Flex justifyContent={'flex-end'}>
                            <Text
                             onClick={setFlag.toggle}
                                borderBottom={'1px solid #fff'}
                                mt={'20rem'}
                                ml={'80px'}
                                animation={`${moveInRight} 2s ease-in-out`}
                                p={2}
                                fontSize={'1.2rem'}
                                fontFamily={'Georgia'}
                                color={'#fff'}>
                                    {
                                        showButton ?  'Click here' : 'wait for'
                                    }
                               
                            </Text>
                        </Flex>
                    </VStack>

                </Center>
            </Stack>
            <Stack
                style={{ marginTop: 0 }}
                w={'50%'}
                h={'100%'}
                pos={'absolute'}
                top={'0'}
                left={'50%'}
                zIndex={'10000000'}

                bg={'#081b29'}
                transform={
                    !flag ? 'translateX(0)' : 'translateX(100%)'
                }
                transition={'transform 1s ease-in-out'}
            >
                <Center
                    mt={'5rem'}>
                    <VStack>
                        <Text
                            animation={`${moveInRight} 2s ease-in-out`}
                            p={2}
                            fontSize={'1.2rem'}
                            fontFamily={'Georgia'}
                            color={'#fff'}>
                            Love &#10084;&#65039;
                        </Text>
                        <Text
                            animation={`${moveInRight} 2s ease-in-out`}
                            p={2}
                            fontSize={'1.2rem'}
                            fontFamily={'Georgia'}
                            color={'#fff'}>
                            &#127874; &#x1F382;
                        </Text>
                        <Flex justifyContent={'flex-end'}>
                            <Text  onClick={setFlag.toggle}
                                borderBottom={'1px solid #fff'}
                                mt={'20rem'}
                                mr={'80px'}
                                animation={`${moveInRight} 2s ease-in-out`}
                                p={2}
                                fontSize={'1.2rem'}
                                fontFamily={'Georgia'}
                                color={'#fff'}>
                                    {
                                        showButton ?  'to open' : `${seconds} seconds`
                                    }
                                
                            </Text>
                        </Flex>

                    </VStack>

                </Center>

            </Stack>
            <VStack
                color={'rgba(255, 255, 254, 0.711)'}
                pos={'absolute'}
                top={'80%'}
                left={'50%'}
                transform={'translate(-50%,0)'}
                {...handlers}>
                <Center>Swipe Up For</Center>
                <Center>Surprises </Center>
            </VStack>
        </Stack>
    )
}


export default Curtain;