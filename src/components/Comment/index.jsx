import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/gibify.png" />

      <div className={styles.commentContainer}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Evandro Gibicoski</strong>
              <time title="28 de Junho às 08:13h " dateTime="2022-05-11">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
