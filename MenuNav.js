//Navagation Bar
open = false //used to see if navbar is open

let ProjectIndex = 0
const projectsList = [
     {
          projectName: "Cryptography Site",
          projectFinished: "Finished",
          projectDescription: "This was my first real publicly avalible website. It contains a couple of code breaking puzzles that are simple, it also has links to a discord group along side exaples of cyptography and basic descriptions.",
          projectLinkText:"Link: HobbySite",
          projectLink: "https://jackharrison225.github.io/HobbySite/",
          projectImg: "https://i.postimg.cc/Kzj3L1gH/Screenshot-2024-02-20-152752.png"
     },
     {
          projectName: "Ceaser Cypher",
          projectFinished: "Finished",
          projectDescription: "This was a group project focused on testeing and making a ceaser cypher. We did it differntly to the way I had previously done so in the Cryptogrphy site.",
          projectLinkText:"Link: Cypher",
          projectLink: "https://jackharrison225.github.io/Cipher/",
          projectImg: "https://i.postimg.cc/RZLcHPRs/Screenshot-2024-02-20-154613.png"
     },
     {
          projectName: "Social Site",
          projectFinished: "Unfinished",
          projectDescription: "This was an attempt at making a social media site that is run entirely off of local storage. (This is highly impractical however I did not understand databases at time).",
          projectLinkText:"Link: Social Site",
          projectLink: "https://social-site-1onzm5koo-jackharrison225s-projects.vercel.app",
          projectImg: "https://i.postimg.cc/c4Bq5nBK/Screenshot-2024-02-20-160306.png"
     },
     {
          projectName: "Tore",
          projectFinished: "Unfinished",
          projectDescription: "This was my first ever text based adventure game. I have a few more commands to impliment on this game such as the selling and buying items however it it largly functional and fun.",
          projectLinkText:"Link: Tore",
          projectLink: "https://jackharrison225.github.io/JSGame/",
          projectImg: "https://i.postimg.cc/wjJ7yFXt/Screenshot-2024-02-20-160825.png"
     },
     // {
     //      projectName: "",
     //      projectFinished: "",
     //      projectDescription: "",
     //      projectLinkText:"Link: HobbySite",
     //      projectLink: "",
     //      projectImg: ""
     // },
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
document.getElementById("CVButton").addEventListener("click", OpenClose)

//set values for slideshow
function SetProject(){
     let link = projectsList[ProjectIndex].projectLink
     document.getElementById("ProjectName").innerText = projectsList[ProjectIndex].projectName 
     document.getElementById("ProjectFinished").innerText = projectsList[ProjectIndex].projectFinished
     document.getElementById("ProjectDescription").innerText = projectsList[ProjectIndex].projectDescription 
     document.getElementById("ProjectsCaraselBg").src = projectsList[ProjectIndex].projectImg
     document.getElementById("ProjectLink").innerText = projectsList[ProjectIndex].projectLinkText 
     document.getElementById("ProjectLink").setAttribute("href", link)
     //document.getElementById("ProjectImg").innerText = projectsList[ProjectIndex].projectImg 
}
SetProject()

document.getElementById("prev").innerText = "<"
document.getElementById("next").innerText = ">"

document.getElementById("prev").addEventListener("click", ChangeProjectDown)
document.getElementById("next").addEventListener("click",  ChangeProjectUp)