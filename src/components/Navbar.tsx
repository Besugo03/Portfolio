import {
  ActionIcon,
  Avatar,
  Center,
  Flex,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconBrightness2 } from "@tabler/icons-react";
import myLocalImage from "../Culone.png"; // Adjust the path as needed

function Navbar() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Center bg={""} h={"5rem"}>
      <Flex w={"100%"}></Flex>
      <Flex gap={"lg"} align={"center"} justify={"center"} w={"100%"}>
        <Avatar src={myLocalImage} size={"3rem"}></Avatar>
        <Text size={"xl"} fw={700}>
          Alessandro Pizzuco
        </Text>
      </Flex>
      <Flex w={"100%"} justify={"flex-end"}>
        <ActionIcon
          mr={"2rem"}
          bg={colorScheme === "dark" ? "grape" : "yellow"}
          size={"2.5rem"}
          radius={14}
          onClick={toggleColorScheme}
        >
          {colorScheme === "dark" ? <IconBrightness2 /> : <IconMoon />}
        </ActionIcon>
      </Flex>
    </Center>
  );
}

export default Navbar;
