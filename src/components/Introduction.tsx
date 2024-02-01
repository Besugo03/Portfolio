import { Group, Image, Paper, Text } from "@mantine/core";
import { motion } from "framer-motion";

function Introduction() {
  let screenWidth = window.innerWidth;
  return (
    <div style={{ overflow: "hidden", position: "relative", zIndex: "2" }}>
      <motion.div
        animate={{ x: [-150, screenWidth + 100] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <Image
          mt={"1rem"}
          src={"https://i.imgur.com/DuDe3YI.gif"}
          w={"5rem"}
          m={"-2rem"}
        />
      </motion.div>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 2.5 }}>
        <Group justify="center" bg={""}>
          <Paper shadow="sm" radius={"2rem"} w={"85vw"} m={"1rem"}>
            <Text
              p={"1rem"}
              size="1.2rem"
              fw={400}
              ta={"center"}
              style={{ lineHeight: "1.5rem" }}
            >
              I am a young student, with a burning passion for cutting-edge
              technologies and software development. My interests for building
              my own VR and AR hardware led me to learn programming languages
              such as C, C++, Java, Python, and Javascript. I am currently
              studying Computer Science at the University of Sapienza in Rome,
              and I am looking for opportunities to learn and grow as a
              developer.
            </Text>
          </Paper>
        </Group>
      </motion.div>
    </div>
  );
}

export default Introduction;
