var apple = function(){
    console.log('error');
}
function orange(){
    console.log('error orange');
    function redorange(){
        console.log('error redorange');
    }
    redorange();
}
orange();
apple();
