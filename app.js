const likeBtn = document.querySelector(".like-btn");
const dislikeBtn = document.querySelector(".dislike-btn");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const commentBtn = document.querySelector(".comment-btn");
const commentCounter = document.getElementById("comment");
const form = document.querySelector("form");
const input = document.getElementById("input");
const commentListed = document.querySelector(".comment-line");
const getDate = document.querySelector(".date");
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let count = 0
let disliking = 0
let commentArr = []
isEdit = false;
// Adding event listener to the like btn
likeBtn.addEventListener("click", like)
// Adding event listener to the dislike btn
dislikeBtn.addEventListener("click", dislike)
// Adding event listener to the comment btn
commentBtn.addEventListener("click", comment)
// Adding functionality to the like btn
function like(){
 count++
 increase.textContent = count;
}
// Adding functionality to the dislike btn
function dislike(){
 disliking++
 decrease.textContent = disliking;
}

const getCurrentDate = () => {
    // Getting the date and year dynamically
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    let month = currentDate.getMonth();
    month = months[month];
    const date = currentDate.getDate();
    const weekday = weekdays[currentDate.getDay()];

    return {weekday, date, month, hours, minutes, year}
}



// Adding functionality to the form
form.addEventListener("click", inputComment)
function inputComment(e){
 e.preventDefault()
 const value = input.value
 if(value.trim() && !isEdit){
  let commenting = {
    id: new Date().getTime().toString(),
    body: value,
    name: "Adebisi",
    ...getCurrentDate()
  };
  
  commentArr.unshift(commenting);
  input.value = "";
  console.log(commentArr)
  renderToScreen()
 }
 
}

// Adding functionality that renders screen
function renderToScreen(){
    

    if (commentArr.length) {
        commentOnScreen = "";
        
        // let comments = [{}]
        for (let i = 0; i < commentArr.length; i++) {
            commentOnScreen += `<h4 class="user">${commentArr[i].name}<span class="date"><i class="fas fa-circle"></i>${commentArr[i].weekday}, ${commentArr[i].date} ${commentArr[i].month} ${commentArr[i].year} ${commentArr[i].hours}:${commentArr[i].minutes}pm</span></h4>
   <p class="user-comment">${commentArr[i].body}</p>`;
        }
        
        
        console.log(commentOnScreen);
        commentListed.innerHTML = commentOnScreen;
        commentCounter.innerHTML = commentArr.length;
    }
}

