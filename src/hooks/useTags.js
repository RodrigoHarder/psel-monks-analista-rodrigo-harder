import { useEffect, useState } from "react";
import { getTags } from "../services/tagsService";

export function useTags() {
  const [tags, setTags] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getTags();
        setTags(data);
      } catch (error) {
        console.error("Erro ao carregar as tags.");
      } 
    })();
  }, []);

  return {  tags };
}
