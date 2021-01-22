import React, { useState } from 'react';
import { Container, Input } from './styles';
import Logo from '../../img/logo.jpeg';
import { Message } from '../Message';
import axios from 'axios';
import { URL_API } from '../../../VariablesEntorno';
import { SetUserLogin } from '../../hooks/useUser';

//Validate URL
const ValidateURL = () => {
    if (window.location.href.split('/')[3] != 'Login') {
        window.location = '/Login';
    }
};

//Validate form
const ValidateForm = (strUser, strPassword, SetBlnShow, SetStrMessage, blnShow) => {
    if (strUser.trim() == '') {
        SetBlnShow({ blnUser: true, blnPassword: blnShow.blnPassword });
        return;
    }
    if (strPassword.trim() == '') {
        SetBlnShow({ blnPassword: true, blnUser: blnShow.blnUser });
        return;
    }
    //Validate User
    ValidateUser(strUser, strPassword, SetBlnShow, SetStrMessage);
};
//Validate User
const ValidateUser = async (strUser, strPassword, SetBlnShow, SetStrMessage) => {
    let Response = await axios.post(`${URL_API}/login`, { strUser, strPassword });
    if (!Response.data.Success) {
        SetBlnShow({ blnStrResponse: true });
        SetStrMessage(Response.data.Result);
        return;
    }
    //Actualizar hook información usuario login
    SetUserLogin(Response.data.Result);
};

//*Component Login*//
export const Login = () => {
    const [strUser, SetStrUser] = useState('');
    const [strPassword, SetStrPassword] = useState('');
    const [blnShow, SetBlnShow] = useState({
        blnUser: false,
        blnPassword: false,
        blnStrResponse: false
    });
    const [strMessage, SetStrMessage] = useState('');

    //Validate URL Login
    ValidateURL();

    return (
        <Container>
            <div>
                <img src={Logo} />
                <Input
                    type="text"
                    value={strUser}
                    validate={blnShow.blnUser}
                    onChange={(e) => {
                        SetStrUser(e.target.value);
                        SetBlnShow({ blnUser: false, blnPassword: blnShow.blnPassword });
                    }}
                    placeholder="Usuario"
                />
                <Message
                    setShowMessage={SetStrMessage}
                    Text="Usuario requerido"
                    Type="Danger"
                    blnShow={blnShow.blnUser}
                />
                <Input
                    type="password"
                    value={strPassword}
                    onChange={(e) => {
                        SetStrPassword(e.target.value);
                        SetBlnShow({ blnPassword: false, blnUser: blnShow.blnUser });
                    }}
                    validate={blnShow.blnPassword}
                    placeholder="Clave"
                />
                <Message Text="Clave requerida" Type="Danger" blnShow={blnShow.blnPassword} />
                <Message Text={strMessage} Type="Danger" blnShow={blnShow.blnStrResponse} />
                <button
                    onClick={() => {
                        ValidateForm(strUser, strPassword, SetBlnShow, SetStrMessage, blnShow);
                    }}>
                    Acceder
                </button>
            </div>
        </Container>
    );
};
