open = false

function OpenClose()
{
     if(open == true)
     {
          closeNav()
          open = false;
          document.getElementById("MenuButton").style.backgroundColor = "#3498db"
          document.getElementById("NavBar").style.backgroundColor = "#3498db"
          return document.getElementById("MenuButton").innerText = "Menu"
     }
     else if (open == false)
     {
          openNav()
          open = true;
          document.getElementById("MenuButton").style.backgroundColor = "#33333333"
          document.getElementById("NavBar").style.backgroundColor = "#33333333"
          return document.getElementById("MenuButton").innerText = "Close"
     }
}

function openNav() 
{
     document.getElementById("NavBar").style.width = "225px";
     document.getElementById("main").style.marginLeft = "225px";
     document.getElementById("main").style.marginRight = "-225px";
   
}
  
function closeNav() 
{
     document.getElementById("NavBar").style.width = "0";
     document.getElementById("main").style.marginLeft = "0";
     document.getElementById("main").style.marginRight = "0";

}
