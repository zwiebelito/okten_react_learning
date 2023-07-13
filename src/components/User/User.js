import React, {useRef} from 'react';
import styles from './User.module.css'

const User = () => {

    const nameRef = useRef('');
    const userNameRef = useRef('');
    const emailRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: nameRef.current.value,
                username: userNameRef.current.value,
                email: emailRef.current.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res)=> res.json())
            .then((data) => console.log(data))
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' ref={nameRef}/>
                </label>
                <label>
                    Username:
                    <input type='text' ref={userNameRef}/>
                </label>
                <label>
                    Email:
                    <input type='text' ref={emailRef}/>
                </label>
                    <input type='submit' value='create a user' className={styles.submit}/>
            </form>
        </div>
    );
};

export default User;