import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/LOGODODO-01.svg" />
        <link rel="apple-touch-icon" href="/LOGODODO-01.svg" />
        <meta
          property="og:title"
          content="Movex Bulgaria | Услуги в сферата на пренасянето и транспорта в гр. София, страната и ЕС"
        />
        <meta property="og:description" content=" " />
        <meta
          property="og:image"
          content="https://www.linkpicture.com/q/Неозаглавен-1440-t-1440-пиксела.png"
        />
        <meta
          name="thumbnail"
          content="https://www.linkpicture.com/q/Неозаглавен-1440-t-1440-пиксела.png"
        />
        <meta property="og:url" content="https://movex.bg/" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default MyApp;
