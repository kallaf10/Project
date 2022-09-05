var i=1;
var img=document.getElementById("Slphoto");
var first=true;
var fir=true
var interv;
var bt
var cont
var comps;
var btcomp;
var lap;
var labbt;
var Speaker;
var Speakbtn;
var Cart=0;
var cartBtn;
var hhh;
function forward()
{
    if(i==1&&fir==true)
    {
        i+=1;
        img.src="images/"+i+".jpg"
        fir=false;
    }
    else if(i==1&&fir==false)
    {
                img.src="images/"+i+".jpg"
            i+=1;
    }
   else if(i>1&&i<4)
    {
        img.src="images/"+i+".jpg"
        i+=1;
    }
    else if(i==4)
    {
        img.src="images/"+i+".jpg"
        i=1;
    }
}
function backword()
{
    if(i==1&&first==true)
    {
        i=4;
        img.src="images/"+i+".jpg"
        i-=1;
        first=false;
    }
    else if(i==1&&first==false)
    {
                img.src="images/"+i+".jpg"
                first=true;
    }
   else if(i>1)
    {
        img.src="images/"+i+".jpg"
        i-=1;
    }
}
function autoSlider()
{
    interv=window.setInterval(function(){
    if(i==1&&fir==true)
    {
        i+=1;
        img.src="images/"+i+".jpg"
        fir=false;
    }
    else if(i==1&&fir==false)
    {
                img.src="images/"+i+".jpg"
            i+=1;
    }
   else if(i>1&&i<4)
    {
        img.src="images/"+i+".jpg"
        i+=1;
    }
    else if(i==4)
    {
        img.src="images/"+i+".jpg"
        i=1;
    }

    },2000);
}
autoSlider()
function showMobs()
{
    bt=document.getElementById("Mobs")
    cont=document.getElementById("MobContainer");
    cont.style.display='block';
    // cont.style.backgroundColor="#ED6663"
    bt.style.backgroundColor='#46B5D1';
}
function showComps()
{
    comps=document.getElementById("Comps")
    btcomp=document.getElementById("Comp");
    comps .style.display='block';
    // cont.style.backgroundColor="#ED6663"
    btcomp.style.backgroundColor='#46B5D1';
}
function hideMobs()
{
    bt=document.getElementById("Mobs")
    cont=document.getElementById("MobContainer");
    cont.style.display='none';
    // cont.style.backgroundColor="#ED6663"
    bt.style.backgroundColor='white';
}
function hideComps()
{
        comps=document.getElementById("Comps")
    btcomp=document.getElementById("Comp");
    comps .style.display='none';
    // cont.style.backgroundColor="#ED6663"
    btcomp.style.backgroundColor='white';
}
function hidelaps()
{
        lap=document.getElementById("Labs")
    labbt=document.getElementById("Lab");
    lap.style.display='none';
    // cont.style.backgroundColor="#ED6663"
    labbt.style.backgroundColor='white';
}
function showlabs()
{
        lap=document.getElementById("Labs")
    labbt=document.getElementById("Lab");
    lap .style.display='block';
    // cont.style.backgroundColor="#ED6663"
    labbt.style.backgroundColor='#46B5D1';
}
function showSpeakers()
{
    Speaker=document.getElementById('Speakers')
    Speaker.style.display="block";
    Speakbtn=document.getElementById("Speak")
    Speakbtn.style.backgroundColor='#46B5D1';
}
function hideSpeakers()
{
  Speaker=document.getElementById('Speakers')
    Speaker.style.display="none";
    Speakbtn=document.getElementById("Speak")
    Speakbtn.style.backgroundColor='white';
}
function addd()
{
    cartBtn=document.getElementsByClassName('add');
for(var i=0;i<cartBtn.length;i+=1)
{
    cartBtn[i].addEventListener('click',function()
{
    hhh=document.getElementById('hhh')
Cart+=1;    
hhh.innerHTML=Cart;
console.log(Cart)
});
}
}
  function topFunction() {
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            } 