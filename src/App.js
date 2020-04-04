import React from "react";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/TopBanner/Services/Services";
import TopNavigaton from "./components/TopNavigation/TopNavigaton";

function App() {
  return (
    <div>
      <TopNavigaton />
      <TopBanner />
      <Services />
    </div>
  );
}

export default App;
