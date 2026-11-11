import { Badge, Button, Card, Center, Group, Image, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { motion } from "framer-motion";
import useLanguage from "../hooks/useLanguage";
import { getLanguageBadge } from "./LanguageBadgeIcons";
import { projectLinkTypes, type ProjectLink } from "./ProjectLinkTypes";

const IMAGE_HEIGHT = 200;

interface ProjectElementProps {
  title: string;
  titleIT: string;
  description: string;
  descriptionIT: string;
  images: string[];
  programmingLanguages: string[];
  projectLinks?: ProjectLink[];
}

function ProjectElement({
  title,
  titleIT,
  description,
  descriptionIT,
  images,
  programmingLanguages,
  projectLinks = [],
}: ProjectElementProps) {
  const { language } = useLanguage();
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const hasCarousel = images.length > 1;

  return (
    <Center>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 2.5 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder w={"20rem"}>
          <Card.Section>
            <Carousel
              height={IMAGE_HEIGHT}
              slideSize="100%"
              slideGap="0"
              align="start"
              loop
              withControls={hasCarousel}
              withIndicators={hasCarousel}
              plugins={hasCarousel ? [autoplay.current] : []}
              classNames={{
                control: "project-carousel-control",
                indicator: "project-carousel-indicator",
              }}
            >
              {images.map((src, index) => (
                <Carousel.Slide key={src}>
                  <Image
                    src={src}
                    h={IMAGE_HEIGHT}
                    fit="cover"
                    loading="lazy"
                    alt={`${language == "en" ? title : titleIT} ${index + 1}`}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={600}>{language == "en" ? title : titleIT}</Text>
          </Group>

          <Group gap={4} mb="xs">
            {programmingLanguages.map((programmingLanguage) => {
              const { label, color, icon } = getLanguageBadge(programmingLanguage);
              return (
                <Badge
                  key={programmingLanguage}
                  color={color}
                  leftSection={icon}
                  h={"1.5rem"}
                >
                  {label}
                </Badge>
              );
            })}
          </Group>

          <Text size="sm" c="dimmed">
            {language == "en" ? description : descriptionIT}
          </Text>
          {projectLinks.map(({ kind, url, label, labelIT }) => {
            const linkType = projectLinkTypes[kind];
            return (
              <motion.div
                key={kind + url}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Button
                  onClick={() => {
                    window.open(url);
                  }}
                  color={linkType.color}
                  rightSection={linkType.icon}
                  fullWidth
                  mt="md"
                  radius="md"
                >
                  {language == "en"
                    ? label ?? linkType.label
                    : labelIT ?? linkType.labelIT}
                </Button>
              </motion.div>
            );
          })}
        </Card>
      </motion.div>
    </Center>
  );
}

export default ProjectElement;
