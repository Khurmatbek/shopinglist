var elForm = document.querySelector(".shoping__form");
var elInput = document.querySelector(".shoping__text");
var elNumber = document.querySelector(".shoping__number");
var elList = document.querySelector(".shoping__list");
var elButtonremove = document.querySelector(".shoping__remove");
console.log(elList);
var array = [
    {
        number: 10,
        text: "olma",
    }
]
var myFuntion = function () {
    elList.innerHTML= "";   
    array.forEach(element => {
        var item = document.createElement("li");
        item.classList.add("shoping__item");
        var num = document.createElement("span");
        num.classList.add("shoping__coun");
        var text = document.createElement("p");
        text.classList.add("shoping__desc");
        var btn=document.createElement("button");
        btn.classList.add("shoping__remove");
        item.append(num, text ,btn);
        num.textContent = element.number;
        text.textContent= element.text;
        btn.innerHTML=`x`
        elList.appendChild(item);
      
    });
}
myFuntion(array);

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    elInputValue = elInput.value;
    elNumberValue = elNumber.value;
    var objnew = {
      number:elNumberValue,
      text:elInputValue,
    }

    array.push(objnew);
    myFuntion(array);
})