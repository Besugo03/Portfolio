import { Badge, Button, Card, Center, Group, Image, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconCoffee,
  IconBrandPython,
  IconBrandReact,
  IconInfinity,
  IconCpu,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

interface ProjectElementProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  language: string;
}

function ProjectElement({
  title,
  description,
  image,
  githubLink,
  language,
}: ProjectElementProps) {
  const githubIcon = <IconBrandGithub />;
  let labelIcon;
  let labelColor;
  switch (language.toLowerCase()) {
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
            <Text fw={600}>{title}</Text>
            <Badge color={labelColor} leftSection={labelIcon} h={"1.5rem"}>
              {language}
            </Badge>
          </Group>

          <Text size="sm" c="dimmed">
            {description}
          </Text>
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <Button
              onClick={() => {
                window.open(githubLink);
              }}
              color="black"
              rightSection={githubIcon}
              fullWidth
              mt="md"
              radius="md"
            >
              Visit the github page
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </Center>
  );
}

export default ProjectElement;
