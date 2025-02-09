import './index.scss'
import { useNavigate } from 'react-router-dom';
import { getLocalStorage, removeFromLocalStorage } from '../../utility'
import { useEffect, useState } from 'react';
import { Table } from 'antd';
export default function Dashboard({
    doctorList = [],
}) {
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();
    const handleLogout = () => {
        removeFromLocalStorage('token');
        removeFromLocalStorage('user');
        navigate('/login');
    }


    const columns = [
        {
            title: 'S.no',
            dataIndex: 'key',
            key: 'key',
            render: (text, record, index) => {
                return <>{index + 1}</>
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Book Appointment',
            dataIndex: 'email',
            key: 'email',
            render: (text) => {
                return <>
                    <button className='appointment'>
                        Book Appointment
                    </button>
                </>
            },
        },
    ];


    useEffect(() => {
        const user = getLocalStorage('user');
        setUserDetails(JSON.parse(user));
    }, [])
    return <>
        <div className='dashboard'>
            <div className='dashboard_header'>
                <div className='dashboard_header_left'>
                    <h1>{`${userDetails?.name} (${userDetails?.role})`}</h1>
                </div>
                <div className='dashboard_header_right'>
                    <button className='logout' onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
            <div className='dashboard_main'>
                <div className='dashboard_main_table'>
                    <Table dataSource={doctorList} columns={columns} />
                </div>
            </div>
        </div>
    </>
}