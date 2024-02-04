// Array of planets with their moons
const planets = [
    { name: "Mercury", moons: ["Moon1", "Moon2"] },
    { name: "Venus", moons: ["Moon1", "Moon2", "Moon3"] },
    { name: "Earth", moons: ["Moon"] },
    { name: "Mars", moons: ["Moon1", "Moon2"] },
    { name: "Jupiter", moons: ["Moon1", "Moon2", "Moon3", "Moon4"] },
    { name: "Saturn", moons: ["Moon1", "Moon2", "Moon3"] },
    { name: "Uranus", moons: ["Moon1", "Moon2"] },
    { name: "Neptune", moons: ["Moon1", "Moon2", "Moon3"] },
  ];
  
  // Function to create planets and moons
  function createSolarSystem() {
    const section = document.querySelector(".listPlanets");
  
    planets.forEach((planet, index) => {
      // Create planet div
      const planetDiv = document.createElement("div");
      planetDiv.classList.add("planet", `planet${index}`);
      planetDiv.textContent = planet.name;
      planetDiv.style.backgroundColor = `hsl(${index * (360 / planets.length)}, 70%, 50%)`;
      
      // Append planet div to section
      section.appendChild(planetDiv);
  
      // Create moons for each planet
      planet.moons.forEach((moon, moonIndex) => {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon", `moon${moonIndex}`);
        moonDiv.textContent = moon;
        moonDiv.style.backgroundColor = `rgb(237, 237, 237)`;
        moonDiv.style.left = `${10 + (moonIndex * 50)}px`; // Adjust positioning of moons
        planetDiv.appendChild(moonDiv);
      });
    });
  }
  
  // Call the function to create the solar system
  createSolarSystem();
  