import { useEffect, useState } from "react";
import { getAlbum } from "../services/albumService";

export function useAlbum() {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAlbum();
        setAlbum(data);
      } catch (error) {
        console.error("Erro ao carregar o álbum.");
      } 
    })();
  }, []);

  return { album };
}
