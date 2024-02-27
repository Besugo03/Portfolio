import { Badge, Button, Card, Center, Group, Image, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconCoffee,
  IconBrandPython,
  IconBrandReact,
  IconInfinity,
  IconCpu,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import useLanguage from "../hooks/useLanguage";

interface ProjectElementProps {
  title: string;
  titleIT: string;
  description: string;
  descriptionIT: string;
  image: string;
  ProjectLink: string;
  programmingLanguage: string;
}

function ProjectElement({
  title,
  titleIT,
  description,
  descriptionIT,
  image,
  ProjectLink,
  programmingLanguage,
}: ProjectElementProps) {
  const { language } = useLanguage();
  const githubIcon = <IconBrandGithub />;
  let labelIcon;
  let labelColor;
  switch (programmingLanguage.toLowerCase()) {
    case "java":
      labelIcon = <IconCoffee />;
      labelColor = "orange";
      break;
    case "python":
      labelIcon = <IconBrandPython />;
      labelColor = "blue";
      break;
    case "react":
      labelIcon = <IconBrandReact />;
      labelColor = "cyan";
      break;
    case "arduino":
      labelIcon = <IconInfinity />;
      labelColor = "teal";
      break;
    case "embedded":
      labelIcon = <IconCpu />;
      labelColor = "green";
  }

  return (
    <Center>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 2.5 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder w={"20rem"}>
          <Card.Section>
            <Image src={image} height={"200rem"} alt="Image" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={600}>{language == "en" ? title : titleIT}</Text>
            <Badge color={labelColor} leftSection={labelIcon} h={"1.5rem"}>
              {programmingLanguage}
            </Badge>
          </Group>

          <Text size="sm" c="dimmed">
            {language == "en" ? description : descriptionIT}
          </Text>
          {ProjectLink === "" ? null : (
            <motion.div whileHover={{ scale: 1.05, y: -5 }}>
              <Button
                onClick={() => {
                  window.open(ProjectLink);
                }}
                color={ProjectLink.includes("youtube") ? "red" : "black"}
                rightSection={
                  ProjectLink.includes("youtube") ? (
                    <IconBrandYoutube />
                  ) : (
                    githubIcon
                  )
                }
                fullWidth
                mt="md"
                radius="md"
              >
                {ProjectLink.includes("youtube")
                  ? language == "en"
                    ? "Watch the Demo"
                    : "Guarda il video"
                  : language == "en"
                  ? "Go to the repository"
                  : "Vai alla repository di Github"}
              </Button>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </Center>
  );
}

export default ProjectElement;
