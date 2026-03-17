import {Board} from "../widgets/Board/Board.tsx";
import styles from './MainPage.module.css'
export function MainPage() {
    return (
        <div className={styles.mainPage}>
            <h1 className={styles.title}>Рисовалка</h1>
            <Board />
        </div>
    )
}