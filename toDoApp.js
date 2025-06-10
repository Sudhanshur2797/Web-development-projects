let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("button");    // this is  used to give claa = delete to the new delete button.

    ul.appendChild(item);
    item.appendChild(delBtn);
    input.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for (let delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let parent = this.parentElement;    //Used to access the parent of the delBtn i.e. li
//         console.log(parent);
//         parent.remove();
//     });
// }
// The problem you must be facing here is whatever elements you are adding, you wouldnt be able to remove the new elements. Bcz ham jo eventListeners add krr rhe hain wo existing elements ke liye work krte hain.
// So in order to make the same for the newly added elements. There is property called EVENT DELEGATION. By the help of Event Bubbling.
// Since we have used the eventListener on the class. So in order to use the Event bubbling we will use eventListener on the parent i.e. ul or li.
ul.addEventListener("click", function(event){
    // console.log(event.target.nodeName);    // This will tell which part of ul has triggered the event.
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Delete :" );
    }
    console.log("Button clicked");
    
});
