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
          content="Strover Company изработва, поддържа и развива сайтове. Предлага услуги в сферата на дигиталният маркетинг, като включва SEO, създаване, поддържане и развиване на социални мрежи, брандиране и ребрандиране. За всичко което Ви трябва да е на едно място, на достъпна цена с прекрасно обслужване."
        />
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
        <meta property="og:url" content="https://strover.bg/" />
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
