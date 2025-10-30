const Event=require('events');
const event=new Event();

event.on('greet',(name)=>{
    console.log(`HELLO : ${name}`);
});

event.on('farewell',(name)=>{
    console.log(`GOODBYE : ${name}`);
});

const userAction = (action,name)=>{
    event.emit(action,name);
};

const simulateUserAction =()=>{
    userAction('greet','Pravith');
    userAction('farewell','Prasoon');
};

module.exports=simulateUserAction;