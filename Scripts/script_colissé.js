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
        fond.src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRG1sqJ5imG0LvLiegYrzH3KDK81Zt7d_qI3V5KRWzU0FlPXVJzBUBg9HdAIKIzRmqfmmr5dLNdCf9sipF9GSHUHTkbmWkKK6eO_HRDxw";
        text.textContent="Le Colisée, ou Amphithéâtre Flavien, est un symbole emblématique de la grandeur de l'Empire romain. Construit en 70-80 après J.-C., il pouvait accueillir jusqu’à 50 000 spectateurs venus assister à des combats de gladiateurs, des chasses aux animaux exotiques et des reconstitutions de batailles navales. Avec sa structure en pierre et en béton, il incarne l’ingéniosité architecturale et l’esprit du divertissement de l’Antiquité.";
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
        fond.src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ3lFbzkE5VwCCf_OanNpThZvJUH58PZyMM8IGs_B07nIVwvWIINOAraZaHKFhwg0uN62xGmKDxyKW8TGsZhOIVvu7Hi-iKI4HCZVIj1Q";
        text.textContent="Chef-d’œuvre d’ingénierie, le Colisée est réputé pour son système innovant d’arènes et ses sous-sols complexes où animaux et gladiateurs attendaient avant d’entrer en scène. Ses arcades majestueuses et ses gradins en gradation témoignent d’une conception avancée, pensée pour accueillir des foules massives tout en offrant une vue imprenable sur l’arène.";
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
        fond.src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSRfuxBO4aPTu3EU4XNlKESFxYv3kIV68yIhRSw_-nxQUsEGv_9Jx5D66KlK5dYHjd5ZxiXB2YkRl0hk95XGut9UylV9kz56ULZSNL4ADQ";
        text.textContent="Au fil des siècles, le Colisée a survécu aux tremblements de terre, aux pillages, et aux ravages du temps. Autrefois un lieu de spectacles sanglants, il a été transformé en forteresse, carrière de pierres, et même sanctuaire chrétien. Aujourd’hui, il est un site touristique incontournable et un symbole de la complexité historique de Rome.";
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
        fond.src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQEEIk-A9wbYWbVXcN4RQVEr_NxtgFURzr3XtmOSSzANysNy864Cf0So_tJipzqWuZbcfdXO0dk-B1Sq1BJ8nyI2x1e-6G4QnZi9BWPVw";
        
        text.textContent="Chaque année, des millions de visiteurs affluent au Colisée pour explorer cet héritage exceptionnel. Les visites guidées plongent les touristes dans l’histoire fascinante de cet amphithéâtre, offrant des anecdotes sur la vie des gladiateurs et les spectacles qui se déroulaient dans l’arène. Une visite de nuit, lorsque le monument est magnifiquement éclairé, offre une expérience magique.";
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
        fond.src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ4TRe5bNPOJi9uSX2biNU8G7vd6StrClnJsmx9fBFcyRSGZKWPYd3hI2p2EUl2dUyJf8kEo7zcknBcQX3LfPSmPDKjGCVq2SfgPW3RVA";
        text.textContent="Classé au patrimoine mondial de l’UNESCO, le Colisée est un symbole qu’il faut préserver. Des efforts constants sont déployés pour restaurer ce monument, tout en gérant le flux des touristes afin de minimiser son usure. Les visiteurs sont invités à respecter ce site emblématique pour le protéger pour les générations futures.";
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
      fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${encodeURIComponent("rome")}&apikey=${apiKey}`, options)
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
                    data: [400000, 450000, 550000, 750000, 800000, 900000,950000,900000,750000,800000,500000,600000], // Données
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
   