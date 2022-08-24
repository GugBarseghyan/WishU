const header = document.querySelector("header");
const footer = document.querySelector("footer");
let menu = innerHTML = `
    <div class="menu">
        <a href="index.html">Home</a>
        <a href="work.html">Works</a>
    </div>`

header.innerHTML = `
    <h1>WishU</h1>
    <!-- <img src="" alt=""> -->
    ${menu}
    <div class="loginpt">
        <a href="#">Login</a>
        <a href="#">Sign In</a>
    </div>
`
footer.innerHTML = `
    <div class="menu">
        <h3>Menu</h3>
        ${menu}
    </div>
    <div class="social">
        <h3>Our social </h3>
        <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="#" target="_blank"><i class="fab fa-mastodon"></i></a>
    </div>
    <div class="loc">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1224.6897587153271!2d44.491090834428434!3d40.80824480789739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041bc0414c426b7%3A0xd4796df85ff750a4!2s80%20Myasnikyan%20St%2C%20Vanadzor%2C%20Armenia!5e0!3m2!1sen!2s!4v1648979152144!5m2!1sen!2s" width="300" height="150" style="border:0; border-radius: 10px; margin: 10px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
`

// header after scroll
window.addEventListener("scroll", () => {
    header.classList.toggle("changedheader", window.scrollY > 0)});