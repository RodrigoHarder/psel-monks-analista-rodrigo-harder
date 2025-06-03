// import styles from "./Album.module.scss";
// import { useAlbum } from "../../hooks/useAlbum";

// export function Album() {
//   const { album } = useAlbum();

//   if (!album) return <p>Erro ao carregar álbum.</p>;

//   return (
//     <div className={styles.container}>
//       <div className={styles.left}>
//         <h2>{album.title}</h2>
//         <h3>{album.description}</h3>
//         {album.images.length > 0 && (
//           <img
//             src={album.imagens[0].imagemUrl}
//             alt={album.imagens[0].alt}
//           />
//         )}
//       </div>
//       <div className={styles.right}>
//         {album.imagens.slice(1).map((imagem) => (
//           <img key={imagem.id} src={imagem.imagemUrl} alt={imagem.alt} />
//         ))}
//       </div>
//     </div>
//   );
// }


import styles from "./Album.module.scss";
import { useAlbum } from "../../hooks/useAlbum";
export function Album() {

  const { album } = useAlbum();

  if (!album) {
    return <p>Erro ao carregar álbum.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>{album.title}</h2>
        <h3>{album.description}</h3>
        {album.images.length > 0 && (
          <img
            src={album.images[0].url}
            alt="Imagem principal do álbum"
          />
        )}
      </div>
      <div className={styles.right}>
        {album.images.slice(1).map((imagem) => (
          <img
            key={imagem.id}
            src={imagem.url}
            alt={`Imagem do álbum: ${album.title}`}
          />
        ))}
      </div>
    </div>
  );
}