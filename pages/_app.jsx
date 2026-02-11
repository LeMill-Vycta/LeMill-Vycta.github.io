import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

import GoogleAnalytics from "../components/GoogleAnalytics";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { GlobeProvider } from "../components/globe/globeContext";

import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <GlobeProvider>
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.asPath}
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Transition />
            <GoogleAnalytics />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>

        <ToastContainer
          position="bottom-right"
          autoClose={3200}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="dark"
        />
      </Layout>
    </GlobeProvider>
  );
}

export default MyApp;
