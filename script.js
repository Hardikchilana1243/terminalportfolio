const terminalarea = document.querySelector(".terminal")
const text = document.querySelector(".inputline")
const maparea = document.getElementById("map")
const body = document.querySelector("body")


const appendinterminal = (output) =>{
    let div = document.createElement("div")
    div.className =  "line"
    div.innerHTML = output
    terminalarea.appendChild(div)
}

function processfunction(command){
   if (command =="help" || command =="Help"){
    appendinterminal("-------------------------")
    

        appendinterminal("The following commands exits on help help ")
        appendinterminal("about")
       appendinterminal("projects")
       appendinterminal("socials")
       appendinterminal("Type anyone of the following to continue   :")
    appendinterminal("-------------------------")
    

   }else if(command =="about" || command =="About"){
    appendinterminal("-------------------------")
    appendinterminal("I am Passionate CS Student from India. I like making cool things")
    appendinterminal("I am based in India")
    maparea.classList.remove("hidden")
    appendinterminal("-------------------------")
    
   }else if(command =="projects" || command == "Commands"){
    appendinterminal("-------------------------")
    
    appendinterminal("1.Passvalley - A MERN based password manager")
    appendinterminal("2. Resumify - Making shareable portfolios made easy ")
    appendinterminal("-------------------------")
    
   }else if(command == "socials" || command =="Socials"){
    appendinterminal("-------------------------")
    
    appendinterminal("github.com/garvittsingla")
    appendinterminal("x.com/garvittsingla")
    appendinterminal("-------------------------")
    
   }else if (command=="clear"){
    terminalarea.innerHTML=""
   }
   else{
    appendinterminal("The following command does not exist , type help to continue")
   }

    
}
var map = L.map('map').setView([20.5937,  78.9629], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 3,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function godown() {
    terminalarea.scrollTop = terminalarea.scrollHeight;
}
text.addEventListener("keydown",function(event){
    if (event.key == "Enter"){
        let command = text.value.trim()
        console.log(command)
        if (command == ""){
            appendinterminal("The following command does not exist , type help to continue")

        }else{
            processfunction(command)
        }
        godown()
        text.value=""
    }
})