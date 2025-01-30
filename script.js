document.addEventListener("DOMContentLoaded", function () {
    const resourcesContainer = document.getElementById("resourcesContainer");
    const buttons = document.querySelectorAll("nav button");

    
    function displayResources(category) {
        resourcesContainer.innerHTML = ""; 
        
        const filteredResources = resources
            .filter(resource => resource.category === category)
            .map(resource => {
                return `
                    <article>
                        <h2>${resource.category}</h2>
                        <p>${resource.text}</p>
                        <ul>
                            ${resource.sources.map(source => `
                                <li><a href="${source.url}" target="_blank">${source.title}</a></li>
                            `).join("")}
                        </ul>
                    </article>
               ` ;
            }).join("");

        resourcesContainer.innerHTML = filteredResources;
    }


    displayResources("HTML");

    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            displayResources(this.dataset.category);
        });
    });
});