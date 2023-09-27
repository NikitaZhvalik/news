import style from '@/styles/Loader.module.css'

const Loader = () => {
    return (
        <div className={style.containerForLoader}>
            <div className={style.loader}></div>
        </div>
    )
}
 
export default Loader;