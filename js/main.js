let nav = document.querySelector(".navbar");
Window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header_wrapper");

    } else {
        nav.classList.remove("header_wrapper");
    };
};