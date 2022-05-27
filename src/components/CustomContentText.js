import style from './CustomText.module.css'

const CustomContentText = ({ value }) => {
    return <span className={style.contentText}>{value}</span>
}

export default CustomContentText;