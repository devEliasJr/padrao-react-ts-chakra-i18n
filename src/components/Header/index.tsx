import { useContext, useState } from "react";
import "../../utils/translate/i18";
import { useTranslation } from "react-i18next";
import { ChangerTheme, Logo, NavMenu, NavMenuItem, Navigation } from "./styles";
import { Flex, Switch } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ThemeContext } from "styled-components";

interface Props {
  changeTheme: () => void;
}

export default function Header({ changeTheme }: Props) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  const handleChange = () => {
    lang === "pt" ? setLang("en") : setLang("pt");
    i18n.changeLanguage(lang);
  };

  const theme = useContext(ThemeContext);

  return (
    <Navigation>
      <Flex justify={"space-between"} maxW={"1100px"} margin={"0 auto"}>
        <Logo>Logo</Logo>
        <NavMenu>
          <NavMenuItem>{t("Inicio")}</NavMenuItem>
          <NavMenuItem>{t("Produtos")}</NavMenuItem>
          <NavMenuItem>{t("Sobre")}</NavMenuItem>
          <NavMenuItem>{t("Contato")}</NavMenuItem>
        </NavMenu>

        <Flex align={"center"} gap={"20px"}>
          <Flex>
            <ChangerTheme
              onClick={() => {
                changeTheme();
              }}
            >
              {theme!.title === "dark" ? (
                <SunIcon boxSize={6} color={"white"} />
              ) : (
                <MoonIcon mt={"2px"} boxSize={6} color={"white"} />
              )}
            </ChangerTheme>
          </Flex>
          <Flex>
            PT
            <Switch
              onChange={handleChange}
              colorScheme="blackAlpha"
              size={"md"}
              padding={"0 5px"}
            />
            EN
          </Flex>
        </Flex>

        {/* <NavMenuItem>
          <ChangerTheme onClick={handleChange}>
            {lang === "pt" ? (
              <>
                <BsTranslate size={25} color="white" />
               
              </>
            ) : (
              <>
                <BsTranslate size={25} color="white" />
               
              </>
            )}
          </ChangerTheme>
        </NavMenuItem> */}
      </Flex>
    </Navigation>
  );
}
