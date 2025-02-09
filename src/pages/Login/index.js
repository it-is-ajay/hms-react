import axios from 'axios'
import Login from '../../component/Login/login'
import { toast } from 'react-toastify';
import { setLocalStorage } from '../../utility'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    const login = async (bodyData) => {
        try {
            const { data } = await axios.post('http://localhost:5000/user/login', bodyData);
            toast.success(data.message)
            setLocalStorage('token', data.data.token);
            setLocalStorage('user', JSON.stringify(data.data));
            navigate('/');
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleFormSubmit = (values) => {
        login(values);
    }
    return <>
        <Login
            handleFormSubmit={handleFormSubmit}
        />
    </>
}