import HomePageComponent from "./components/HomePageComponent";
import AboutDeveloperComponent from "./components/AboutDeveloperComponent";
import "./styles/style.css"

//Theme related imports
import { Theme } from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";


function App() {

  return (
    <>
      <ThemeProvider theme={ Theme }>
        <HomePageComponent />
        <AboutDeveloperComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
