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
        fond.src="https://static.independent.co.uk/2023/10/27/06/newFile-2.jpg?width=1200";
        text.textContent="Abu Dhabi, la capitale des Émirats arabes unis, est une ville moderne et dynamique située sur une île dans le golfe Persique. Elle est connue pour son mélange unique de traditions culturelles et d'innovation contemporaine. Avec ses gratte-ciel impressionnants, ses plages de sable blanc et ses musées renommés comme le Louvre Abu Dhabi, la ville offre une expérience inoubliable aux visiteurs. C'est également un centre politique et économique clé, abritant des institutions importantes telles que le palais présidentiel et la majorité des sièges gouvernementaux.";
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
        fond.src="https://www.femmexpat.com/wp-content/uploads/2015/06/Vivre-a-Abu-dhabi-EAU-UNE-femmexpat-559x520.png";
        text.textContent="Abu Dhabi tire son nom de l’expression arabe Père de la gazelle, en référence aux nombreuses gazelles qui peuplaient autrefois ses terres désertiques. Fondée comme un village de pêcheurs et de perliers, la ville a connu une transformation radicale au 20ᵉ siècle avec la découverte du pétrole. Aujourd'hui, elle conserve son riche patrimoine à travers des sites emblématiques comme le Qasr Al Hosn, un fort historique témoignant de ses modestes débuts, et des traditions vivantes telles que la fauconnerie et la danse Al Ayala.";
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
        fond.src="https://lh5.googleusercontent.com/p/AF1QipPHeFGCp8Mz1MLVtj9PlrkI2kgy_mrABADApYoY=w675-h390-n-k-no";
        text.textContent="Abu Dhabi est une destination incontournable pour les amateurs de culture, de luxe et d’aventure. Parmi les attractions phares, la majestueuse Mosquée Sheikh Zayed impressionne par sa splendeur architecturale, tandis que l'île de Yas propose des parcs à thème comme Ferrari World et Yas Waterworld. Les amateurs de nature peuvent explorer le désert environnant lors de safaris ou visiter le parc national de Mangrove pour une expérience paisible en kayak. De plus, la Corniche offre une vue spectaculaire sur la mer et une promenade agréable pour les familles.";
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
        fond.src="https://lh5.googleusercontent.com/p/AF1QipMOnDWpOtqBn5Xi_1S0EXyrhn1GKR5nJS6_aWlg=w675-h390-n-k-no";
        // fond.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroTiDXMNcTp7635lY-yYLQ4B1aGIAhdr8CsPeS4P3JRcJxjMS";
        text.textContent="Abu Dhabi est au cœur de l’économie des Émirats grâce à ses vastes réserves de pétrole et de gaz naturel. Cependant, la ville a pris des mesures ambitieuses pour diversifier son économie, se tournant vers des secteurs comme le tourisme, l’énergie renouvelable et la culture. Le projet Masdar City, une ville entièrement durable, illustre cet engagement envers un avenir écologique. Avec des initiatives audacieuses, Abu Dhabi se positionne comme un modèle de développement durable dans le monde arabe.";
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
        fond.src="https://lh5.googleusercontent.com/p/AF1QipOGkkqAKW9-UP3BpgB5URG1lMpXvlmDf2ajE8I5=w675-h390-n-k-no";
        text.textContent="Abu Dhabi se distingue comme un carrefour mondial où se croisent différentes cultures. Le Louvre Abu Dhabi, conçu par l’architecte Jean Nouvel, abrite des œuvres d’art emblématiques du monde entier. La ville organise également des événements prestigieux tels que le Festival de cinéma d’Abu Dhabi et des expositions internationales. Ce mélange d’héritage local et d’ouverture mondiale fait d’Abu Dhabi un lieu unique pour les passionnés de culture et d’art.";
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
      fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${encodeURIComponent("Abou dabi")}&apikey=${apiKey}`, options)
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
                    data: [1200000, 1000000, 1500000, 800000, 8000000, 1000500,1000000,500000,700000,1000000,1300000,1700000], // Données
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
   