import { PencilLine } from 'phosphor-react';
import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.aside}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/gibify.png" />
        <strong>Evandro Gibicoski</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
