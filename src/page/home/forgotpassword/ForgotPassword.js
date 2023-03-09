import React, { useEffect, useState } from 'react'
import { MdLockOutline } from 'react-icons/md';

import './../../signin/Signin.css'
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from "yup";
import FormGroup from './../../../sharecomponent/formgroup/FromGroup';
import CustomInput from './../../../sharecomponent/custominput/CustomInput';
import CustomButton from './../../../sharecomponent/custombutton/CustomButton';
import userActions from './../../../redux/actions/userActions';
const ForgotPassword = (props) => {

    const username = localStorage.getItem('username');

    const formik = useFormik({
        initialValues: {
            username: '',
            redirectUrl: "http://localhost:3000/passwordreset"
        },
        //validation
        validationSchema: Yup.object({
            username: Yup.string()
                .min(2, 'Minimum 2 characters')
                .max(15, 'Maximum 15 characters')
                .required('Required!'),
        }),

        onSubmit: values => {
            props.forGotPassword(username, values.username);
        }
    })
    // const handleSubmitForm = (e) => {
    //     e.preventDefault()
    //     props.signin(userSignIn.username, userSignIn.password)
    // }

    // const handleOnChangeInput = e => {
    //     setUserSignIn({
    //         ...userSignIn,
    //         [e.target.name]: e.target.value
    //     })
    // }

    useEffect(() => {
        props.showLoading(props.isLoading)
    }, [props, props.isLoading])

    return (
        <div className="signin-container">
            <div className="signin-header">
                <div className="signin-avatar">
                    <MdLockOutline size='1.36rem' />
                </div>
                <h1>Forgot Password</h1>
            </div>
            <form className="signin-main" onSubmit={formik.handleSubmit}>
                <p>{props.errorMessageSignin}</p>
                <FormGroup>
                    <CustomInput
                        label="Enter your Username *"
                        type="text"
                        name="username"
                        value={formik.values.username}
                        // onChangeInput={handleOnChangeInput}
                        onChangeInput={formik.handleChange}>

                    </CustomInput>
                    {
                        formik.errors.username && formik.touched.username && (
                            <p style={{ color: 'red' }}>{formik.errors.username}</p>
                        )
                    }
                </FormGroup>

                <div className="btn-submit">
                    <CustomButton
                        type="submit"
                        uppercase
                        width="100%"
                        // onClick={handleSubmitForm}
                        color="white"
                    >
                        Submit
                    </CustomButton>
                    <FormGroup>
                        <p style={{ color: 'blue' }}>{props.messageForgotPasswordSuccess}</p>
                        <p>{props.errorMessageForgotPassword}</p>
                    </FormGroup>
                </div>
            </form>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.userInfo.isLoading,
        errorMessageForgotPassword: state.userInfo.errorMessageForgotPassword,
        messageForgotPasswordSuccess: state.userInfo.messageForgotPasswordSuccess
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        forGotPassword: (username) => {
            dispatch(userActions.forGotPassword(username))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
