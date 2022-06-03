const img = document.querySelector("#postImage");
const postBody = document.querySelector("#postBody");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const comment = document.querySelector("#comment");

const likeBtn = document.querySelector(".like-btn");
const dislikeBtn = document.querySelector(".dislike-btn");
const submitBtn = document.querySelector(".submit-btn");
const input = document.querySelector("#input");
const commentListed = document.querySelector(".comment-line");

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
const post = {
  id: 1,
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores animi ad cupiditate praesentium assumenda molestias, odio ea harum. Eum maxime porro blanditiis, explicabo alias eligendi inventore? Nobis qui doloremque impedit eveniet! Temporibus dolores et ipsam sequi cum cumque maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio animi quidem facere! Exercitationem nesciunt ipsam, enim velit non provident mollitia error incidunt, recusandae ea quibusdam, facere fuga temporibus debitis.",
  image: {
    src: "./istockphoto-1151169816-612x612.jpg",
    alt: "Decriptive Image",
  },
  likes: [],
  dislikes: [],
  comments: [],

};

const user = {
  id: 1,
  name: "Adebisi",
}; 


