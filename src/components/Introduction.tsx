import {
  ActionIcon,
  Button,
  Center,
  Group,
  Image,
  Paper,
  Text,
  TooltipFloating,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconLanguage } from "@tabler/icons-react";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";

function Introduction() {
  let screenWidth = window.innerWidth;
  const { language, changeLanguage } = useContext(LanguageContext)!;
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
            <Center>
              <TooltipFloating
                label={
                  language === "en"
                    ? "Clicca qui per impostare la lingua italiana"
                    : "Click here to set the language to english!"
                }
              >
                <ActionIcon size={"lg"} radius={"md"} mb={"1rem"}>
                  <IconLanguage
                    onClick={() => {
                      language === "en"
                        ? changeLanguage("it")
                        : changeLanguage("en");
                    }}
                  />
                </ActionIcon>
              </TooltipFloating>
            </Center>

            <Text fw={700} ta={"center"} size="2rem">
              {language == "en" ? "About me" : "Chi sono"}
            </Text>
            <Text
              p={"1rem"}
              size="1.2rem"
              fw={400}
              ta={"center"}
              style={{ lineHeight: "1.5rem" }}
            >
              {language === "en"
                ? "I am a student currently studying Computer Science at Sapienza, University of Rome. My interests for tech, VR and AR devices specifically, led me to discover the wonderful worlds of programming and electronics. I am looking for opportunities to learn and grow as a developer."
                : "Attualmente sono uno studente di Informatica presso la Sapienza, Universitá di Roma. Il mio interesse per la tecnologia, e in particolare per i dispositivi VR e AR, mi ha portato a scoprire i meravigliosi mondi della programmazione e dell'elettronica. Sono alla ricerca di opportunitá per imparare e crescere come sviluppatore."}
            </Text>
          </Paper>
        </Group>
      </motion.div>
    </div>
  );
}

export default Introduction;
