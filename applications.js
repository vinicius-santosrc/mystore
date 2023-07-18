fetch('topsemana.json').then(function(response) {
    return response.json()
}).then(function(topsemana) {
    let appscontent = document.querySelector('.apps-content')
    let output = '';
    let topsemanajson = JSON.stringify(topsemana)
        for(let apps of JSON.parse(topsemanajson)){
            output += `
                <div class="app-wid-middle">
                    <div class="leftsidemiddle">
                        <div class="icon-app">
                            <img src="${apps.icon}" alt="">
                        </div>
                        <div class="infoapp">
                            <h1>${apps.name}</h1>
                            <p id='descriptionapp'>${apps.description}</p>
                        </div>
                    </div>
                            
                    <div class="rightsidemiddle">
                        ${apps.onclick}
                        ${apps.in_app_purchases}
                    </div>
                </div>
            `;
        }
        appscontent.innerHTML = output;
})


