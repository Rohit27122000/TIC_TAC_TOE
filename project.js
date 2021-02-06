 var str1="";
 var str2="";
 var turns=0;
 var r1=0;var r2=0;var r3=0;var r4=0;var r5=0; var r6=0;var r7=0;var r8=0;var r9=0;
 var finish=0;
function confor1()
 {var a = str1.includes("1")&&str1.includes("2")&&str1.includes("3");
 var b = str1.includes("4")&&str1.includes("5")&&str1.includes("6");
 var c = str1.includes("7")&&str1.includes("8")&&str1.includes("9");
 var d = str1.includes("1")&&str1.includes("4")&&str1.includes("7");
 var e = str1.includes("2")&&str1.includes("5")&&str1.includes("8");
 var f = str1.includes("3")&&str1.includes("6")&&str1.includes("9");
var g = str1.includes("1")&&str1.includes("5")&&str1.includes("9");
 var h = str1.includes("3")&&str1.includes("5")&&str1.includes("7");
    return (a||b||c||d||e||f||g||h);
    }
 function confor2()
 {var a = str2.includes("1")&&str2.includes("2")&&str2.includes("3");
 var b = str2.includes("4")&&str2.includes("5")&&str2.includes("6");
 var c = str2.includes("7")&&str2.includes("8")&&str2.includes("9");
 var d = str2.includes("1")&&str2.includes("4")&&str2.includes("7");
 var e = str2.includes("2")&&str2.includes("5")&&str2.includes("8");
 var f = str2.includes("3")&&str2.includes("6")&&str2.includes("9");
var g = str2.includes("1")&&str2.includes("5")&&str2.includes("9");
 var h = str2.includes("3")&&str2.includes("5")&&str2.includes("7");
    return (a||b||c||d||e||f||g||h);
   }

 
 function enter()
{  
    document.getElementById("welcome").innerHTML=" Hello ! Welcome to the game";
}

function assign()
{
   var x= document.getElementById("p1").value;
 var y=document.getElementById("p2").value;
   
    document.getElementById("0x").innerHTML= x+", you are assigned 0 and "+y+", you are assigned x ";
    document.getElementById("0x").innerHTML+=  "<br>"+x + " and " +y+", Click the box at every turn .";
}
function decision()
{         var x= document.getElementById("p1").value;
         var y=document.getElementById("p2").value; 
         if(x=="")
           x=" Player-1";
           if(y=="")
           y=" Player-2";
             if(turns==5&& confor1())
            {document.getElementById("print").innerHTML= "GAME OVER!" + x +" is the winner";
              finish++;}
            if(turns==6&&confor2())
            {document.getElementById("print").innerHTML= "GAME OVER!" + y +" is the winner";
              finish++;}
           if(turns==7&&confor1())
            {document.getElementById("print").innerHTML= "GAME OVER!" + x +" is the winner";
            finish++;}
            if(turns==8&&confor2())
            {document.getElementById("print").innerHTML= "GAME OVER!" + y +" is the winner";
            finish++;}
           if(turns==9&&confor1())
            {document.getElementById("print").innerHTML= "GAME OVER!" + x +" is the winner";
            finish++;}
           if(turns==9&& !confor1())
           {document.getElementById("print").innerHTML= "GAME TIED! <br>";
           finish++;}
turns
}

function check1()
{          if(r1>0)
          {
            alert("You can't select this box again! ");
          }  
          else if(finish>0)
          alert("Game is finshed dear, now you can't do anything!");

       else {if(turns%2==0)
        {  str1+="1";
            document.getElementById("bb1").innerHTML="0";
        }
        else 
       { str2+="1";
        document.getElementById("bb1").innerHTML="x";}
        
         turns+=1;
         r1++;
        if(turns>4)
         decision();}
}
function check2()
{         if(r2>0)
    {
        alert("You can't select this box again! ");
    }     
    else if(finish>0)
    alert("Game is finshed dear, now you can't do anything!");
        else {if(turns%2==0)
        {str1+="2";
            document.getElementById("bb2").innerHTML="0";
        }
        else 
       { str2+="2";
        document.getElementById("bb2").innerHTML="x";}
         turns+=1;
         r2++;
         if(turns>4)
            decision();}
}

function check3()
{       if(r3>0)
    {
        alert("You can't select this box again! ");
    }       else if(finish>0)
    alert("Game is finshed dear, now you can't do anything!");
        else {if(turns%2==0)
        {str1+="3"
            document.getElementById("bb3").innerHTML="0";
        }
        else 
       { str2+="3";
        document.getElementById("bb3").innerHTML="x";}
 turns+=1;r3++;
         if(turns>4)
            decision();}
}

function check4()
{          if(r4>0)
    {
        alert("You can't select this box again! ");
    }    else if(finish>0)
    alert("Game is finshed dear, now you can't do anything!");
       else{if(turns%2==0)
        {   str1+="4";
            document.getElementById("bb4").innerHTML="0";
        }
        
        else 
       { str2+="4";
        document.getElementById("bb4").innerHTML="x";}
 turns+=1;r4++;
         if(turns>4)
            decision();}
}


function check5()
{           if(r5>0)
    {
        alert("You can't select this box again! ");
    }  else if(finish>0)
    alert("Game is finshed dear, now you can't do anything!");  
    else
        {if(turns%2==0)
        {str1+="5";
            document.getElementById("bb5").innerHTML="0";
        }
        else 
       { str2+="5";
        document.getElementById("bb5").innerHTML="x";}
 turns+=1;r5++;
         if(turns>4)
            decision();}
}

function check6()
{        if(r6>0)
    {
        alert("You can't select this box again! ");
    }    else if(finish>0)
    alert("Game is finshed dear, now you can't do anything!");   
        else {if(turns%2==0)
        { str1+="6";
            document.getElementById("bb6").innerHTML="0";
        }
        else 
       { str2+="6";
        document.getElementById("bb6").innerHTML="x";}
 turns+=1;r6++;
         if(turns>4)
            decision();}
}


function check7()
{           if(r7>0)
    {alert("You can't select this box again! ");
    
    }    else if(finish>0)
    alert("Game is finshed dear, now you can't do anything!");
        else {if(turns%2==0)
        {str1+="7";
            document.getElementById("bb7").innerHTML="0";
        }
        else 
       { str2+="7";
        document.getElementById("bb7").innerHTML="x";}
 turns+=1;r7++;
         if(turns>4)
            decision();
}}

function check8()
{          if(r8>0)
    {
        alert("You can't select this box again! ");
    }    else if(finish>0)
    alert("Game is finshed dear, now you can't do anything!");
        else {if(turns%2==0)
        {str1+="8";
            document.getElementById("bb8").innerHTML="0";
        }
        else 
       { str2+="8";
        document.getElementById("bb8").innerHTML="x";}
 turns+=1;r8++;
         if(turns>4)
            decision();}
}

function check9()
{       if(r9>0)
  {alert("You can't select this box again! ");
    }     else if(finish>0)
    alert("Game is finshed dear, now you can't do anything!");   
        else {if(turns%2==0)
        {str1+="9";
            document.getElementById("bb9").innerHTML="0";
        }
        else 
       { str2+="9";
        document.getElementById("bb9").innerHTML="x";}
 turns+=1;r9++;
         if(turns>4)
            decision();}
}


function reset()
{
  location.reload();
}