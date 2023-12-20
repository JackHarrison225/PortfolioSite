open = false

function OpenClose()
{
     if(open == true)
     {    open = false;
          closeNav()
     }
     else if (open == false)
     {
          open = true;
          openNav()
          
     }
}

function openNav() 
{
     document.getElementById("NavBar").style.width = "225px";
     document.getElementById("main").style.marginLeft = "225px";
     document.getElementById("main").style.marginRight = "-225px";
     document.getElementById("MenuButton").style.backgroundColor = "#111111"
     document.getElementById("NavBar").style.backgroundColor = "#111111"
     return document.getElementById("MenuButton").innerText = "Close"
   
}
  
function closeNav() 
{
     document.getElementById("NavBar").style.width = "0";
     document.getElementById("main").style.marginLeft = "0";
     document.getElementById("main").style.marginRight = "0";
     document.getElementById("MenuButton").style.backgroundColor = "#264f78"
     document.getElementById("NavBar").style.backgroundColor = "#264f78"
     return document.getElementById("MenuButton").innerText = "Menu"

}


function changeColour(){
     if(open == true)
     {
          document.getElementById("MenuButton").style.backgroundColor = "#545454"
          document.getElementById("NavBar").style.backgroundColor = "#545454"
     }
     else if (open == false)
     {
          document.getElementById("MenuButton").style.backgroundColor = "#9cdcfe"
          document.getElementById("NavBar").style.backgroundColor = "#9cdcfe"
     }
}

function changeColourBack(){
     if(open == true)
     {
          document.getElementById("MenuButton").style.backgroundColor = "#111111"
          return document.getElementById("NavBar").style.backgroundColor = "#111111"
     }
     else if (open == false)
     {
          document.getElementById("MenuButton").style.backgroundColor = "#264F78"
          return document.getElementById("NavBar").style.backgroundColor = "#264f78"
     }
}
