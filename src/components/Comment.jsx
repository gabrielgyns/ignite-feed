import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
                <Avatar hasBorder={false} src="https://github.com/gabrielgyns.png" />

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Gabriel Soares</strong>
                                <time title='24 de outubro de 2022 às 16:50' dateTime='2022-10-24 16:50:31'>Cerca de 1h atrás</time>
                            </div>

                            <button title='Deletar comentário'>
                                <Trash size={24} />
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
    )
}