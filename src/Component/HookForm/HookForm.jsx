import useInputState from "../../Hooks/useinputState";


const HookForm = () => {
    // const [name, handleChangeName] = useInputState('farid')
    const emailState = useInputState('abc@gmailcom');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form data ',emailState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleChangeName} type="text" name="name" /> */}
                <br/>
                <input {...emailState} type="email" name="email"/>
                <br/>
                <input type="password" name="password"/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default HookForm;