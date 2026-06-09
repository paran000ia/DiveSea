import Collection from "./components/Collection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marketplace from "./components/Marketplace";
import WeeklyTopNFT from "./components/WeeklyTopNFT";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WeeklyTopNFT />
      <Collection />
      <Marketplace />
    </>
  );
}

export default App;