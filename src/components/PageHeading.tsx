import {
  ActionIcon,
  Avatar,
  Flex,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconBrightness2, IconMoon } from "@tabler/icons-react";

function PageHeading() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  return (
    <Stack align="center" m={"2rem"}>
      <Group justify="space-between" w={"100%"}>
        <Flex></Flex>
        <motion.div
          animate={{ y: [-300, 0] }}
          transition={{
            duration: 0.3,
            delay: 0.35,
          }}
        >
          <Avatar
            size={"13rem"}
            src={
              "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4bf9339b-10fd-46d2-953d-bcd1d013a2ed/dekffax-c328b79a-687d-4d79-ae5d-7b892d024e3a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiZjkzMzliLTEwZmQtNDZkMi05NTNkLWJjZDFkMDEzYTJlZFwvZGVrZmZheC1jMzI4Yjc5YS02ODdkLTRkNzktYWU1ZC03Yjg5MmQwMjRlM2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LDlCqxkMJqi4zXOM1JETUwO8R3emAPZ34gjOu1u05eg"
            }
          ></Avatar>
        </motion.div>

        <motion.div drag dragMomentum={false}>
          <Stack
            w={"2.5rem"}
            h={"4.5rem"}
            bg="white"
            align="center"
            justify="center"
            style={{
              borderRadius: "0.9rem",
              boxShadow: "0 0 0.5rem 0.1rem rgba(0,0,0,0.2)",
            }}
          >
            <Text fw={500} size="1.5rem" mt={"1rem"} c={"gray"}>
              ≡
            </Text>
            <ActionIcon
              mt={"-0.5rem"}
              bg={colorScheme === "dark" ? "grape" : "yellow"}
              size={"2.5rem"}
              radius={14}
              onClick={toggleColorScheme}
            >
              {colorScheme === "dark" ? <IconBrightness2 /> : <IconMoon />}
            </ActionIcon>
          </Stack>
        </motion.div>
      </Group>
      <motion.div
        animate={{ x: [-1900, 0] }}
        transition={{ duration: 0.3, delay: 0.35 }}
      >
        <Text size={"3rem"} fw={700}>
          Hi, I'm Alessandro Pizzuco
        </Text>
      </motion.div>
      <motion.div
        animate={{ x: [-1900, 0] }}
        transition={{
          duration: 0.3,
          delay: 2.35,
          type: "spring",
          stiffness: 100,
        }}
      >
        <Text size={"2rem"}>But everybody calls me Besughino</Text>
      </motion.div>
    </Stack>
  );
}

export default PageHeading;
