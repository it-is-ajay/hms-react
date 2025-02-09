import * as Yup from 'yup';

const validate = () => {
    return Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        userName: Yup.string()
            .required('User name is required'),
        email: Yup.string()
            .email('Invalid email format') // Added email validation
            .required('Email is required'),
        role: Yup.string()
            .oneOf(['patient', 'doctor'], 'Role is required') // Fixed role validation
            .required('Role is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters') // Added password length validation
            .required('Password is required'),
    });
};

export default validate;
