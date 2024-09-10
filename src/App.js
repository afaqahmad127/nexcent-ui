import React from "react";
import { Demo, Footer, Header } from "./components";
import { Banner } from "./components";
import { Clients } from "./components";
import { Manage } from "./components";
import { Spending } from "./components";
import { Business } from "./components";
import { Design } from "./components";
import { Smith } from "./components";
import { Caring } from "./components/caring";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Clients />
      <Manage />
      <Spending />
      <Business />
      <Design />
      <Smith />
      <Caring />
      <Demo />
      <Footer />
    </div>
  );
};

export default App;
