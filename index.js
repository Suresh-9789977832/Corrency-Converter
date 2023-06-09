const select=document.querySelectorAll('.currency')
const btn=document.getElementById('btn')
const inputval=document.getElementById('input')





fetch('https://api.frankfurter.app/currencies')
// fetch('https://openweathermap.org/api')
.then(res=>res.json())
.then(res=>displaydropdown(res))

function displaydropdown(res){
   data= Object.entries(res)
    for(let i=0;i<data.length;i++){
        let opt=`<option value="${data[i][0]}">${data[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
    }
}

btn.addEventListener('click',()=>{
    let curr1=select[0].value
    let curr2=select[1].value
    let result=inputval.value

    if(curr1===curr2)
    alert('Dont choose same Currencies')
    else
    convert(curr1,curr2,result)
})

function convert(curr1,curr2,result){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${result}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
     document.getElementById('total').value=Object.values(data.rates)[0]
        
  });
}