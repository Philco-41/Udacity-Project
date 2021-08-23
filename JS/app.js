/* creating nav links titles and pass them to nav links*/
const ulArr = ["Movies", "Tv Shows", "Cartoon", "Series"]

/* creating ids for nav links */
const linkIds = ["link1", "link2", "link3", "link4"]

const uLEl = document.getElementById("ulEl")
const menuEl = document.getElementById("menuBtn")
const buttonEl1 = document.getElementById("btn1")
const buttonEl2 = document.getElementById("btn2")
const buttonEl3 = document.getElementById("btn3")
const buttonEl4 = document.getElementById("btn4")
const wrapperEL1 = document.getElementById("wrapper1")
const wrapperEL2 = document.getElementById("wrapper2")
const wrapperEL3 = document.getElementById("wrapper3")
const wrapperEL4 = document.getElementById("wrapper4")


/* creating nav links with ids and assigning section ids to href */
let ulList = ""
for (let i = 0; i < ulArr.length; i++) {
    ulList +=
        `<li> 
                <a id="${linkIds[i]}">
                ${ulArr[i]}
                </a>
        </li>`
}
uLEl.innerHTML = ulList

const linkEl1 = document.getElementById("link1")
const linkEl2 = document.getElementById("link2")
const linkEl3 = document.getElementById("link3")
const linkEl4 = document.getElementById("link4")

/* highlight nav items while scroll on different screen sizes */
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= wrapperEL1.offsetTop && window.pageYOffset < wrapperEL1.offsetTop + wrapperEL1.offsetHeight - 100) {
        linkEl1.classList.add("active")
    } else if (window.pageYOffset >= wrapperEL2.offsetTop && window.pageYOffset < wrapperEL2.offsetTop + wrapperEL2.offsetHeight - 100) {
        linkEl2.classList.add("active")
    } else if (window.pageYOffset >= wrapperEL3.offsetTop && window.pageYOffset < wrapperEL3.offsetTop + wrapperEL3.offsetHeight - 100) {
        linkEl3.classList.add("active")
    } else if (window.pageYOffset >= wrapperEL4.offsetTop && window.pageYOffset < wrapperEL4.offsetTop + wrapperEL4.offsetHeight) {
        linkEl4.classList.add("active")
    } else {
        linkEl1.classList.remove("active")
        linkEl2.classList.remove("active")
        linkEl3.classList.remove("active")
        linkEl4.classList.remove("active")
    }
})

/* expand menu items on small screens */
menuEl.addEventListener("click", () => {
    uLEl.classList.toggle("render")
})
/* listining to clicks on buttons to collapse and expand content below each button */
buttonEl1.addEventListener("click", () => {
    document.getElementById("sec1").classList.toggle("hide")
})
buttonEl2.addEventListener("click", () => {
    document.getElementById("sec2").classList.toggle("hide")
})
buttonEl3.addEventListener("click", () => {
    document.getElementById("sec3").classList.toggle("hide")
})
buttonEl4.addEventListener("click", () => {
    document.getElementById("sec4").classList.toggle("hide")
})

/* listining to clicks on nav links for quick navigation using scrollIntoView*/
linkEl1.addEventListener("click", () => {
    wrapperEL1.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

linkEl2.addEventListener("click", () => {
    wrapperEL2.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

linkEl3.addEventListener("click", () => {
    wrapperEL3.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

linkEl4.addEventListener("click", () => {
    wrapperEL4.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})