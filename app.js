let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")

console.log(btns)

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const order = e.currentTarget.classList;
        if (order.contains("decrease")) {
            count--
        } else if (order.contains("increase")) {
            count++
        } else {
            count = 0;
        }
        value.textContent = count
    })
})