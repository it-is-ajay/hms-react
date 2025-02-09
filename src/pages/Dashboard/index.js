import { toast } from "react-toastify";
import Dashboard from "../../component/Dashboard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardPage() {
    const [doctorList, setDoctorList] = useState([]);
    const getDoctorList = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/user/doctor-list');
            setDoctorList(data.data);
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        getDoctorList();
    }, [])
    return <>
        <Dashboard
            doctorList={doctorList}
        />
    </>
}