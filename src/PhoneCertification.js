import { useState } from 'react';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import CustomTitleText from './components/CustomTitleText';
import CustomContentText from './components/CustomContentText';
import Timer from './components/Timer';


function PhoneCertification() {
    const [authNumber, setAuthNumber] = useState("");
    const [isRunning, setIsRunning] = useState(true);
    const [restart, setRestart] = useState(true);

    function changeAuthNumber(text) {
        const regexp = /[^0-9]/g;
        setAuthNumber(text.replace(regexp, ""));
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
                alert("Click Resend Event");
                setRestart(current => !current)
                setIsRunning(true);
            }} />
            <CustomInput type={"text"} value={authNumber} maxLength={6} placeholder={"번호 6자리를 입력해 주세요"} onChange={(e) => changeAuthNumber(e.target.value)} />
        </div>
        <div style={{ marginTop: "349px" }}></div>
        <CustomButton value={"본인인증하기"} disabled={authNumber.length !== 6 || !isRunning} onClick={() => alert(authNumber)} />
    </div>

}

export default PhoneCertification;
