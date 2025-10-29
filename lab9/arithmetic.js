function add(a,b){
    return a+b;
}
function subs(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(b===0){
        throw new Error("dividion by zero is not possible");
    }else{

    return a/b;
    }
}

module.exports = {
    add,
    subs,
    mul,
    div
};
