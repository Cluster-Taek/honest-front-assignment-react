import { useState } from 'react';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import CustomTitleText from './components/CustomTitleText';
import CustomContentText from './components/CustomContentText';
import { Link } from 'react-router-dom';

const IdentityAuthentication = () => {
    const [phoneNumber, setPhoneNumber] = useState(["010", "", ""]);
    const [personalNumber, setPersonalNumber] = useState(["", ""]);
    const [name, setName] = useState("");

    function changePhoneNumber(text, numberIndex) {
        const regexp = /[^0-9]/g;
        setPhoneNumber([...phoneNumber].map((item, index) => index === numberIndex ? text.replace(regexp, "") : item));
    }

    function changePersonalNumber(text, numberIndex) {
        const regexp = /[^0-9]/g;
        setPersonalNumber([...personalNumber].map((item, index) => index === numberIndex ? text.replace(regexp, "") : item));
    }

    return <div className='container'>
        <CustomTitleText value={'비대면 대출을 위해 본인인증이 필요해요'} />
        <CustomContentText value={'휴대폰번호'} />
        <div className='row'>
            <CustomInput type={"text"} value={phoneNumber[0]} maxLength={3} onChange={(e) => changePhoneNumber(e.target.value, 0)} />
            <div className='minus' />
            <CustomInput type={"text"} value={phoneNumber[1]} maxLength={4} onChange={(e) => changePhoneNumber(e.target.value, 1)} />
            <div className='minus' />
            <CustomInput type={"text"} value={phoneNumber[2]} maxLength={4} onChange={(e) => changePhoneNumber(e.target.value, 2)} />
        </div>
        <CustomContentText value={'주민등록번호'} />
        <div className='row'>
            <CustomInput type={"text"} value={personalNumber[0]} maxLength={6} onChange={(e) => changePersonalNumber(e.target.value, 0)} />
            <div className='minus' />
            <CustomInput type={"password"} value={personalNumber[1]} maxLength={7} onChange={(e) => changePersonalNumber(e.target.value, 1)} />
        </div>
        <CustomContentText value={'이름'} />
        <CustomInput type={"text"} value={name} maxLength={10} onChange={(e) => setName(e.target.value)} />
        <Link style={{marginTop: "120px"}} to={"/phone-certification"} onClick={() => alert("HI")} disabled={!phoneNumber[0] || !phoneNumber[1] || !phoneNumber[2] || !personalNumber[0] || !personalNumber[1] || !name}>
            <CustomButton value={"다음"} disabled={!phoneNumber[0] || !phoneNumber[1] || !phoneNumber[2] || !personalNumber[0] || !personalNumber[1] || !name} />
        </Link>
    </div>

}

export default IdentityAuthentication;
