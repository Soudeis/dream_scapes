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
        fond.src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTlJstbNtl4XYzUdneSFb3wkuNuZv9MRBJLH8HXER6ZgVu5M_9sbL3m6CZW5GsJOA1WRqvLu0btB9FNetT41q6sbg3xP1FlZMPe8xS3-A";
        text.textContent="Djenné, située au centre du Mali, est une ville emblématique reconnue pour son patrimoine historique et culturel. Fondée autour du IXᵉ siècle, elle est célèbre pour sa Grande Mosquée, un chef-d'œuvre de l'architecture en terre battue. Classée au patrimoine mondial de l'UNESCO, Djenné attire chaque année des milliers de visiteurs fascinés par son histoire et ses traditions ancestrales. Elle a joué un rôle crucial comme centre commercial et intellectuel au cœur de l'Afrique de l'Ouest.";
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
        fond.src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQPJJlpp70aVI-ZG_VDRVZd_Wrfr8qvcMqlLdidnWVALTHzcqmRNXW6yT8Nt5rRRXawLODVJYJo2eL1YCUBNmZsTr3yTa868e749lP-Aw";
        text.textContent="La Grande Mosquée de Djenné est l'un des monuments les plus emblématiques d'Afrique. Construite en 1907 sur les vestiges d'une ancienne mosquée du XIIIᵉ siècle, elle est entièrement réalisée en banco, un mélange de terre et de paille. Chaque année, les habitants participent à un rituel communautaire pour réparer les murs endommagés par la pluie, renforçant ainsi les liens sociaux. Ce monument symbolise non seulement la foi islamique, mais aussi l'ingéniosité et l'unité des habitants de Djenné.";
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
        fond.src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRuRT88SFSkvwv6qv6FfNzhT5QdAG3DmWwE1NYCELRH1ZtE-iVAGBv5CYZd8A1c067CKnrgX7N2_mVTCicY035MVKQJbo5Butp2w2ry8Q";
        text.textContent="Le marché de Djenné, qui se tient tous les lundis sur la place devant la Grande Mosquée, est un spectacle vibrant de couleurs, de sons et de saveurs. Ce marché hebdomadaire rassemble des commerçants venus de toute la région, offrant des produits locaux tels que des épices, des textiles, des bijoux et de la poterie. Il est également un lieu d'échange culturel, où les langues et les traditions s'entrelacent, témoignant de la richesse culturelle du Mali.";
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
        fond.src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTvUM1QsOL5fwzP2nId4sDpnsej9rnJQ2S4QGzuVNR0mvLgCAopZ0jInzUexuRvd8RTRDKwNoBLsM85ROoqERVPZKuOgpIOWERQF6839Q";
        text.textContent="Au Moyen Âge, Djenné était un centre intellectuel florissant, attirant des érudits de tout l'empire du Mali. Des écoles coraniques y prospéraient, enseignant la théologie, la science et les lettres. Les manuscrits anciens de Djenné, conservés dans des bibliothèques privées, témoignent de cette époque glorieuse. Ces documents précieux, souvent écrits en arabe ou en langues locales, sont des trésors inestimables pour l'histoire africaine.";
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
        fond.src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS1pJgSzLxMXtMiBL05jD9EdDGw8Z5rFUpa_qYkwEWmfBWx-ZJLqiIPO5C29xzugq2Me0rZVasfCI1axdqkC04YCEMG_M1R_vCfYd0VbA";
        text.textContent="Située sur une île dans le delta intérieur du Niger, Djenné est entourée d'eau une grande partie de l'année. Les habitants ont développé des techniques agricoles et architecturales adaptées à ce milieu. Les pirogues sont encore aujourd'hui un moyen de transport essentiel. L'environnement unique de Djenné, avec ses plaines inondées et ses paysages pittoresques, ajoute à l'attrait de cette ville mythique, qui demeure une perle vivante de l’histoire africaine.";
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
      fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${encodeURIComponent("djenne")}&apikey=${apiKey}`, options)
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
                    data: [400, 1200, 1000, 300, 400, 500,100,300,200,350,800,400], // Données
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
   