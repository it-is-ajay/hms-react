import * as Yup from 'yup';

const validate = Yup.object().shape({
    userName: Yup.string()
        .required('User name is required'),
    password: Yup.string()
        .required('Password is required'),
});

export default validate;
