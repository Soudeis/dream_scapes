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
        fond.src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQnZ5e3sXETQve5Mo2tejSTHwJHabjMa1mrv4t0t5VXPT0eErZ27jZN8or_iaiHcimNIjAA-JZ_0KWwc2VvPDQKjN-cINa-T-V6T87HiA";
        text.textContent="Le Mont Fuji, ou Fujisan, est la montagne la plus emblématique du Japon. Culminant à 3 776 mètres, ce volcan majestueux est vénéré depuis des siècles comme un lieu sacré et une source d’inspiration pour les artistes et poètes. Avec sa silhouette parfaitement conique, il domine le paysage et incarne la beauté naturelle du Japon.";
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
        fond.src="https://lh5.googleusercontent.com/p/AF1QipOt2N13WEXL86UsaX-WRzcjH_GT8AV5riImO_lG=w675-h390-n-k-no";
        text.textContent="Chaque année, des milliers de passionnés de randonnée gravissent les pentes du Mont Fuji pour atteindre son sommet. Les sentiers bien balisés, comme ceux de Yoshida et Fujinomiya, permettent aux visiteurs de profiter d’une expérience unique. Les randonneurs aiment commencer leur ascension avant l’aube pour assister à un lever de soleil spectaculaire, connu sous le nom de Goraiko.";
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
        fond.src="https://lh5.googleusercontent.com/p/AF1QipMc7x-0Rxf7UGeiWOip4gTFyoeWx31xqCkx51PC=w675-h390-n-k-no";
        text.textContent="Le Mont Fuji est bien plus qu’une montagne : c’est un symbole spirituel et culturel profondément enraciné dans l’histoire japonaise. De nombreux sanctuaires shinto et temples bouddhistes entourent ses flancs, témoignant de la dévotion qu’il inspire. Il est également une source d’inspiration pour des œuvres d’art célèbres, comme les estampes de Hokusai dans la série Les Trente-Six Vues du Mont Fuji.";
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
        fond.src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQNqL5LP9iab9cgO2EFWCt26ANjAo12bvK9bd-7DKu97ZdYEwjL7ySwAl5ingijHDJqPbi8YE5uH8611bokk_YLBfg8vkGdwR0W4O602w";
        // fond.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroTiDXMNcTp7635lY-yYLQ4B1aGIAhdr8CsPeS4P3JRcJxjMS";
        text.textContent="Le Mont Fuji change d’apparence au fil des saisons. En hiver, il est recouvert de neige scintillante, offrant une vue spectaculaire depuis les régions environnantes. En été, la saison officielle de l’escalade (juillet à septembre) attire les aventuriers du monde entier. Au printemps, il se pare d’un décor fleuri avec les cerisiers en fleurs, et en automne, il est entouré de feuillages rouges et dorés.";
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
        fond.src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRHUj5CQrZtbWs4gm66c2XyRkIyauyNJ09OF1w3Q_8fuMnP4moKWJEsoDj_KT9f79RmIZZcEwRJ-nCUHQJxwG35EyVGZ5haAPsdO9O1YA";
        text.textContent="Classé au patrimoine mondial de l’UNESCO depuis 2013, le Mont Fuji est protégé pour son importance culturelle et naturelle. Les autorités japonaises mettent en œuvre des mesures strictes pour préserver l’environnement fragile de la montagne, tout en gérant l’afflux touristique. Les visiteurs sont invités à respecter cette merveille naturelle en suivant des règles de protection.";
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
      fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${encodeURIComponent("yamanashi")}&apikey=${apiKey}`, options)
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
                    data: [300000, 4568000, 4500000, 400000, 365000, 3400500,120000,50000,70000,17000,1300000,800000], // Données
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
   