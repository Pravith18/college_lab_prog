document.addEventListener('DOMContentLoaded',()=>{
    const myform=document.getElementById("myform");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const user=document.getElementById("user");
    const emailFeedback=document.getElementById("emailFeedback");
    const passwordFeedback=document.getElementById("passwordFeedback");
    const userFeedback=document.getElementById("userFeedback");
    
    email.addEventListener('input',()=>{
        if(email.validity.valid){
            emailFeedback.textContent='valid email';
            emailFeedback.className='valid';
        }else{
            emailFeedback.textContent='please enter a valid email';
            emailFeedback.className='error';
        }
    });

        password.addEventListener('input',()=>{
        if(password.value.length>8){
            passwordFeedback.textContent='valid password';
            passwordFeedback.className='valid';
        }else{
            passwordFeedback.textContent='please enter a valid password with least 8 characters';
            passwordFeedback.className='error';
        }
    });

        user.addEventListener('input',()=>{
        if(user.value.length>=3){
            userFeedback.textContent='valid user';
            userFeedback.className='valid';
        }else{
            userFeedback.textContent='please enter a valid user with least character of 3';
            userFeedback.className='error';
        }
    });

    myform.addEventListener('submit',(event)=>{
        if(!email.validity.valid||password.value.length<8||user.value.length<3){
            event.preventDefault();
            alert("please fill out the form correctly before submitting");
        }
    })

});