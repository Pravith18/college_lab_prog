document.addEventListener('DOMContentLoaded',()=>{
    const myform=document.getElementById('myform');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const user=document.getElementById('user');
    const emailFeedback=document.getElementById('emailFeedback');
    const passwordFeedback=document.getElementById('passwordFeedback');
    const userFeedback=document.getElementById('userFeedback');

    email.addEventListener('input',()=>{
        if(email.validity.valid){
            emailFeedback.textContent='valid email';
            emailFeedback.className='valid'
        }else{
            emailFeedback.textContent='invalid email';
            emailFeedback.className='error';
        }
    });

    password.addEventListener('input',()=>{
        if(password.value.length>8){
            passwordFeedback.textContent='valid password';
            passwordFeedback.className='valid'
        }else{
            passwordFeedback.textContent='invalid password';
            passwordFeedback.className='error';
        }
    });

    user.addEventListener('input',()=>{
        if(user.value.length>=3){
            userFeedback.textContent='valid userID';
            userFeedback.className='valid'
        }else{
            userFeedback.textContent='invalid userID';
            userFeedback.className='error';
        }
    });

    myform.addEventListener('submit',()=>{
        if(!email.validity.valid||password.value.length<8||user.value.length<3){
            event.preventDefault();
            alert("please enter all the required field")
        }
    })
})