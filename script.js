var r=Math.floor(Math.random()*10)+1;
var Score = 10;
var element2= document.getElementById("resultbox")


function myrand()
{
    var a=document.getElementsByClassName("Ainput")[0].value;
    var p=document.getElementsByClassName("Bpara")[0];
    var s=document.getElementsByClassName("Cpara")[0];
    if (a==="")
    {

    }
    else if(a>10)
    {

    }
    else if(r==a)
    {
        element2.setAttribute("class","Dboxx");
        alert("Congratulations..!");
        p.textContent="CORRECT..! Refresh The Page ..!!";
        
    }
    else{
        element2.setAttribute("class","Dboxxx");
        p.textContent="WRONG!..Try Again.."
        Score--;
        if(Score<=0)
        {
            s.textContent="Your Score is Zero !! Refresh The Page ..!!";
        }
        else{
            s.textContent="Score : "+Score;

        }
    }

    
}