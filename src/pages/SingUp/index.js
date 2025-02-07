import axios from 'axios'
import { toast } from 'react-toastify';
import Signup from '../../component/SingUp';

export default function LoginPage() {
    const login = async (bodyData) => {
        try {
            const res = await axios.post('http://localhost:5000/user/login', bodyData);
            console.log(res.data.message)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleFormSubmit = (values) => {
        login(values);
    }
    return <>
        <Signup
            handleFormSubmit={handleFormSubmit}
        />
    </>
}