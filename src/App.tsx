import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { useTranslation } from "react-i18next";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./components/LocalStorageT";

function App() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(light);

  const changeTheme = () => {
    if (theme.title === "light") {
      localStorage.setItem('darkTheme', 'true');
      return setTheme(dark);
    }
    localStorage.setItem('darkTheme', 'false');
    setTheme(light);
  };

  useEffect(() => {
    // Verificar se o tema já foi definido anteriormente no LocalStorage
    const storedTheme = localStorage.getItem("darkTheme");
    if (storedTheme === "true") {
      setTheme(dark);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header changeTheme={changeTheme} />
        <main>
          <h1>{t("Site Multi Idiomas")}</h1>
          <p>
            {t(
              "Este site foi criado com o intuito de utilizar a biblioteca i18n para que esta página possa ser disponibilizada em português e inglês, mudando através de uma alavanca."
            )}
          </p>
        </main>
        <Users />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
