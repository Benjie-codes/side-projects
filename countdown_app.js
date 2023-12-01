const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const currentYear = new Date().getFullYear()
const newTime = new Date(`December 7 ${currentYear} 00:00:00`)

function updateCountdowntime() {
    const currentTime = new Date()
    const diff = newTime - currentTime

    const d = Math.floor(diff / 1000 / 60 / 60 / 24)
    const h = Math.floor(diff / 1000 / 60 / 60) % 24
    const m = Math.floor(diff / 1000 / 60) % 60
    const s = Math.floor(diff / 1000 ) % 60

    days.innerHTML = d
    hours.innerHTML = h < 10 ? + h : h
    minutes.innerHTML = m < 10 ? + m : m
    seconds.innerHTML = s
}
setInterval(updateCountdowntime, 1000)