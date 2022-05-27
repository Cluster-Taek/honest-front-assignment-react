import style from './CustomInput.module.css'

const CustomInput = ({ type, placeholder, value, maxLength, onChange }) => {
    return <input className={style.input} type={type} placeholder={placeholder} value={value} maxLength={maxLength} onChange={onChange}/>
}

export default CustomInput;
