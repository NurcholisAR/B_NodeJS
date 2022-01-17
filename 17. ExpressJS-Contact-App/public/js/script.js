const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibilty = primaryNav.getAttribute("data-visible");
    if (visibilty === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibilty === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

$(function () {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $(".link").click(function () {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html,body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000
                ); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });
});

$(document).ready(function () {
    $("a.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
        .closest("a")
        .addClass("active");
});

// Preloader
$(window).on("load", function () {
    setTimeout(function () {
        $(".preloader").fadeOut(600);
    }, 500);
});
