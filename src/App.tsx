import { ReactNode } from "react";
import { ThemeProvider } from "./components/theme-provider";

function App({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}

export default App;
