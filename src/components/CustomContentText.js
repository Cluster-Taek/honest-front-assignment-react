import style from './CustomText.module.css'

const CustomContentText = ({ color, innerText, value, onClick }) => {
    return <span className={`${innerText ? style.innerText : style.contentText} ${color}`} onClick={onClick}>{value}</span>
}

export default CustomContentText;