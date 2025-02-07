import * as Yup from 'yup';

const validate = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    userName: Yup.string()
        .required('User name is required'),
    email: Yup.string()
        .required('Email is required'),
    role: Yup.string()
        .required('Role is required'),
    password: Yup.string()
        .required('Password is required'),
});

export default validate;
