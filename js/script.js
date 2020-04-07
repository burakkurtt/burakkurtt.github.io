$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $("nav ul").toggleClass("active");
})

// jQuery Smooth Scroll
$('nav a').on('click', function(e) {
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );        
    };
});