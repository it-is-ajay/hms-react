import { useState } from 'react'
import './index.scss'
import { Formik } from 'formik';
import validation from './validation'
export default function Signup({
    handleFormSubmit
}) {
    const [showPassword, setShowPassword] = useState(false);
    const initialValues = {
        name: '',
        userName: '',
        email: '',
        role: '',
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
                <div className="signup">
                    <div className='signup_container'>
                        <div className='signup_container_label'>
                            <span>Signup</span>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className='signup_container_main'>
                                <br />
                                <div className='input-form'>
                                    <div>
                                        <label>Name</label>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                    </div>
                                    <div style={{
                                        color: 'red',
                                        marginBottom: '5px'
                                    }}>{errors.name && touched.name && errors.name}</div>
                                </div>
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
                                        color: 'red',
                                        marginBottom: '5px'
                                    }}>{errors.userName && touched.userName && errors.userName}</div>
                                </div>
                                <div className='input-form'>
                                    <div>
                                        <label>Email</label>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </div>
                                    <div style={{
                                        color: 'red',
                                        marginBottom: '5px'
                                    }}>{errors.email && touched.email && errors.email}</div>
                                </div>
                                <div className='input-form'>
                                    <div>
                                        <label>Select Role</label>
                                    </div>
                                    <div>
                                        <select
                                            name='role'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.role}
                                        >
                                            <option key="doctor"> Doctor</option>
                                            <option key="patient"> Patient</option>
                                        </select>
                                    </div>
                                    <div style={{
                                        color: 'red',
                                        marginBottom: '5px'
                                    }}>{errors.role && touched.role && errors.role}</div>
                                </div>
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
                                        color: 'red',
                                        marginBottom: '5px'
                                    }}>
                                        {errors.password && touched.password && errors.password}
                                    </div>
                                </div>
                                <div className='show-password'>
                                    <input onClick={() => setShowPassword(!showPassword)} type="checkbox" />
                                    <div>show password</div>
                                </div>
                            </div>
                            <div className='signup_container_footer'>
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