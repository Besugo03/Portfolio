import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Import styles of packages that you've installed.
  // All packages except `@mantine/hooks` require styles imports
  <MantineProvider theme={{ fontFamily: "Poppins" }}>
    <App />
  </MantineProvider>
);
