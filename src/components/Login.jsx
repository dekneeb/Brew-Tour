function Login(){
    return(<div>
        <h1> Login Page</h1>
        <section className='form'>
            <input
            type='text'
            placeholder='username'></input>
            <input
            type='text'
            placeholder='password'></input>
            <input
            className='button'
            type='submit'
            value ='login'></input>
        </section>

        <h2>New User? Register Below</h2>
        <section>
            <input
            type='text'
            placeholder='create username'></input>
            <input
            type='text'
            placeholder='create password'></input>
            <input className='button'
            type='submit'
            value ='register'></input>
        </section>

    </div>)
}

export default Login