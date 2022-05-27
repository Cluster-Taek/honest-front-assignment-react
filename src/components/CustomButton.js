import style from './CustomButton.module.css'

const CustomButton = ({ disabled, value, clickEvent }) => {
    return <button className={`${style.btn} ${disabled ? style.disabled : style.enabled}`} disabled={disabled} onClick={clickEvent}>{value}</button>
}



export default CustomButton;