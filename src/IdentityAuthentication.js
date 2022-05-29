import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import CustomTitleText from './components/CustomTitleText';
import CustomContentText from './components/CustomContentText';
import { postRequest } from './api/api';

const IdentityAuthentication = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(["010", "", ""]);
    const [civilcode, setCivilcode] = useState(["", ""]);
    const [name, setName] = useState("");

    const changePhoneNumber = (text, numberIndex) => {
        const regexp = /[^0-9]/g;
        setPhoneNumber([...phoneNumber].map((item, index) => index === numberIndex ? text.replace(regexp, "") : item));
    }

    const changeCivilcode = (text, numberIndex) => {
        const regexp = /[^0-9]/g;
        setCivilcode([...civilcode].map((item, index) => index === numberIndex ? text.replace(regexp, "") : item));
    }

    const clickNextBtn = async () => {
        try {
            setIsLoading(true);

            const params = {
                'name': name,
                'civilcodeFirst': civilcode[0],
                'civilcodeLast': civilcode[1],
                'mobile': phoneNumber.join('')
            }

            const result = await postRequest(params);

            if (result.status === 200) {
                alert('인증번호가 전송되었습니다.');
                navigate(`/phone-certification/${result.body.response.token}`);
            } else {
                alert(result.body.error);
            }
        } catch (error) {
            alert('예기치 않은 오류가 발생하였습니다.\n잠시 후 다시 시도해주세요.');
        } finally {
            setIsLoading(false);
        }
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
            <CustomInput type={"text"} value={civilcode[0]} maxLength={6} placeholder={"앞 6자리"} onChange={(e) => changeCivilcode(e.target.value, 0)} />
            <div className='minus' />
            <CustomInput type={"password"} value={civilcode[1]} maxLength={7} placeholder={"뒤 7자리"} onChange={(e) => changeCivilcode(e.target.value, 1)} />
        </div>
        <CustomContentText value={'이름'} />
        <CustomInput type={"text"} value={name} maxLength={10} placeholder={"이름을 입력해 주세요"} onChange={(e) => setName(e.target.value)} />
        <CustomButton value={isLoading ? "잠시만 기다려주세요" : "다음"} disabled={!phoneNumber[0] || phoneNumber[1].length !== 4 || phoneNumber[2].length !== 4 || civilcode[0].length !== 6 || civilcode[1].length !== 7 || !name} onClick={() => clickNextBtn()} />
    </div>

}

export default IdentityAuthentication;
