import React from "react";
import { CalendarPage } from "./stories/pages/CalendarPage";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  html {
    font-size: 15px;
  }
  
  body { 
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <div className="App">
      <Globals />
      <CalendarPage />
    </div>
  );
}

export default App;
