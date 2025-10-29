const EventEmitter=require('events');

const eventemmiter=new EventEmitter();

eventemmiter.on('farewell',(name)=>{
    console.log(`goodbye : ${name}!`);
});

eventemmiter.on('greet',(name)=>{
    console.log(`HELLO : ${name}!`);
});

const userAction=(action,name)=>{
    eventemmiter.emit(action,name);
};
const simulateUserAction=()=>{
    userAction('greet','Pravith');
    userAction('farewell','Preksha');
};
module.exports=simulateUserAction;
