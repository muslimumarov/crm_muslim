import "@/styles/globals.css";
import AppContextProvider from "../context";
import UiProvider from "@/ui";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </AppContextProvider>
  );
}
