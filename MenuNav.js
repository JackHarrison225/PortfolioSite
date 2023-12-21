//Navagation Bar
open = false //used to see if navbar is open

//open and close navbar
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

//everything that should be done when navbar opens
function openNav() 
{
     document.getElementById("NavBar").style.width = "225px";
     document.getElementById("main").style.marginLeft = "225px";
     document.getElementById("main").style.marginRight = "-225px";
     document.getElementById("MenuButton").style.backgroundColor = "#111111"
     document.getElementById("NavBar").style.backgroundColor = "#111111"
     return document.getElementById("MenuButton").innerText = "Close"
   
}

//everything that should be done when navbar closes
function closeNav() 
{
     document.getElementById("NavBar").style.width = "0";
     document.getElementById("main").style.marginLeft = "0";
     document.getElementById("main").style.marginRight = "0";
     document.getElementById("MenuButton").style.backgroundColor = "#264f78"
     document.getElementById("NavBar").style.backgroundColor = "#264f78"
     return document.getElementById("MenuButton").innerText = "Menu"

}

//hover colour change
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

//stop hover colour change
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


//event listeners for navbar menuw button
document.getElementById("MenuButton").addEventListener("click", OpenClose)
document.getElementById("MenuButton").addEventListener("mouseover", changeColour)
document.getElementById("MenuButton").addEventListener("mouseleave", changeColourBack)


//event listeners for Nar Bar Buttons
document.getElementById("HomeButton").addEventListener("click", OpenClose)
document.getElementById("ProjectButton").addEventListener("click", OpenClose)
document.getElementById("PortfolioButton").addEventListener("click", OpenClose)
document.getElementById("CVButton").addEventListener("click", OpenClose)