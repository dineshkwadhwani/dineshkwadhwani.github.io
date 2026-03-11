const headlines = [

{
headline:"Lead With Clarity. Execute With Confidence.",
text:"I coach ambitious professionals to think strategically and lead with confidence."
},

{
headline:"From Potential to Executive Presence.",
text:"Helping professionals sharpen leadership impact and accelerate career growth."
},

{
headline:"Think Like a Leader. Act Like an Owner.",
text:"Structured coaching that strengthens leadership thinking and execution."
},

{
headline:"Clarity. Confidence. Career Acceleration.",
text:"Navigate complex workplaces and build lasting leadership influence."
},

{
headline:"Executive Insight. Personal Transformation.",
text:"Three decades of leadership experience dedicated to coaching professionals."
}

]

let i=0

function rotateHero(){

document.getElementById("heroHeadline").innerText=headlines[i].headline
document.getElementById("heroSubtext").innerText=headlines[i].text

i=(i+1)%headlines.length

}

rotateHero()

setInterval(rotateHero,5000)



const hamburger=document.getElementById("hamburger")
const nav=document.getElementById("navMenu")

hamburger.onclick=()=>{

nav.classList.toggle("active")

}



const accordionItems=document.querySelectorAll(".accordion-item")
const approachImage=document.getElementById("approachImage")

accordionItems.forEach(item=>{

item.querySelector(".accordion-header").onclick=()=>{

accordionItems.forEach(i=>i.classList.remove("active"))

item.classList.add("active")

approachImage.src="images/"+item.dataset.image

}

})



const tools=[

{
title:"Leadership Circle Profile",
image:"images/tool1.png",
description:"Measures creative competencies and reactive tendencies."
},

{
title:"Hogan Leadership Forecast",
image:"images/tool2.png",
description:"Identifies leadership derailers and stress behaviors."
},

{
title:"360 Feedback Skillscope",
image:"images/tool3.png",
description:"Compares leader self perception with team feedback."
},

{
title:"AI Leadership Simulations",
image:"images/tool4.png",
description:"Practice real leadership conversations using AI scenarios."
},

{
title:"Strategic SWOT Tools",
image:"images/tool5.png",
description:"Strategic thinking tools used during leadership coaching."
}

]

let toolIndex=0

const toolImage=document.getElementById("toolImage")
const toolTitle=document.getElementById("toolTitle")

function updateTool(){

toolImage.src=tools[toolIndex].image
toolTitle.innerText=tools[toolIndex].title

}

document.getElementById("nextTool").onclick=()=>{

toolIndex=(toolIndex+1)%tools.length
updateTool()

}

document.getElementById("prevTool").onclick=()=>{

toolIndex=(toolIndex-1+tools.length)%tools.length
updateTool()

}

setInterval(()=>{

toolIndex=(toolIndex+1)%tools.length
updateTool()

},3000)



const modal=document.getElementById("toolModal")
const modalTitle=document.getElementById("modalTitle")
const modalDescription=document.getElementById("modalDescription")

toolImage.onclick=()=>{

modal.style.display="block"

modalTitle.innerText=tools[toolIndex].title
modalDescription.innerText=tools[toolIndex].description

}

document.getElementById("closeModal").onclick=()=>{

modal.style.display="none"

}