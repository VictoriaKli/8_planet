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

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

// let body = document.querySelector('body');
// if(isMobile.any()){
//     body.classList.add('touch');
//     let arrow=document.querySelectorAll('.arrow');
//     for(i=0; i<arrow.length;i++){
//         let thisLink=arrow[i].previousElementSibling;
//         let subMenu=arrow[i].nextElementSibling;
//         let thisArrow=arrow[i];

//         thisLink.classList.add('parent');
//         arrow[i].addEventListener('click', function(){
//             subMenu.classList.toggle('open');
//             thisArrow.classList.toggle('active');
//         })
//     }
// } else{
//     body.classList.add('mouse');
// }