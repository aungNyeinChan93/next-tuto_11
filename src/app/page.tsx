import Counter from "@/components/Counter";
import Navbar from "@/components/Navbar";
import React from "react";

// Home INDEX
const HomePage = async () => {
  return (
    <React.Fragment>
      <main>
        <Navbar />
        <Counter />
      </main>
    </React.Fragment>
  );
};

export default HomePage;
