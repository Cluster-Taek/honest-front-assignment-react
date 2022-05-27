import style from './CustomButton.module.css'

const CustomButton = ({ disabled, value, onClick }) => {
    return <button className={`${style.btn} ${disabled ? style.disabled : style.enabled}`} disabled={disabled} onClick={onClick}>{value}</button>
}



export default CustomButton;