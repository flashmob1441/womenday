const popupBtn = document.querySelector(".gift__icon");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

const addBtns = document.querySelectorAll(".add__btn");
const removeBtns = document.querySelectorAll(".remove__btn");

const listBtns = document.querySelectorAll(".list__btn");

const sendBtn = document.querySelector(".send__btn");

const counts = document.querySelectorAll(".count");

const strawberry = document.querySelector(".strawberry");

let text;
let url = "https://wa.me/77710880056?text=Здравствуйте.%20Я%20хочу%20заказать%20у%20вас%20бокс.%20";

let candy = [0, 0, 0, 0, 0, 0];
let perfume = [0, 0, 0, 0, 0, 0];
let lacoste = [0, 0, 0];
let flowers = [0, 0];

let strawberryCount = 0;

let itemsBlockOpen = false;

let tempText = "";
let candyText = "";
let perfumeText = "";
let lacosteText = "";
let flowersText = "";

function giftClick(e) {
    popup.classList.toggle("open");
    e.preventDefault();
}

popupBtn.addEventListener("click", giftClick);
popupClose.addEventListener("click", giftClick);

for (let addBtn of addBtns) {
    addBtn.addEventListener("click", () => {
        const name = addBtn.id;
        const id = name.substring(name.length - 1);
        const count = document.querySelector(".count#" + name);
        const itemType = name.slice(0, -1);

        if (itemType === "flowers" && count.innerHTML < 21) {
            if (count.innerHTML == 0) {
                count.innerHTML++;
            }
            else {
                count.innerHTML = +count.innerHTML + 2;
            }
            flowers[id - 1] = count.innerHTML;
        }
        else if (count.innerHTML < 10) {
            count.innerHTML++;

            if (itemType === "candy") {
                candy[id - 1] = count.innerHTML;
            }
            else if (itemType === "perfume") {
                perfume[id - 1] = count.innerHTML;
            }
            else if (itemType === "lacoste") {
                lacoste[id - 1] = count.innerHTML;
            }
        }
    })
}

for (let removeBtn of removeBtns) {
    removeBtn.addEventListener("click", () => {
        const name = removeBtn.id;
        const id = name.substring(name.length - 1);
        const count = document.querySelector(".count#" + name);
        const itemType = name.slice(0, -1);

        if (itemType === "flowers" && count.innerHTML > 0) {
            if (count.innerHTML == 1) {
                count.innerHTML--;
            }
            else {
                count.innerHTML = +count.innerHTML - 2;
            }
            flowers[id - 1] = count.innerHTML;
        }
        else if (count.innerHTML > 0) {
            count.innerHTML--;

            if (itemType === "candy") {
                candy[id - 1] = count.innerHTML;
            }
            else if (itemType === "perfume") {
                perfume[id - 1] = count.innerHTML;
            }
            else if (itemType === "lacoste") {
                lacoste[id - 1] = count.innerHTML;
            }
        }
    })
}

for (let listBtn of listBtns) {
    listBtn.addEventListener("click", () => {
        const itemsBlock = document.querySelector(".items__block#" + listBtn.id);
        const itemsBlockActive = document.querySelector(".items__block.open");

        if (itemsBlockActive && itemsBlockActive != itemsBlock) {
            itemsBlockActive.classList.remove("open");
        }
        itemsBlock.classList.toggle("open");
    })
}

strawberry.addEventListener("change", () => {
    strawberryCount = strawberry.value;
})

