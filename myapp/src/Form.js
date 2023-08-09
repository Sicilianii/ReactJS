function Form({message}) {

    return (<form className="form" onSubmit={event => {
        event.preventDefault();
        updateMess(prevState => [...prevState, {
            nameAuthor: nameAuth,
            message: textAuth
        }])
    }} >
        <input className="form-intput" value={nameAuth}/>
        <input className="form-intput" value={textAuth}/>
    </form>);
}

export default Form;