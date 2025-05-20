import "../App.css";
import "../css/movile.css";

import { Footer } from "./Footer";
import { Header } from "./header";
import { Main } from "./main";

export function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
