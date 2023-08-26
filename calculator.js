

function Solve(val)
 {
    var v = document.getElementById('id1');

    v.value += val;
 }


 function Result() 
 {
    var number1 = document.getElementById('id1').value;

    var number2 = eval(number1);

    document.getElementById('id1').value = number2;
 }


 function Clear() 
 {
    var inp = document.getElementById('id1');

    inp.value = '';
 }



 function Back() 
 {
    var ev = document.getElementById('id1');
    
    ev.value = ev.value.slice(0,-1);
 }
