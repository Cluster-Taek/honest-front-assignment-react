import style from './CustomText.module.css'

const CustomTitleText = ({ value }) => {
    return <span className={style.titleText}>{value}</span>
}

export default CustomTitleText;