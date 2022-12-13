import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Хамалски и транспортни услуги за гр. София, страната и ЕС</title>
        <meta
          name="description"
          content="Movex Bulgaria предлага професионални услуги в сферата на транспорта и
          хамалските услуги, като това включва преместване на дома и офиса, международно преместване, транспортни услуги,
          товаро-разтоварни дейности и преместване на пиана."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default MyApp;
