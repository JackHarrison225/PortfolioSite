//Navagation Bar
open = false //used to see if navbar is open

let ProjectIndex = 0
const projectsList = [
     {
          projectName: "1",
          projectFinished: true,
          projectDescription: "",
          projectLink: "",
          projectImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXCbGVH7A7CpXlB0iih0uACBMzBU1vcqGz3TshlmqPe4jdNUqSLX8FKuJ_dY6el9zXds&usqp=CAU"
     },
     {
          projectName: "2",
          projectFinished: true,
          projectDescription: "",
          projectLink: "",
          projectImg: ""
     },
     {
          projectName: "3",
          projectFinished: true,
          projectDescription: "",
          projectLink: "",
          projectImg: ""
     },
     {
          projectName: "4",
          projectFinished: true,
          projectDescription: "",
          projectLink: "",
          projectImg: ""
     }
]

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

//next carasel project
function ChangeProjectUp(){
     if(ProjectIndex + 1 > projectsList.length - 1)
     {
          ProjectIndex = 0
          console.log(ProjectIndex)
          SetProject()
     }
     else
     {    
          ProjectIndex += 1
          console.log(ProjectIndex)
          SetProject()
     }
}   

function ChangeProjectDown(){      
     if(ProjectIndex - 1 < 0)
     {
          ProjectIndex = projectsList.length - 1
          console.log(ProjectIndex)
          SetProject()
     }
     else
     {    
          ProjectIndex -= 1
          console.log(ProjectIndex)
          SetProject()
     }
}

//event listeners for navbar menuw button
document.getElementById("MenuButton").addEventListener("click", OpenClose)
document.getElementById("MenuButton").addEventListener("mouseover", changeColour)
document.getElementById("MenuButton").addEventListener("mouseleave", changeColourBack)

//event listeners for Nar Bar Buttons
document.getElementById("HomeButton").addEventListener("click", OpenClose)
document.getElementById("ProjectButton").addEventListener("click", OpenClose)
//document.getElementById("PortfolioButton").addEventListener("click", OpenClose)
document.getElementById("CVButton").addEventListener("click", OpenClose)

//set values for slideshow
function SetProject(){
     document.getElementById("ProjectName").innerText = projectsList[ProjectIndex].projectName 
     document.getElementById("ProjectFinished").innerText = `Finished: ${projectsList[ProjectIndex].projectFinished}` 
     document.getElementById("ProjectDescription").innerText = projectsList[ProjectIndex].projectDescription 
     document.getElementById("ProjectsCaraselBg").src = projectsList[ProjectIndex].projectImg
}
SetProject()
//document.getElementById("ProjectLink").innerText = projectsList[ProjectIndex].projectLink 
//document.getElementById("ProjectImg").innerText = projectsList[ProjectIndex].projectImg 
document.getElementById("prev").innerText = "<"
document.getElementById("next").innerText = ">"

document.getElementById("prev").addEventListener("click", ChangeProjectDown)
document.getElementById("next").addEventListener("click",  ChangeProjectUp)