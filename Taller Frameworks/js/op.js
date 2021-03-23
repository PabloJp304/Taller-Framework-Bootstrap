function sum()
{
    var numero1=Number(document.getElementById('numero1').value);
    var numero2=Number(document.getElementById('numero2').value);
    var respues=parseFloat(numero1)+parseFloat(numero2);
    document.getElementById('respues').innerHTML=respues;

}

function res()
{
    var numero1=Number(document.getElementById('numero1').value);
    var numero2=Number(document.getElementById('numero2').value);
    var respues=parseFloat(numero1)-parseFloat(numero2);
    document.getElementById('respues').innerHTML=respues;

}

function mult()
{
    var numero1=Number(document.getElementById('numero1').value);
    var numero2=Number(document.getElementById('numero2').value);
    var respues=parseFloat(numero1)*parseFloat(numero2);
    document.getElementById('respues').innerHTML=respues;

}

function divi()
{
    var numero1=Number(document.getElementById('numero1').value);
    var numero2=Number(document.getElementById('numero2').value);
    var respues=parseFloat(numero1)/parseFloat(numero2);
    document.getElementById('respues').innerHTML=respues;

}

function pot()
{
    var numero1=Number(document.getElementById('numero1').value);
    var numero2=Number(document.getElementById('numero2').value);
    var respues=parseFloat(numero1)^parseFloat(numero2);
    document.getElementById('respues').innerHTML=respues;

}
 
