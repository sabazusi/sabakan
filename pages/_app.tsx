import { AppProps } from "next/app";
import "../css/tailwind.css";

const detectBg = (path) => {
  switch (path) {
    case "/sea":
      return "blue";
    case "/forest":
      return "green";
    case "/volcano":
      return "red";
    default:
      return "indigo";
  }
};
const App = ({ Component, pageProps, router }: AppProps) => (
  <div
    className={`bg-${detectBg(
      router.route
    )}-200 transition-colors duration-500 ease-linear`}
  >
    <Component {...pageProps} />
  </div>
);
export default App;
