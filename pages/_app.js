import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movex - Транспортни и хамалски услуги</title>
        <meta
          name="description"
          content="Movex Bulgaria предлага професионлани услуги в сферата на транспорта и
          хамалските услуги. Като това включва преместване на дома, преместване
          на офиса, международно преместване, транспортни услуги,
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
