const x = document.querySelector(".x")

x && (x.onclick = () => document.querySelector("nav").classList.toggle("db"))

document.querySelectorAll("a").forEach(a =>a.onclick = e => {
  e.preventDefault()
  sessionStorage.setItem("price", e.target.parentElement.querySelector("p").textContent)
  location.href = e.target.parentElement.getAttribute("href")
})

if (sessionStorage.getItem("price")) {
  const [discount, price] = sessionStorage.getItem("price").split(" ")
  document.querySelector(".buy p + p").innerHTML = `${price} <s>${discount}</s>`;
}
