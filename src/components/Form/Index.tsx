import styles from './styles.module.scss'

export default function Form() {
    return (
        <form action="" className={styles.form}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" />
            </div>

            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
            </div>

            <div>
                <label htmlFor="message">Deixe sua mensagem</label>
                <textarea name="message" id="message" cols={30} rows={10} />
            </div>
            <button>Enviar</button>
        </form>
    )
}