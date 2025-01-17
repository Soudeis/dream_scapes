let a=false;
function preview(){
    const heade=document.getElementById("header");
    const side=document.getElementById('side_bar');
    const main=document.getElementById("main");
    const footer=document.getElementById('footer');
    if(a==false){
    
    side.style.right="10px";
    heade.style.filter="blur(5px)";
    main.style.filter="blur(5px)";
    footer.style.filter="blur(5px)";
    a=true;
 }
    else{      
        side.style.right="-300px"; 
        heade.style.filter="none"; 
        main.style.filter="none";
        footer.style.filter="none";
        a=false;
    }
    
}
document.addEventListener("click",function(){
    const menu=document.getElementById("m");
    const heade=document.getElementById("header");
    const side=document.getElementById('side_bar');
    const main=document.getElementById("main");
    const footer=document.getElementById('footer');
if(!menu.contains(event.target) && a==true && !side.contains(event.target)){
    
    side.style.right="-300px";
    heade.style.filter="none";
    heade.style.filter="none"; 
    main.style.filter="none";
    footer.style.filter="none";
    a=false;
 }
   
   
})



let currentIndex=0;

function t(){
    const fond=document.getElementById("abc");
    const text=document.getElementById("text");
    const p1=document.getElementById("s")
    const p2=document.getElementById('aa')
    const p3=document.getElementById('bb')
    const p4=document.getElementById('cc')
    const p5=document.getElementById('dd')
    const po=document.getElementById('images');
    const of=-currentIndex * 45;
   const a="translateX(" + of +"%)";
    po.style.transform=a;
    
    if(currentIndex==0){
        
        p1.style.scale="1.09";
        p2.style.scale="1";
        p3.style.scale="1";
        p4.style.scale="1";
        p5.style.scale="1";
        p1.style.opacity="1";
        p2.style.opacity="0.7";
        p3.style.opacity="0.7";
        p4.style.opacity="0.7";
        p5.style.opacity="0.7";
        fond.src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR9EaGSWB1-fsEEzo66iy3nfgCyh9D-WdF7qAljD9RlrKv6StU6mVGSsn3cCuHIOrNusDmKwjD-Hu0797p9T5MAfxrQO5f52TZG10iNcA";
        text.textContent="La Grande Muraille de Chine, souvent considérée comme l'une des plus grandes merveilles architecturales du monde, est si immense qu'elle s'étend sur environ 21 196 kilomètres au total, selon une étude récente. Contrairement à une croyance populaire, elle n'est pas visible à l'œil nu depuis l'espace, mais sa longueur phénoménale en fait la structure la plus longue jamais construite par l'homme. En plus de sa taille impressionnante, certaines sections datent de plus de 2 300 ans et ont été construites pour défendre la Chine contre les invasions de divers peuples nomades.";
    }
    else if(currentIndex==1){

        p1.style.scale="1";
        p2.style.scale="1.09";
        p3.style.scale="1";
        p4.style.scale="1";
        p5.style.scale="1";
        p1.style.opacity="0.7";
        p2.style.opacity="1";
        p3.style.opacity="0.7";
        p4.style.opacity="0.7";
        p5.style.opacity="0.7";
        fond.src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRJ5RvtWSACQWXjqfbY0JC1ItsR253e88-MWdwgeC819dFkw1p_WjE0thgNlb98MVbobNqO0zdQuTsc8nWO8Ts55plKAH1pKQSLLlMSgw";
        text.textContent="La Grande Muraille de Chine est l’un des monuments les plus emblématiques au monde, témoignant de la puissance et de l’ingéniosité de l’ancienne Chine. S’étendant sur plus de 21 000 kilomètres à travers montagnes, vallées et déserts, cette merveille a été construite pour protéger l’Empire chinois contre les invasions. Aujourd’hui, elle symbolise la résilience et l’ambition d’un peuple, attirant des millions de visiteurs chaque année.";
    }
    else if(currentIndex==2){
        p1.style.scale="1";
        p2.style.scale="1";
        p3.style.scale="1.09";
        p4.style.scale="1";
        p5.style.scale="1";
        p1.style.opacity="0.7";
        p2.style.opacity="0.7";
        p3.style.opacity="1";
        p4.style.opacity="0.7";
        p5.style.opacity="0.7";
        fond.src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRP6SXoXkpym3CRHD7C36rgTHF_t7Zhy8U8NpgQp_Igcr_GRfzlLc9AoeXDDJnCuv9YiOjMprtXLUdxDwZocPp2CnqN-60YDmvLY1ZpLmg";
        text.textContent="Se tenir sur la Grande Muraille de Chine, c’est contempler une vue imprenable sur des paysages variés : collines verdoyantes, montagnes escarpées et horizons infinis. Chaque section offre une expérience unique. La section de Mutianyu, avec ses tours de garde restaurées, est parfaite pour les familles, tandis que celle de Jinshanling attire les aventuriers en quête de panoramas sauvages. Une randonnée sur ses escaliers inégaux est une immersion dans l’histoire et la nature.";
    }
    else if(currentIndex==3){
        p1.style.scale="1";
        p2.style.scale="1";
        p3.style.scale="1";
        p4.style.scale="1.09";
        p5.style.scale="1";
        p1.style.opacity="0.7";
        p2.style.opacity="0.7";
        p3.style.opacity="0.7";
        p4.style.opacity="1";
        p5.style.opacity="0.7";
        fond.src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSZ3LOIZvb4wYxvONvee44sjQDMnBFfATF6-K5vkJrCrxBMFrZjYblRxkUEhl2naOZ8KrmJ23OBaGlZFfLKLaOpAMMHvU592Q81aXxpnA";
        text.textContent="Au-delà de sa fonction défensive, la Grande Muraille regorge de mystères. Selon la légende, des milliers de travailleurs ont sacrifié leur vie pour sa construction, leurs âmes veillant encore sur cette structure titanesque. On raconte aussi que des signaux de fumée, allumés sur ses tours de garde, permettaient de transmettre des messages sur des centaines de kilomètres en quelques heures. Ces récits ajoutent une aura mystique à cet édifice colossal.";
    }
    else if(currentIndex==4){
        p1.style.scale="1";
        p2.style.scale="1";
        p3.style.scale="1";
        p4.style.scale="1";
        p5.style.scale="1.09";
        p1.style.opacity="0.7";
        p2.style.opacity="0.7";
        p3.style.opacity="0.7";
        p4.style.opacity="0.7";
        p5.style.opacity="1";
        fond.src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRgr21f8bxc3_PMBx4QmajTV-Br5Kev7lL2RtTW-dqE9SCI1V3nGC0G-CpyRDuLRenrevVQueUa5-Q0gZ05XR-JP_XrFosyr-zNFK4sKA";
        text.textContent="Inscrite au patrimoine mondial de l'UNESCO depuis 1987, la Grande Muraille de Chine est un trésor mondial qu’il est crucial de protéger. Certaines sections, exposées à l’érosion et au temps, nécessitent une attention constante. En visitant la muraille, suivez les itinéraires désignés pour éviter d’endommager ce joyau historique. Votre voyage peut contribuer à sensibiliser davantage à l’importance de sa préservation pour les générations futures.";
    }
}

