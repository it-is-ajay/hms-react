import axios from 'axios'
import Login from '../../component/Login/login'
import { toast } from 'react-toastify';

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
        <Login
            handleFormSubmit={handleFormSubmit}
        />
    </>
}