import { useState } from 'react';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import CustomTitleText from './components/CustomTitleText';
import CustomContentText from './components/CustomContentText';
import Timer from './components/Timer';
import { postSubmit } from './api/api';
import { useParams } from 'react-router-dom';


function PhoneCertification() {
    const { token } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [authNumber, setAuthNumber] = useState("");
    const [isRunning, setIsRunning] = useState(true);
    const [restart, setRestart] = useState(true);

    const changeAuthNumber = (text) => {
        const regexp = /[^0-9]/g;
        setAuthNumber(text.replace(regexp, ""));
    }

    const clickAuthBtn = async () => {
        try {
            setIsLoading(true);
            
            const params = {
                'code': authNumber,
                'token': token
            };

            const result = await postSubmit(params);

            if (result.status === 200) {
                alert('인증에 성공하였습니다.');
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
        <CustomTitleText value={`휴대폰 번호로 전송된`} />
        <CustomTitleText color={"red"} value={`인증번호를 입력해주세요`} />
        <div className='row'>
            <CustomContentText value={'인증번호'} />
            <Timer restart={restart} setIsRunning={setIsRunning} />
        </div>
        <div style={{ display: 'flex', position: 'relative' }}>
            <CustomContentText color={"blue"} innerText={true} value={'재전송'} onClick={() => {
                alert("인증번호가 재발송 되었습니다.");
                setRestart(current => !current)
                setIsRunning(true);
            }} />
            <CustomInput type={"text"} value={authNumber} maxLength={6} placeholder={"번호 6자리를 입력해 주세요"} onChange={(e) => changeAuthNumber(e.target.value)} />
        </div>
        <CustomButton value={isLoading ? "잠시만 기다려주세요" : "본인인증하기"} disabled={authNumber.length !== 6 || !isRunning} onClick={() => clickAuthBtn()} />
    </div>

}

export default PhoneCertification;
