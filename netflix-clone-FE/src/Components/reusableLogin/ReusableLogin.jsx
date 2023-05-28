const ReusableLogin = ({ children, title, onSubmit }) => {
    return (<div className="login-box" id="card">
        <div className='content'>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                {children}
                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>
            </form>
        </div>
    </div>);
}

export default ReusableLogin;