import { SimpleGrid } from "@mantine/core";
import ProjectElement from "./components/ProjectElement";
import PageHeading from "./components/PageHeading";
import Introduction from "./components/Introduction";

import DataGloveImage from "./DataGlove.png";
import WebSiteImage from "./WebSite.png";
import ZenImage from "./Zen.png";
import FrierenImage from "./frieren.png";
import TheiaImage from "./Theia.jpeg";
import KeyboardImage from "./Keyboard.jpeg";

function App() {
  return (
    <>
      <PageHeading />
      <Introduction />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={"1rem"}>
        <ProjectElement
          githubLink="https://github.com/saverioscagnoli/bomberman"
          image="https://www.retrogames.cz/games/1037/SNES_01.gif"
          description="A Bomberman clone made in Java as part of my university course. It was made in collaboration with a fellow student, through Github. It was made from complete scratch, engineless."
          title="JBomberman"
          language="java"
        />
        <ProjectElement
          githubLink="https://github.com/saverioscagnoli/bomberman"
          image={WebSiteImage}
          description="Made with love and React. This was my first project using this framework, and it was a great learning experience."
          title="This very website"
          language="react"
        />
        <ProjectElement
          title="Haephaestus"
          description="A data glove made as part of an AR/VR project of mine for easy, intuitive and natural interaction, with a patent-pending unique design and features in its class."
          language="arduino"
          image={DataGloveImage}
          githubLink=""
        />
        <ProjectElement
          title="Theia Visor"
          description="Where my passion from AR/VR started. As soon as i had an eyepatch with a 720p display, i had a need to have better, quicker, and more intuitive interaction with it. This led me to the creation of the Haephaestus data glove, and my personal assistant Zen."
          language="embedded"
          image={TheiaImage}
          githubLink=""
        />
        <ProjectElement
          title="Zen"
          description="A personal assistant developed in Python. It has been made to be configurable and extensible with different APIs, including the possibility of locally hosting your AI models. Currently capable of voice recognition, text-to-speech, and a few other features."
          language="python"
          image={ZenImage}
          githubLink=""
        />
        <ProjectElement
          title="My Keyboards"
          description="All this programming, projects, and the notetaking for university, led me to design a more efficient way to type. I have designed and built my own keyboards, with a custom layout and QMK or custom firmwares."
          language="embedded"
          image={KeyboardImage}
          githubLink=""
        />
        <ProjectElement
          title="AI Image Generation"
          description="I have been experimenting and producing AI images, mainly in anime-style, as a hobby. It is all part of a bigger project of making assets for a game of mine. I have been using this tech since 2022, and improving my skills daily."
          language="python"
          image={FrierenImage}
          githubLink=""
        />
      </SimpleGrid>
    </>
  );
}

export default App;
