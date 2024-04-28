import AxiosRequest from '../ApiRequest/ApiRequest';
import Notify from '../Notify/Notify';

const Login = async (values) => {
    try {
        const response = await AxiosRequest.post('/login', values);
        if (response.status === 200) {
            sessionStorage.setItem('JWTAccessToken', response.data.JWTAccessToken);
            //setUSer(response.data.userData);
            window.location.replace("/home/todolist");
        } else {
            throw new Error('error logging in');
        }
    }
    catch (error) {
        console.log(error)
        Notify.error('Login', 'Login username or password incorrect!')
        return null;
    }
};

const Register = async (values) => {


    try {
        const response = await AxiosRequest.post('/register', values);
        if (response.status === 200) {
            Notify.success('Register', 'User registered successfully!');
            window.location.replace("/login");
        } else {
            throw new Error('error registering user');
        }
    }
    catch (error) {
        console.log(error)
        Notify.error('Register', 'Something went wrong, please try again later')
        return null;
    }
};

const LogOut = () => {
    sessionStorage.removeItem('JWTAccessToken');
    window.location.replace('/login');
}


const AuthService = {
    Login,
    Register,
    LogOut
}
export default AuthService