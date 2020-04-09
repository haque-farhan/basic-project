import React from "react";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigaton from "./components/TopNavigation/TopNavigaton";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import ClientReview from "./components/ClientReview/ClientReview";

function App() {
  return (
    <div>
      <TopNavigaton />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <ClientReview />
    </div>
  );
}

export default App;
