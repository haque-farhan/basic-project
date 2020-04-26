import React from "react";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigaton from "./components/TopNavigation/TopNavigaton";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import ClientReview from "./components/ClientReview/ClientReview";
import Video from "./components/Video/Video";

function App() {
  return (
    <div>
      <TopNavigaton />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <Video />
      <ClientReview />
    </div>
  );
}

export default App;