//Fonction t1()

function recule(){
    currentIndex=(currentIndex > 0) ? currentIndex -1:5 -1;
    t();
    
    
}

function avance(){
    currentIndex=(currentIndex <5-1) ? currentIndex +1:0;
    t();
    
}

const p=document.getElementById("s");

function img1(){
    currentIndex=0;
    t();
    t1();
}
function img2(){
    currentIndex=1;
    t();
    
}
function img3(){
    currentIndex=2;
    t();
    
}
function img4(){
    currentIndex=3;
    t();
    
}
function img5(){
    currentIndex=4;
    t();
    
}

const apiKey = "PnwuwqKkMqjY4VsCNkbMQw7MVkBpPQwE"; // Remplacez par votre clé API valide.

    document.addEventListener("DOMContentLoaded", () => {
        
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      // Construire l'URL avec le nom de la région
      fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${encodeURIComponent("pekin")}&apikey=${apiKey}`, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Extraire les informations cruciales
          const crucialInfo = data.timelines?.daily?.map(day => ({
            date: new Date(day.time).toISOString().split("T")[0], // Formate uniquement la date
            temperatureMin: day.values.temperatureMin,
            temperatureMax: day.values.temperatureMax,
            windSpeedMin:day.values.windSpeedMin,
            windSpeedMax:day.values.windSpeedMax,
            VisibilityMin:day.values.visibilityMin,
            VisibilityMax:day.values.visibilityMax,
            weather: day.values.weatherCode || "No data available", // Vérifie si des données sont disponibles
          })) || [];

          // Afficher les informations
          document.getElementById("weatherInfo").innerHTML = crucialInfo
            .map(info => `
              <div class="weather-block">
                <p class="weather_p"><strong>Date:</strong> ${info.date}</p>
                <p weather_p><strong>Min Temp:</strong> ${info.temperatureMin}°C </p>
                <p weather_p><strong>Max Temp:</strong> ${info.temperatureMax}°C</p>
                <p weather_p><strong>Min Wind:</strong> ${info.windSpeedMin} km/h </p>
                <p weather_p><strong>Max Wind:</strong> ${info.windSpeedMax} km/h°C </p>
                <p weather_p><strong>Visibility Min:</strong> ${info.VisibilityMin} km/h</p>
                <p weather_p><strong>Visibility Max:</strong> ${info.VisibilityMax} km/h°C </p>
              </div>
              
            `).join("");
            
        })
        .catch((error) => console.error("Error fetching weather data:", error));
        
    });

    window.onload = function () {
           
        const ctx = document.getElementById('ali').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'pie', // Type de graphique
            data: {
                labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'juin',
                    "juillet","Aout","Septembre","Octobre","Novembre","Decembre"], // Catégories
                datasets: [{
                    label: 'Nombre de visites',
                    data: [
                        1200000, 
                        1000000, 
                        1500000, 
                        800000, 
                        8000000, 
                        1000500, 
                        1000000, 
                        500000, 
                        700000, 
                        1000000, 
                        1300000, 
                        1700000
                    ]
                    , // Données
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
      
    };
   