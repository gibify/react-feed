import styles from './styles.module.css';
import logo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do Feed" />
    </header>
  );
}
