var namem;
var phone;
var Email;
var nameV;
var phoneV;
var EmailV;
var validName=false;
var validPhone=false;
var validEmail=false;
function validation()
{
namem=document.getElementById("namem")
nameV=document.getElementById("nameV")
 namem.addEventListener('input',function(){
    var numsss=parseInt(namem.value)
    if(namem.value.length<=3||!isNaN(numsss))
{
    nameV.innerText="Enter Valid name"
    nameV.style.display="inline";
    namem.style.borderColor="red"
    validName=false;
}
else 
{
    validName=true;
        nameV.innerText=""
    nameV.style.display="none";
    namem.style.borderColor='green';
}

 })
 phone=document.getElementById("phone");
 phoneV=document.getElementById("phoneV")
  phone.addEventListener('input',function(){
    var phonenums=phone.value;
    phonenums=parseInt(phonenums);

    var nums=false;
    if(!isNaN(phonenums))
    {
        nums=true;
    }
    let numsear=phone.value.search(/010|011|012/)
    if(phone.value.length>11||phone.value.length<11||nums==false||numsear!=0)
{
    phoneV.innerText="Enter Valid Phone"
    phoneV.style.display="inline";
    phone.style.borderColor="red"
    validPhone=false;
}
else 
{
    validPhone=true;
        phoneV.innerText=""
    phoneV.style.display="none";
        phone.style.borderColor='green';

}

 })

 Email=document.getElementById("email");
 EmailV=document.getElementById("EmailV")
 Email.addEventListener('input',function(){
 let mailvfirst=Email.value.search("@");
 let mailvsecond=Email.value.search(".com")
 if(mailvfirst==-1||mailvsecond==-1)
 {
    EmailV.innerText="Enter a valid mail"
    validEmail=false;
    Email.style.borderColor='red';
    EmailV.style.display='inline';
 }
 else{
    validEmail=true;
        EmailV.innerText=""
    EmailV.style.display="none";
        Email.style.borderColor='green';
 }
 })
}
function saveFeadback(e)
{
    if(validEmail==false||validName==false||validPhone==false)
    {
        e.preventDefault();
    }

// const client = {
//  "Name": "Mini Corp.",
//  "Order_count": 83,
//  "Address": "Little Havana"
// }
//   var xhr = new XMLHttpRequest();
// var data;
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         data = JSON.stringify(client)
//       }
//     }
//   };

//   xhr.open("POST", "Feadback.json");
//      xhr.send(data);
}