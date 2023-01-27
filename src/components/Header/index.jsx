import styles from './Header.module.css'

export const Header = () => {
    const { header } = styles;

    return (
        <header className={header}>
            <strong>Ignite Feed</strong>
        </header>
    )
}