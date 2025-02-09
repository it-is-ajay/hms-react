import axios from 'axios'
import { toast } from 'react-toastify';
import Signup from '../../component/SingUp';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../../utility';

export default function LoginPage() {
    const navigate = useNavigate();
    const signUp = async (bodyData) => {
        try {
            const { data } = await axios.post('http://localhost:5000/user/signup', bodyData);
            console.log(data.message)
            toast.success(data.message)
            setLocalStorage('token', data.data.token);
            setLocalStorage('user', JSON.stringify(data.data));
            navigate('/');
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleFormSubmit = (values) => {
        signUp(values);
    }
    return <>
        <Signup
            handleFormSubmit={handleFormSubmit}
        />
    </>
}