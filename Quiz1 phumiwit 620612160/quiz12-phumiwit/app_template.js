//your code here!
    let num
    let id  = document.getElementById('subtitle').value
    let  inputnumber = document.getElementById('input-number').value
    let button  = document.getElementById('button-compute').value

    if( document.getElementById('input-number').checked)
    {
       let num = num+inputnumber;
       console.log(num); 
    }
    let name;
    let studentid;
    let input;
    let row = document.getElementById('input-row').value
    let col = document.getElementById('input-col').value
    let bottontable = document.getElementById('button-create-table').value
  if(document.getElementById('button-create-table').checked) 
   {
       console.log('create by' + name , studentid)
       console.log(bottontable);
   }
    