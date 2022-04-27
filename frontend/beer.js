console.log(beers);

const beersTitleComponent = function (inner,sub){
    return `
    <section id="${sub}"> ${inner} </section>
`
}

const beerCardComponent = function (title,sub,text){

    return`
    <div class="card">
        <beer detail="${title}">${title}</beer>
        <beer detail="${sub}">${sub}</beer>
        <beer detail="${text}">${text}</beer>
    </div>
    `
}

const loadEvent = function(){
    const rootElement = document.getElementById("root");
    
    for (const text of title){
        
        let sectionInner = ""
        sectionInner += beerCardComponent(title, sub.sub, text)
       
    }
    console.log(sectionInner);

    rootElement.insertAdjacentHTML("beforeend", beersTitleComponent(sectionInner, sub.text))
}

window.addEventListener("load", loadEvent)
