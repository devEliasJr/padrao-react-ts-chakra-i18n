import { Box } from "@chakra-ui/react";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

export default function Users() {
  const [name, setName] = useState<string>(""); // Inicializa com uma string vazia

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const userData = {
      Nome: name,
    };
    localStorage.setItem("User", JSON.stringify(userData));
  };

  useEffect(() => {
    // Verificar se o usuário já foi definido anteriormente no LocalStorage
    const getFileFromLocalStorage = () => {
      const fileData = localStorage.getItem("User");
      if (fileData) {
        const data = JSON.parse(fileData)
        setName(data.Nome);
      }
    };
    getFileFromLocalStorage();
  }, []);

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          value={name}
        />
        <button type="submit">Enviar</button>
      </form>
    </Box>
  );
}
