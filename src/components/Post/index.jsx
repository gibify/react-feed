import { Comment } from '../Comment';
import styles from './styles.module.css';

export function Post() {
  const array = new Array(1, 2);
  return (
    <>
      {array.map((item, index) => {
        return (
          <article key={index} className={styles.article}>
            <header>
              <div className={styles.author}>
                <img src="https://github.com/gibify.png" />
                <div className={styles.authorInfo}>
                  <strong>Evandro Gibicoski</strong>
                  <span>Web Developer</span>
                </div>
              </div>
              <time title="28 de Junho às 08:13h " dateTime="2022-05-11">
                Publicado há 1h
              </time>
            </header>

            <div className={styles.content}>
              <p>Fala galeraa 👋</p>
              <p>
                Acabei de subir mais um projeto no meu portifa. É um projeto que
                fiz no NLW Return, evento da Rocketseat. O nome do projeto é
                DoctorCare 🚀
              </p>
              <p>
                👉 <a href="">jane.design/doctorcare</a>
              </p>
              <p>
                <a href="">#novoprojeto</a> <a href="">#nlw</a>{' '}
              </p>
            </div>

            <form className={styles.form}>
              <strong>Deixe seu comentário</strong>
              <textarea placeholder="Deixe seu comentário" />

              <footer>
                <button type="submit">Comentar</button>
              </footer>

              <div className={styles.commentList}>
                <Comment />
              </div>
            </form>
          </article>
        );
      })}
    </>
  );
}
