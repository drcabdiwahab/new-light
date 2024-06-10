const x = document.querySelector(".x")

x && (x.onclick = () => document.querySelector("nav").classList.toggle("db"))

document.querySelectorAll("a").forEach(a => a.onclick = e => {
  e.preventDefault()
  sessionStorage.setItem("price", e.target?.parentElement.querySelector("p").textContent)
  location.href = e.target.parentElement.getAttribute("href")
})

const p = document.querySelector(".buy p + p")
const prce = sessionStorage.getItem("price")
if (prce && p) {
  const [discount, price] = prce.split(" ")
  p.innerHTML = `${price} <s>${discount}</s>`;
}

document.onload = () => {
  // if(location.pathname.includes([])
  const l = location.pathname.split("/").filter(l => l.trim() !== "")
  if(["school", "buy", "index"].includes(l[l.length-1]) == false) {
    location = "/404"
  }
}
