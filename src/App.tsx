import { SimpleGrid } from "@mantine/core";
import ProjectElement from "./components/ProjectElement";
import PageHeading from "./components/PageHeading";

function App() {
  return (
    <>
      <PageHeading />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={"1rem"}>
        <ProjectElement
          githubLink="https://github.com/saverioscagnoli/bomberman"
          image="https://www.retrogames.cz/games/1037/SNES_01.gif"
          description="A Bomberman clone made in Java. very fun. much wow."
          title="JBomberman"
          language="java"
        />
        <ProjectElement
          githubLink="https://github.com/saverioscagnoli/bomberman"
          image="https://media.tenor.com/Oas_7V6NajEAAAAe/laugh-point.png"
          description="yeah."
          title="This fucking website"
          language="react"
        />
      </SimpleGrid>
    </>
  );
}

export default App;
