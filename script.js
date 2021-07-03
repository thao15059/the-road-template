document.querySelectorAll(".navigation-button").forEach((item) => {
  item.onclick = () => {
    console.log(item)
    item.parentElement.parentElement.classList.toggle('change')
  }
})