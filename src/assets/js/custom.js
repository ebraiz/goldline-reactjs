    /*Slider scroller with mouse code*/
    $(".carousel").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: "vertical" 
    });

    /*Search bar plugin for desktop*/
    var sp = document.querySelector('.search-open');
    var searchbar = document.querySelector('.search-inline');
    var shclose = document.querySelector('.search-close');
    function changeClass() {
        searchbar.classList.add('search-visible');
    }
    function closesearch() {
        searchbar.classList.remove('search-visible');
    }
    sp.addEventListener('click', changeClass);
    shclose.addEventListener('click', closesearch);

    /*Search bar plugin for mobile*/
    var sp1 = document.querySelector('.search-open1');
    var searchbar1 = document.querySelector('.search-inline1');
    var shclose1 = document.querySelector('.search-close1');
    function changeClass() {
        searchbar1.classList.add('search-visible1');
    }
    function closesearch() {
        searchbar1.classList.remove('search-visible1');
    }
    sp1.addEventListener('click', changeClass);
    shclose1.addEventListener('click', closesearch);

    /*Index page, section 1, button handling on responsive*/
    $(".navbar-toggle").click(function(){
        $(".btn-brograd3").toggle();
    });