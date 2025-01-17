const API_KEY = "AIzaSyCGny9GfGd3WAgGBuCpdObMDfLtfRsriX8"; // Remplacez par votre clé API
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
function dd(){
    const input=document.getElementById("message");
    const button=document.getElementById('button');
    if(input.value.trim()!==''){
        button.disabled=false;
    }else{
        button.disabled=true;
    }
}
document.addEventListener("DOMContentLoaded", dd)

    


function envoyer(){
    const pos=document.getElementById('input-container');
    const p=document.getElementById('question');
    if(p){
    p.remove()
    }
    pos.style.bottom='0px';
    const input=document.getElementById("message");
    const button=document.getElementById('button');
    const prompt=input.value;
    if(!prompt.trim()) return;
    input.disabled=true;
    button.disabled=true;
    const message=document.getElementById('reponse');
    const usermessage=document.createElement("div");
    usermessage.className="mesuser";
    usermessage.textContent=prompt;
    message.appendChild(usermessage)
    
    const aimessage=document.createElement("div");
    aimessage.className="mesai";
    aimessage.innerHTML='<svg  class="brain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"/></svg>'+" " +  ".....";
    message.appendChild(aimessage)

const requestData = {
    contents: [
        {
            parts: [
                {
                    text:prompt
                }
            ]
        }
    ]
};
fetch(url, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(requestData)
})
.then(response => {
if (!response.ok) {
throw new Error(`HTTP error! Status: ${response.status}`);
}
return response.json();
})
.then(data => {
// Vérifie si les candidats existent et contiennent des parties

if (data.candidates && data.candidates.length > 0) {
const parts = data.candidates[0].content.parts;

if (Array.isArray(parts) && parts.length > 0) {
    // Extrait et affiche uniquement le texte généré
    const importantText = parts.map(part => part.text).join('\n');
    aimessage.innerHTML='<svg  class="brain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"/></svg>' + "  " + importantText;
} else {
    aimessage.textContent="No important text found in parts.";
}
} else {
aimessage.textContent="No candidates found in response.";
}
})
.catch(error => {
console.error("Error:", error);
})
.finally(()=>{
input.disabled=false;
button.disable=true;
input.value="";
input.focus();
})
}

function recharger(){
    const div=document.getElementById('reponse');
    const header=document.getElementById('header1');
    const k=document.createElement("p");
    k.textContent="Comment puis-je vous aider ?";
   k.id="question";
    div.innerHTML="";
    div.appendChild(header);
    div.appendChild(k);
    const pos=document.getElementById('input-container');
    pos.style.bottom='240px';
    
}

