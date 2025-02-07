import { useState } from 'react'
import './index.scss'
import { Formik } from 'formik';
import validation from './validation'
export default function Login({
    handleFormSubmit
}) {
    const [showPassword, setShowPassword] = useState(false);
    const initialValues = {
        userName: '',
        password: '',
    }
    return <>
        <Formik
            initialValues={{ ...initialValues }}
            validationSchema={validation}
            onSubmit={(values) => {
                handleFormSubmit(values)
                console.log(values, 'values')
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                /* and other goodies */
            }) => (
                <div className="login">
                    <div className='login_container'>
                        <div className='login_container_label'>
                            <span>Login</span>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className='login_container_main'>
                                <br />
                                <div className='input-form'>
                                    <div>
                                        <label>User Name</label>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="userName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.userName}
                                        />
                                    </div>
                                    <div style={{
                                        color: 'red'
                                    }}>{errors.userName && touched.userName && errors.userName}</div>
                                </div>
                                <br />
                                <div className='input-form'>
                                    <div>
                                        <label>Password</label>
                                    </div>
                                    <div>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />

                                    </div>
                                    <div style={{
                                        color: 'red'
                                    }}>
                                        {errors.password && touched.password && errors.password}
                                    </div>
                                </div>
                                <div className='show-password'>
                                    <input onClick={() => setShowPassword(!showPassword)} type="checkbox" />
                                    <div>show password</div>
                                </div>
                            </div>
                            <div className='login_container_footer'>
                                <div>
                                    <button type='submit'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </Formik>

    </>
}