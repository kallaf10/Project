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
    if(namem.value.length<=3)
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
    var xhr = new XMLHttpRequest(),
    method = "GET",
    jsonRequestURL = "Feadback.json";
    var     jsonArr;

//xhr.open(method, jsonRequestURL);
xhr.open(method, jsonRequestURL);

xhr.onreadystatechange = function()
{
    if(xhr.readyState == 4 && xhr.status == 200)
    {
        // we convert your JSON into JavaScript object
                jsonArr={"nissan": "sentra", "color": "green"};

        // let arr = JSON.parse(jsonArr);

        // we add new value:

        // we send with new request the updated JSON file to the server:
        xhr.open("POST", jsonRequestURL);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // if you want to handle the POST response write (in this case you do not need it):
        // xhr.onreadystatechange = function(){ /* handle POST response */ };
        // jsonArr=JSON.parse(jsonArr)
        xhr.send(JSON.stringify(jsonArr));
        // but on this place you have to have a server for write updated JSON to the file
    }
};

xhr.send("");
}