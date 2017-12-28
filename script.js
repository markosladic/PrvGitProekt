let ulTag = document.getElementById("lista");

let person = {
    name: "Marko",
    lastName: "Sladic",
    age: 44,
    phones: ["071546879", "071568495", "070355161"]
};

for (let i=0; i<person.phones.length; i=i+1) {
    let newLi = document.createElement("li");
    newLi.innerHTML = person.phones[i];
    ulTag.appendChild(newLi);
};
