const SAMPLE_DIV = [
  {
    id: 1,
    title: "Login",
    description: " Go To Login Page ",
    subtext: "use email and password",
    picture: "./assets/images/login.jpg",
  },
  {
    id: 2,
    title: "Signup",
    description: " Signup To Get Full Access ",
    subtext: "use email , name , password and your birthday",
    picture: "./assets/images/signup.jpg",
  },
  {
    id: 3,
    title: "Blogs",
    description: " See Posts And Enjoy ",
    subtext: "Anything From Anywhere",
    picture: "./assets/images/blog.jpg",
  },
];

const list = document.querySelector("#blur");

list.innerHTML = `<ul class="blog-items d-flex flex-wrap justify-content-evenly align-items-center position-relative" >
<div id="shadow" class="none d-none "></div>
    ${SAMPLE_DIV.map((el) => {
      return `<li onmouseenter="hoverHandler(this.id)" onmouseleave="unhoverHandler(this.id)" onclick="gotoLogin()" id="list${el.id}"  class="blog-item hover">
        <button class="btn w-100 h-100 item-btn ">
          <div class="griding d-flex flex-column align-items-center">
            <img class="image" src="${el.picture}" alt="${el.subtext}">
            <h3>${el.title}</h3>
            <p>${el.description}</p>
            <sub>${el.subtext}</sub>
          </div>
        </button>
      </li>`;})}
    </ul>`;

const hoverable1 = document.querySelector("#list1");
const hoverable2 = document.querySelector("#list2");
const hoverable3 = document.querySelector("#list3");

const hoverHandler = (id) => {
  list.classList.add("full-page");
  const tempDiv = document.querySelector("#shadow");
  tempDiv.classList.add("c-blur-hover", "position-absolute", "full-page");
  tempDiv.classList.remove("d-none");

  const notVisible = document.querySelectorAll(`.blog-item:not(#${id})`);
  const visible = document.querySelector(`#${id}`);
  visible.classList.add("c-blur");
  notVisible[0].classList.add("z-index-after-hover");
  notVisible[1].classList.add("z-index-after-hover");
};

const unhoverHandler = (id) => {
  const tempDiv = document.querySelector("#shadow");
  tempDiv.classList.remove("c-blur-hover");
  tempDiv.classList.remove("position-absolute");
  tempDiv.classList.remove("full-page");
  tempDiv.classList.add("d-none");

  const notVisible = document.querySelectorAll(`.blog-item:not(#${id})`);
  const visible = document.querySelector(`#${id}`);
  visible.classList.remove("c-blur");
  notVisible[0].classList.remove("z-index-after-hover");
  notVisible[1].classList.remove("z-index-after-hover");

  notVisible[0].classList.add("c-blur");
  notVisible[1].classList.add("c-blur");
};



const phoneNum = document.querySelector('#mobile')
phoneNum.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(phoneNum.value)
  alert('number copied successfully!')
})

