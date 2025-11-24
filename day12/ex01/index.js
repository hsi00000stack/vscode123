export default async function Main() {
    console.log('hello js')
    
    let currentIndex = 0;
    const menuItems = document.querySelectorAll(".menu-item");

    console.log(menuItems)

    menuItems[currentIndex].classList.add("select")

    window.addEventListener("keydown", (e) => {
    
        console.log(e.key)

        menuItems [currentIndex].classList.remove("select")

        if (e.key == "ArrowUp") {
            currentIndex--
            if(currentIndex < 0) {
                currentIndex = 3
            }
        
        }
        else if(e.key == "ArrowDown") {
            currentIndex++
            currentIndex %=4
        }
        console.log(currentIndex)
            
})
    




     
}