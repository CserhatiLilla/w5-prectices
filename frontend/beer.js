console.log(beers);

//itt hivatkozunk a forrásra//

const beerCardComponent = function (name,company,type){

    return`
        <div class="card">
            <div class="beerName">${name}</div>
            <div class="beerCompany">${company}</div>
            <div class="beerType">${type}</div>
        </div>
    `
}

// fent meg terveztük hogy nézzen ki a html file nem hivatkozunk itt semmire mi adjuk meg az adatokat paraméterek és class card//
//nem kell classnév mert az változó megadhatjuk de fölösleges ebben az esetben//


const beerTitelComponent =`
<h1>Beers</h1>
`;
//most a beerTitleComponent néven létrhoztunk egy változót, amint amit fentebb határoztunk meg. másik megoldás hogy nem hozunk létre változót hanem a fenti ``közti részt illesztjük a változó nevének (argumentumok) a helyére (lent), de érdemes a fenti módot alkalmazni.

const loadEvent = function(){
    const rootElement = document.getElementById("root");
    
    console.log(rootElement);

    rootElement.insertAdjacentHTML("beforeend", beerTitelComponent)
    //insertAdjacentHTMLez egy metódus,2 stringet kér:egy position sztringet és egyy olyan stringet, amit html kóddá tud alakírani 

    console.log(beers.cards);
    console.log(beers.logo);
    for (const beer of beers.cards) {
        //az of után a tömb nevét kell beírni ezt jelen esetben fentebb határoztuk meg
        //az off elé azt írjuk amire kiváncsiak vagyunk
        console.log(beer),
        //console.log(beer.cards.[0].titel--> ehelyett hoztuk létre a beer iterátort
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text))
    }
// ezzel a cikklussal végig lépkedek egy tömb elemein az elérési útvonala a beers nevű változó cards kulcsán lévő tömb. ezt a folyamat neve iterator később erre hivatkozunk
}
// tömb = for ciklus
//attól függ hogy melyik forciklust használom, hogy van-e adat vagy sem. ha van adat akkor a forof-ot használjuk, ha nincs a sima forloop-oti++)
window.addEventListener("load", loadEvent)

//a js azonnal létrhoz egy window objektumot amit lát a böngésző
//addEventListener:eseményfigyelő ezt a load esemény hívja meg
//minden script.jsben benne kell lennie window.addEventListener("load", loadEvent)

// 1. index.html ben benne van e a root id div és a scriptek csatolva vannak e
//2.sorrend fontos
