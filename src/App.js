import React from "react";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/TopBanner/Services/Services";
import TopNavigaton from "./components/TopNavigation/TopNavigaton";
import Analysis from "./components/Analysis/Analysis";

function App() {
  return (
    <div>
      <TopNavigaton />
      <TopBanner />
      <Services />
      <Analysis />
    </div>
  );
}

export default App;
