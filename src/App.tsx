import { SimpleGrid } from "@mantine/core";
import ProjectElement from "./components/ProjectElement";
import PageHeading from "./components/PageHeading";
import Introduction from "./components/Introduction";

import DataGloveImage from "./DataGlove.png";
import WebSiteImage from "./website.png";
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
          ProjectLink="https://github.com/saverioscagnoli/bomberman"
          image="https://www.retrogames.cz/games/1037/SNES_01.gif"
          description="A Bomberman clone made in Java as part of my university course. It was made in collaboration with a fellow student, through Github. It was made from complete scratch, engineless."
          descriptionIT="Un clone di Bomberman fatto in Java come parte del mio corso universitario. È stato realizzato in collaborazione con un altro studente, tramite Github. È stato realizzato da zero, senza engine."
          titleIT="JBomberman"
          title="JBomberman"
          programmingLanguage="java"
        />
        <ProjectElement
          ProjectLink=""
          image={WebSiteImage}
          descriptionIT="Fatto con amore e React. Questo è stato il mio primo progetto con questo framework, ed è stata una grande esperienza di apprendimento."
          description="Made with love and React. This was my first project using this framework, and it was a great learning experience."
          title="This very website"
          titleIT="Questo sito web"
          programmingLanguage="react"
        />
        <ProjectElement
          title="Haephaestus"
          titleIT="Haephaestus"
          description="A data glove made as part of an AR/VR project of mine for easy, intuitive and natural interaction, with a patent-pending unique design and features in its class."
          descriptionIT="Un guanto smart, come dispositivo di input, realizzato come parte di un mio progetto AR/VR per un'interazione facile, intuitiva e naturale, con un design e funzionalità uniche nel suo genere, con brevetto in corso."
          programmingLanguage="arduino"
          image={DataGloveImage}
          ProjectLink="https://www.youtube.com/shorts/s-UrG1kOOLk"
        />
        <ProjectElement
          title="Theia Visor"
          titleIT="Theia Visor"
          description="Where my passion from AR/VR started. As soon as i had an eyepatch with a 720p display, i had a need to have better, quicker, and more intuitive interaction with it. This led me to the creation of the Haephaestus data glove, and my personal assistant Zen."
          descriptionIT="Dove è iniziata la mia passione per AR/VR. Appena ho realizzato una benda dotata di un display 720p, ho avuto la necessità di avere un'interazione migliore, più veloce e più intuitiva. Questo mi ha portato alla creazione del guanto smart Haephaestus, e del mio assistente personale Zen."
          programmingLanguage="embedded"
          image={TheiaImage}
          ProjectLink=""
        />
        <ProjectElement
          title="Zen"
          titleIT="Zen"
          description="A personal assistant developed in Python. It has been made to be configurable and extensible with different APIs, including the possibility of locally hosting your AI models. Currently capable of voice recognition, text-to-speech, and a few other features."
          descriptionIT="Un assistente personale sviluppato in Python. È stato realizzato per essere configurabile ed estensibile con diverse API, incluso la possibilità di ospitare i propri modelli di AI in locale. Attualmente capace di riconoscimento vocale, text-to-speech, e alcune altre funzionalità."
          programmingLanguage="python"
          image={ZenImage}
          ProjectLink=""
        />
        <ProjectElement
          title="My Keyboards"
          titleIT="Le mie tastiere"
          description="All this programming, projects, and the notetaking for university, led me to design a more efficient way to type. I have designed and built my own keyboards, with a custom layout and QMK or custom firmwares."
          descriptionIT="Tutto questo programmare, i progetti e gli appunti per l'università, mi ha portato a progettare un modo più efficiente di scrivere. Ho progettato e costruito le mie tastiere, con un layout personalizzato e firmware QMK o custom."
          programmingLanguage="embedded"
          image={KeyboardImage}
          ProjectLink=""
        />
        <ProjectElement
          title="AI Image Generation"
          titleIT="Generazione di immagini con AI"
          description="I have been experimenting and producing AI images, mainly in anime-style, as a hobby. It is all part of a bigger project of making assets for a game of mine. I have been using this tech since 2022, and improving my skills daily."
          descriptionIT="Ho sperimentato e prodotto immagini con AI, principalmente in stile anime, come hobby. Fa parte di un progetto più grande di creazione di asset per un mio gioco. Uso questa tecnologia dal 2022, e sto migliorando le mie abilità quotidianamente."
          programmingLanguage="python"
          image={FrierenImage}
          ProjectLink=""
        />
      </SimpleGrid>
    </>
  );
}

export default App;
