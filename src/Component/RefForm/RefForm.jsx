import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect( ()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(nameRef.current.value,emailRef.current.value,phoneRef.current.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    ref={nameRef}
                type="text" name="name" />
                <br/>
                <input
                    ref={emailRef} defaultValue={'abc@gmail.com'}
                 type="email" name="email"/>
                <br/>
                <input
                    ref={phoneRef}
                 type="phone" name="phone"/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default RefForm;