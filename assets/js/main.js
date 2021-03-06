const cardList = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

/* Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
 */



//Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const iconSelect = document.getElementById("icon-selector");
const cardSelect = document.getElementById("animal-card");
iconSelect.addEventListener("change", function () {
    cardSelect.innerHTML = "";
    if (iconSelect.value == "all") {
        cardList.filter(element => {
            cardSelect.insertAdjacentHTML("beforeend",
                `      <div
            class="
              animal-card
              rounded
              d-flex
              flex-column
              justify-content-center
              align-items-center
              ${element.type}
            "
            >
            <i class="${element.family} ${element.prefix}${element.name}"></i>
            <h6 class="text-uppercase">${element.name}</h6>
            </div>`
            );

        });
    } else if (iconSelect.value == "animal") {
/*         cardSelect.classList.toggle("justify-content-start"); */
        cardList.filter(element => {
            if (element.type == "animal") {
                cardSelect.insertAdjacentHTML("beforeend",
                    `      <div
                class="
                  animal-card
                  rounded
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  ${element.type}
                "
                >
                <i class="${element.family} ${element.prefix}${element.name}"></i>
                <h6 class="text-uppercase">${element.name}</h6>
                </div>`
                );
            }
        })

    }
    else if (iconSelect.value == "vegetable") {
/*         cardSelect.classList.toggle("justify-content-between"); */
        cardList.filter(element => {
            if (element.type == "vegetable") {
                cardSelect.insertAdjacentHTML("beforeend",
                    `      <div
                class="
                  animal-card
                  rounded
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  ${element.type}
                "
                >
                <i class="${element.family} ${element.prefix}${element.name}"></i>
                <h6 class="text-uppercase">${element.name}</h6>
                </div>`
                );
            }
        })

    }
    else if (iconSelect.value == "user") {
/*         cardSelect.classList.toggle("justify-content-between"); */
        cardList.filter(element => {
            if (element.type == "user") {
                cardSelect.insertAdjacentHTML("beforeend",
                    `      <div
                class="
                  animal-card
                  rounded
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  ${element.type}
                "
                >
                <i class="${element.family} ${element.prefix}${element.name}"></i>
                <h6 class="text-uppercase">${element.name}</h6>
                </div>`
                );
            }
        })

    }
})