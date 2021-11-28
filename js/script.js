$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots: true,
        initialSlide: 2,
        slidesToShow: 1,
        slidesToScroll: 1,
        centereMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        cssEase: 'linear',
        pauseOnFocuse: true,
        veriableWidth:true,
    });

    $('.cust__slider').slick({
        arrows:true,
        dots: false,
        initialSlide: 0,
        slidesToShow: 5,
        slidesToScroll: 1,
        centereMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        cssEase: 'linear',
        pauseOnFocuse: true,
        veriableWidth:true,
        mobileFirst:true,
        responsive: [
            {
                breakpoint: 1410,
                settings:{
                    slidesToShow: 5,
                    centereMode: true,
                    }
                },{
            breakpoint: 1023,
            settings:{
                slidesToShow: 3,
                centereMode: true,
                }
            },{
                breakpoint: 767,
                settings:{
                    slidesToShow: 3,
                    centereMode: true,
                    }
                },{
                breakpoint: 575,
                settings:{
                    slidesToShow: 2,
                    centereMode: true,
                    }
                },{
                    breakpoint: 320,
                    settings:{
                        slidesToShow: 1,
                        // centereMode: true,
                        }
                    },
        ],
    });
});

