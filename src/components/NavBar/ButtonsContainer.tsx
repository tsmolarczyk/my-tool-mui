import css from './ButtonsContainer.module.css'

export const ButtonsContainer = () => {
    return (
        <div className={css.container}>
        <h3 className={css.btn}>Card 1</h3>
        <h3 className={css.btn}>Card 2</h3>
        </div>
    )
}