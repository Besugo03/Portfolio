import { SimpleGrid } from "@mantine/core";
import ProjectElement from "./components/ProjectElement";
import PageHeading from "./components/PageHeading";
import Introduction from "./components/Introduction";

import DataGloveImage from "./assets/DataGlove.png";
import WebSiteImage from "./assets/website.png";
import TheiaImage from "./assets/Theia.jpeg";
import KeyboardImage from "./assets/hotshi.png";
import KeyboardImageDactyl from "./assets/dactyl.png";
import WasaTextImage from "./assets/wasapp.png"

function App() {
  return (
    <>
      <PageHeading />
      <Introduction />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={"1rem"}>
        <ProjectElement
          projectLinks={[
            { kind: "github", url: "https://github.com/Besugo03/bomberman" },
          ]}
          images={["https://www.retrogames.cz/games/1037/SNES_01.gif"]}
          description="A Bomberman clone made in Java as part of my university course. It was made in collaboration with a fellow student, Github. No pre-made engines used."
          descriptionIT="Un clone di Bomberman fatto in Java come parte del mio corso universitario. È stato realizzato in collaborazione con un altro studente, tramite Github. È stato realizzato da zero, senza engine pre-made."
          titleIT="JBomberman"
          title="JBomberman"
          programmingLanguages={["java"]}
        />
        <ProjectElement
          projectLinks={[
            { kind: "github", url: "https://github.com/Besugo03/WasaText" },
          ]}
          images={[WasaTextImage]}
          description="A messaging app built using the Vue framework as my homework entry for the Web And Software Architecture university course, with a GO backend. Supports various modern features such as animated avatars and working embeds"
          descriptionIT="Un'app di messagistica costruita con il framework Vue e backend GO come homework per il progetto universitario di Web And Software Architecture. Supporta varie feature di app moderne come avatar animati e embed."
          titleIT="WasaText/WASApp"
          title="WasaText/WASApp"
          programmingLanguages={["docker", "vue", "go"]}
        />
        <ProjectElement
          projectLinks={[
            { kind: "github", url: "https://github.com/Besugo03/re-encore" },
            { kind: "blog", url: "https://blog.alessandropizzuco.com/Projects/Saving-money-for-storage-in-the-doom-of-AI-era-computing-prices" },
          ]}
          images={[]}
          description="A small docker container based on python with a gradio UI that uses VMAF and ab-av1 to re-encode your media library and save space without any noticeable visual difference"
          descriptionIT="Un piccolo contenitore docker basato su python e con UI in Gradio che utilizza i tool VMAF e ab-av1 per ri-codificare la propria media library e risparmiare spazio senza nessuna differenza all'occhio nudo."
          titleIT="re-encore"
          title="re-encore"
          programmingLanguages={["docker", "python"]}
        />
        <ProjectElement
          title="My Keyboards"
          titleIT="Le mie tastiere"
          description="All of my programming for projects and the notetaking for university led me to seek more efficient ways to type. I have tried open source ergonomic keyboards (Corne, Sofle and Gergoplex) but ultimately designed and built my own. If you are interested, please check out my blog's HCI writeups and design decisions below!"
          descriptionIT="Tutto questo programmare per i progetti e scrivere appunti universitari mi ha portato a cercare un modo più efficiente di scrivere. Ho provato delle tastiere ergonomiche open-source (Corne, Sofle e Gergoplex), ma infine mi sono trovato meglio a crearne di mie. Per chi e' interessato, vi invito a visitare il mio blog, dove potete trovare articoli riguardanti le mie decisioni di design (sia hardware che software) e analisi di interazione uomo-macchina più in generale qui sotto!"
          programmingLanguages={["embedded", "arduino"]}
          images={[KeyboardImage, KeyboardImageDactyl]}
          projectLinks={[
            { kind: "blog", url: "https://blog.alessandropizzuco.com/Projects/Keyboards" },
          ]}
        />
        <ProjectElement
          images={[WebSiteImage]}
          descriptionIT="Fatto con amore e React. Questo è stato il mio primo progetto con questo framework, ed è stata una grande esperienza di apprendimento."
          description="Made with love and React. This was my first project using this framework, and it was a great learning experience."
          title="This very website"
          titleIT="Questo stesso sito web"
          programmingLanguages={["react"]}
        />
        <ProjectElement
          title="Haephaestus"
          titleIT="Haephaestus"
          description="A data glove made as part of an AR/VR project of mine for easy, intuitive and natural interaction. This builds on the same project from Zack Freedman, stripping it of the machine-learning aspect and simplifying it with quaternion-based coordinates."
          descriptionIT="Un guanto smart, come dispositivo di input, realizzato come parte di un mio progetto AR/VR per un'interazione facile, intuitiva e naturale. Questo design si basa su quello di Zack Freedman, meno la componente di machine-learning, rimpiazzata con comandi piu' intuitivi basati su quaternioni."
          programmingLanguages={["arduino", "embedded"]}
          images={[DataGloveImage]}
          projectLinks={[
            { kind: "youtube", url: "https://www.youtube.com/shorts/s-UrG1kOOLk" },
          ]}
        />
        <ProjectElement
          title="Theia Visor"
          titleIT="Theia Visor"
          description="Where my passion from AR/VR started. As soon as i had an eyepatch with a 720p display, i had a need to have better, quicker, and more intuitive interaction with it. This led me to the creation of the Haephaestus data glove."
          descriptionIT="Dove è iniziata la mia passione per AR/VR. Con questo monocolo dotato di un display 720p, ho avuto la necessità di avere un'interazione piu' portatile, più veloce e più intuitiva di un mouse. Questo mi ha portato alla creazione del guanto smart Haephaestus."
          programmingLanguages={["embedded"]}
          images={[TheiaImage]}
        />

      </SimpleGrid>
    </>
  );
}

export default App;
