var i=1;
var img=document.getElementById("Slphoto");
var first=true;
var fir=true

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