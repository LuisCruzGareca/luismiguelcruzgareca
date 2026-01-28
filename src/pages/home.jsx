import Footer from "../components/Footer";
import Header from "../components/Header";
import FrontPage from "../components/FrontPage";
import Proyects from "../components/Proyects";
import Experience from "../components/Experience";
import Kills from "../components/kills";

function Home() {
  return (
    <div className="page-wrapper">
      {/* Main */}
      <Header />
      <main>
        <FrontPage />
        <Proyects />
        <Kills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
