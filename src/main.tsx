import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import LanguageProvider from "./components/LanguageProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Import styles of packages that you've installed.
  // All packages except `@mantine/hooks` require styles imports
  <LanguageProvider>
    <MantineProvider
      theme={{
        fontFamily: "Poppins",
        colors: {
          // Sampled from the background of the avatar gif in PageHeading.tsx.
          // Shade 5 is the exact colour (#5fcde4); the others are a ramp around it
          // so you can use it anywhere as `color="brandblue"`.
          brandblue: [
            "#f0fafd",
            "#e1f5fa",
            "#c6ecf5",
            "#a2e0ee",
            "#7ed5e9",
            "#5fcde4",
            "#45b6cf",
            "#3595ab",
            "#2f798c",
            "#2b6476",
          ],
        },
      }}
    >
      <App />
    </MantineProvider>
  </LanguageProvider>
);
