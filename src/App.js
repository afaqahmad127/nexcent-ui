import React from "react";
import {
  Demo,
  Footer,
  Header,
  Banner,
  Clients,
  Manage,
  Caring,
  Smith,
  Spending,
  Business,
  Design,
} from "./components";

const App = () => {
  const homeRef = React.useRef(null);
  const servicesRef = React.useRef(null);
  const featureRef = React.useRef(null);
  const productRef = React.useRef(null);
  const testimonyRef = React.useRef(null);
  const faqRef = React.useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header
        onScrollToSection={scrollToSection}
        homeRef={homeRef}
        servicesRef={servicesRef}
        featureRef={featureRef}
        productRef={productRef}
        testimonyRef={testimonyRef}
        faqRef={faqRef}
      />
      <div ref={homeRef}>
        <Banner />
        <Clients />
      </div>
      <div ref={servicesRef}>
        <Manage />
        <Spending />
      </div>
      <div ref={featureRef}>
        <Business />
        <Design />
      </div>
      <div ref={productRef}>
        <Smith />
        <Caring />
      </div>
      <div ref={testimonyRef}>
        <Demo />
      </div>
      <div ref={faqRef}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
