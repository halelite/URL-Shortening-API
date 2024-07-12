import ActionSection from "./components/ActionSection";
import BoostLink from "./components/BoostLink";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <ActionSection />
        <BoostLink />
      </Layout>
    </>
  );
}

export default App;
