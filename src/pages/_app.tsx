import { AppProps } from "next/app";
import Layout from "./layout";
import "./index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
