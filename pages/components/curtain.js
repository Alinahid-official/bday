import { Button, HStack, Stack, useBoolean,VStack,Text, Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Particle from "./particle";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/router";

const Curtain = () => {
    const router = useRouter();
    const [flag, setFlag] = useBoolean();
    const handlers = useSwipeable({
        onSwipedUp: (eventData) => router.push("/surprises"),
      });
    return (
        <Stack
            w={'100vw'}
            h={'93vh'}
        >
            <Particle />

            <Stack
                onClick={setFlag.toggle}
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
                left
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
                right
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