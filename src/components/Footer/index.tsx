
import { useTranslation } from "react-i18next";
import "../../utils/translate/i18";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <p>{t("Todos os seus direitos reservados. Elias Dev 2023")} © </p>
    </footer>
  );
}
