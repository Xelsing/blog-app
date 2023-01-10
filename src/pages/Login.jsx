import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'

const Login = () => {
    return (
        <div>
            <h1> Страница логина</h1>
            <form action="">
                <MyInput type="text" placeholder='введите логин' />
                <MyInput type="password" placeholder='введите пароль' />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login