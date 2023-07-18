fetch('applications.json').then(function(response) {
    return response.json()
}).then(function(applications) {
    let appscontent = document.querySelector('.apps-content')
    let output = '';
    let outputgames = '';

    let allapps = JSON.stringify(applications)



    // FUNÇÃO PARA OBTER OS APLICATIVOS TOP DA SEMANA
    function apps_top_da_semana() {
        const array = JSON.parse(allapps)
        const arryresult = array.filter((verifytopsemana) => {
            return verifytopsemana.topdasemana.includes('yes')
        }) 
        const topsemanaapps = JSON.stringify(arryresult)
        const topsemanaapps2 = topsemanaapps
        for(let apps of JSON.parse(topsemanaapps2)){
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
    }
    //WIDGET GRANDE RANDOM
    function showwidgetgrande() {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
        const bestappweek = JSON.parse(allapps)
        const numbersorteado = random(0, JSON.parse(allapps).length)

        const bestappsemanaarry = bestappweek.filter((verifybestappsemanaarry) => {
            return verifybestappsemanaarry.id.includes(numbersorteado)
        }) 
        const bestapp1 = JSON.stringify(bestappsemanaarry)
        const bestapp2 = JSON.parse(bestapp1)
        let wg = document.querySelector('.widget-large-best-app')
        var saidadedadosbestapp = '';

        for(let bestapp of bestapp2){
            saidadedadosbestapp += `
                <div class="inside-top-widget-large">
                    <div class="imageiinsidewidget">
                    </div>
                    <div class="inside-top-widget-large-text">
                        <p>NOSSOS MELHORES APPS</p>
                        ${bestapp.description}
                    </div>
                </div>
                <div class="inside-bottom-widget-large">
                    <div class="iconappwidget">
                        <div class="apps-info-widlarg">
                            <img src="${bestapp.icon}" alt="">
                            <div>
                                <h1>${bestapp.name}</h1>
                                <p>${bestapp.description}</p>
                            </div>
                        </div>
                        <div class="button-action-obter">
                            <a href="${bestapp.onclick}"><label>OBTER</label></a>
                        </div>
                    </div>
                    
                </div>
            `;
            const back = document.querySelector('.widget-large')
            back.style.backgroundImage = `url('${bestapp.icongrande}')`;
        }
        wg.innerHTML = `${saidadedadosbestapp}`
    }

    //JOGOS WIDGET MEDIO
    function games() {
        const array = JSON.parse(allapps)
        const arryresult = array.filter((verifytopsemana) => {
            return verifytopsemana.type.includes('Jogo')
        }) 
        const gameapps = JSON.stringify(arryresult)
        const gameapps2 = JSON.parse(gameapps)
        for(let game of gameapps2){
            outputgames += `
                <div class="app-wid-middle">
                    <div class="leftsidemiddle">
                        <div class="icon-app">
                            <img src="${game.icon}" alt="">
                        </div>
                        <div class="infoapp">
                            <h1>${game.name}</h1>
                            <p id='descriptionapp'>${game.description}</p>
                        </div>
                    </div>
                                
                    <div class="rightsidemiddle">
                        ${game.onclick}
                        ${game.in_app_purchases}
                    </div>
                </div>
            `;
        }
        let appscontentgames = document.querySelector('.appscontentgames')
        appscontentgames.innerHTML = outputgames;
    }

    //WIDGET GRANDE RANDOM
    function showwidgetgrande_2() {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
        const bestappweek = JSON.parse(allapps)
        const numbersorteado = random(0, JSON.parse(allapps).length)

        const bestappsemanaarry = bestappweek.filter((verifybestappsemanaarry) => {
            return verifybestappsemanaarry.id.includes(numbersorteado)
        }) 
        const bestapp1 = JSON.stringify(bestappsemanaarry)
        const bestapp2 = JSON.parse(bestapp1)
        let wg = document.querySelector('.widget-large-2 .widget-large-best-app')
        var saidadedadosbestapp = '';

        for(let app2 of bestapp2){
            saidadedadosbestapp += `
                <div class="inside-top-widget-large">
                    <div class="imageiinsidewidget">
                    </div>
                    <div class="inside-top-widget-large-text">
                        <p>NOSSOS MELHORES APPS</p>
                        ${app2.description}
                    </div>
                </div>
                <div class="inside-bottom-widget-large">
                    <div class="iconappwidget">
                        <div class="apps-info-widlarg">
                            <img src="${app2.icon}" alt="">
                            <div>
                                <h1>${app2.name}</h1>
                                <p>${app2.description}</p>
                            </div>
                        </div>
                        <div class="button-action-obter">
                            <a href="${app2.onclick}"><label>OBTER</label></a>
                        </div>
                    </div>
                    
                </div>
            `;
            const back = document.querySelector('.widget-large-2')
            back.style.backgroundImage = `url('${app2.icongrande}')`;
        }
        wg.innerHTML = `${saidadedadosbestapp}`
    }

    


    apps_top_da_semana()
    showwidgetgrande()
    games()
    showwidgetgrande_2()
})