function sendBtnSettings() {
    candyText += "Сладости : ";
    for (let i = 0; i < candy.length; i++) {
        if (candy[i] > 0 && candy[i] < 10) {

            switch (i) {
                case 0:
                    candyText += "Чупа чупс - " + candy[i] + '.';
                    break;
                case 1:
                    candyText += "Альпенголд - " + candy[i] + '.';
                    break;
                case 2:
                    candyText += "Милка  - " + candy[i] + '.';
                    break;
                case 3:
                    candyText += "Рафаэло - " + candy[i] + '.';
                    break;
                case 4:
                    candyText += "Мармеладки - " + candy[i] + '.';
                    break;
                case 5:
                    candyText += "Киндер - " + candy[i] + '.';
                    break;
            }
        }
    }

    if (strawberryCount != 0 && strawberryCount < 102) {
        candyText += "Клубники в шоколаде - " + strawberryCount + '.';
    }

    perfumeText += "Духи : ";
    for (let i = 0; i < perfume.length; i++) {
        if (perfume[i] > 0 && perfume[i] < 11) {

            switch (i) {
                case 0:
                    perfumeText += "Miss Dior - " + perfume[i] + '.';
                    break;
                case 1:
                    perfumeText += "Chanel N5 - " + perfume[i] + '.';
                    break;
                case 2:
                    perfumeText += "Amor Amor  - " + perfume[i] + '.';
                    break;
                case 3:
                    perfumeText += "Lacoste pink - " + perfume[i] + '.';
                    break;
                case 4:
                    perfumeText += "Tom Ford Bitter Peach - " + perfume[i] + '.';
                    break;
                case 5:
                    perfumeText += "Baccarat - " + perfume[i] + '.';
                    break;
            }
        }
    }

    lacosteText += "Аксессуары Lacoste : ";
    for (let i = 0; i < lacoste.length; i++) {
        if (lacoste[i] > 0 && lacoste[i] < 11) {

            switch (i) {
                case 0:
                    lacosteText += "Сумки - " + lacoste[i] + '.';
                    break;
                case 1:
                    lacosteText += "Кошелёк - " + lacoste[i] + '.';
                    break;
                case 2:
                    lacosteText += "Шарф  - " + lacoste[i] + '.';
                    break;
            }
        }
    }

    flowersText += "Цветы : ";
    for (let i = 0; i < flowers.length; i++) {
        if (flowers[i] > 0 && flowers[i] < 11) {

            switch (i) {
                case 0:
                    flowersText += "Тюльпаны - " + flowers[i] + '.';
                    break;
                case 1:
                    flowersText += "Розы - " + flowers[i] + '.';
                    break;
            }
        }
    }

    tempText += candyText + perfumeText + lacosteText + flowersText;

    if (tempText.length > 50) {
        sendBtn.href = url + tempText;
    }
    else {
        alert("Вы ничего не выбрали!");
    }
}

function candyCheck(index, name) {
    if (candy[index] > 0 && candy[index] < 11) {
        candyText += name + " - " + candy[index] + '.';
    }
}

function perfumeCheck(index, name) {
    if (perfume[index] > 0 && perfume[index] < 11) {
        perfumeText += name + " - " + perfume[index] + '.';
    }
}

function lacosteCheck(index, name) {
    if (lacoste[index] > 0 && lacoste[index] < 11) {
        lacosteText += name + " - " + lacoste[index] + '.';
    }
}

function flowersCheck(index, name) {
    if (flowers[index] > 0 && flowers[index] < 22) {
        flowersText += name + " - " + flowers[index] + '.';
    }
}

function sendBtnTest() {
    let firstCandy = true;
    let firstPerfume = true;
    let firstLacoste = true;
    let firstFlowers = true;

    for (const value of candy) {
        if (value > 0 && value < 11 && firstCandy == true) {
            candyText += "Сладости : ";
            firstCandy = false;
        }
    }
    candyCheck(0, "Chupa Chups");
    candyCheck(1, "Alpen Gold");
    candyCheck(2, "Milka");
    candyCheck(3, "Raffaelo");
    candyCheck(4, "Marmalade");
    candyCheck(5, "Kinder");

    if (strawberryCount > 0 && strawberryCount < 102) {
        candyText += "Клубника в шоколаде - " + strawberryCount + '.';
    }

    for (const value of perfume) {
        if (value > 0 && value < 11 && firstPerfume == true) {
            perfumeText += "Духи : ";
            firstPerfume = false;
        }
    }
    perfumeCheck(0, "Miss Dior");
    perfumeCheck(1, "Chanel N5");
    perfumeCheck(2, "Amor Amor");
    perfumeCheck(3, "Lacoste pink");
    perfumeCheck(4, "Tom Ford Bitter Peach");
    perfumeCheck(5, "Baccarat");

    for (const value of lacoste) {
        if (value > 0 && value < 11 && firstLacoste == true) {
            lacosteText += "Аксессуары Lacoste : ";
            firstLacoste = false;
        }
    }
    lacosteCheck(0, "Сумки");
    lacosteCheck(1, "Кошелёк");
    lacosteCheck(2, "Шарф");

    for (const value of flowers) {
        if (value > 0 && value < 22 && firstFlowers == true) {
            flowersText += "Цветы : ";
            firstFlowers = false;
        }
    }
    flowersCheck(0, "Тюльпаны");
    flowersCheck(1, "Розы");
}

sendBtn.addEventListener("click", () => {
    sendBtnTest();
    tempText += candyText + perfumeText + lacosteText + flowersText;

    if (tempText.length > 3) {
        open(url + tempText);
    }
    else {
        alert("Вы ничего не выбрали!");
    }
    tempText = "";
    candyText = "";
    perfumeText = "";
    lacosteText = "";
    flowersText = "";
})
