import React from "react";

import Header from "../header";
import Footer from "../footer";
import SectionWelcome from "../section_welcome/Section";
import SectionWebDev from "../section_webdev/Section";
import SectionContact from "../section_contact/Section";

function App() {
  return (
    <div className="app">
      <Header />
      <SectionWelcome />
      <SectionWebDev />
      <SectionContact />
      <Footer />
    </div>
  );
}

export default App;
