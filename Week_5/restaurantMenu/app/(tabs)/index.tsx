import React, { useState } from "react";
import HomeScreen from "./HomeScreen";
import MenuScreen from "./MenuScreen";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  const goToMenu = () => setCurrentScreen("menu");

  const goToHome = () => setCurrentScreen("home");

  return (
    <>
      {currentScreen === "home" ? (
        <HomeScreen onNext={goToMenu} />
      ) : (
        <MenuScreen onHome={goToHome} />
      )}
    </>
  );
};

export default Index;