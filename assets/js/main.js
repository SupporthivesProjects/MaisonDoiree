$(document).ready(function () {
    $(".hamburger_menu").click(function () {
        $(".header_mobo_main_slide").fadeIn("slow");
        $(".hamburger_menu").fadeOut("slow");
        $(".hamburger_menu_close").fadeIn("slow");
        $(".header_cart_mobo_main_slide").fadeOut("slow");
    });
    $(".hamburger_menu_close").click(function () {

        if ($(".header_cart_mobo_main_slide").css("display") != "none") {
            $(".header_cart_mobo_main_slide").fadeOut("slow");
            $(".hamburger_menu").fadeIn("slow");
            $(".hamburger_menu_close").fadeOut("slow");
        } else {
            $(".hamburger_menu").fadeIn("slow");
            $(".header_mobo_main_slide").fadeOut("slow");
            $(".hamburger_menu_close").fadeOut("slow");
        }
    });
    $(".cart_menu").click(function () {
        $(".header_cart_mobo_main_slide").fadeIn("slow");
        $(".header_mobo_main_slide").fadeOut("slow");
        $(".hamburger_menu_close").fadeIn("slow");
        $(".hamburger_menu").fadeOut("slow");
    });
});

function closeMobileCart() {
    $(".header_cart_mobo_main_slide").fadeOut("slow");
    $(".hamburger_menu_close").fadeOut("slow");
    $(".hamburger_menu").fadeIn("slow");
}

function justDrop(droperId, roterId, element) {
    const theId = document.getElementById(droperId);
    const theId2 = document.getElementById(roterId);


    if (theId.classList.contains('d-none')) {
        theId.classList.remove('d-none');
        element.classList.add("active")
        theId2.style.rotate = '180deg';
    } else {
        theId.classList.add('d-none');
        element.classList.remove("active")
        theId2.style.rotate = '0deg';
    }
}


function field_box_file() {
    console.log('me');
    document.getElementById('document').click();
}
$("#document").on("change", function (e) {
    document.getElementById('upload_placeholder').innerHTML = e.target.files[0].name;
})


function togglePassword(input_id, input_eye_image) {
    const inputField = document.getElementById(input_id);
    const inputFieldType = inputField.getAttribute('type');
    if (inputFieldType === "password") {
        inputField.setAttribute('type', 'text');
        input_eye_image.src = "./assets/img/open_eye.svg"
    } else {
        inputField.setAttribute('type', 'password');
        input_eye_image.src = "./assets/img/close_eye.svg"
    }
}


$(document).ready(function () {
    $('#hs3').owlCarousel({
        loop:false,
        margin: 24,
        nav:false,
        dots: false,
        responsive:{
            0:{
                loop: true,
                items:1.2,
                nav: true,
                dots: true,
                dotsEach: 1,
                navText: [
                    "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='27' viewBox='0 0 16 27' fill='none'><path d='M13.3135 24.627L1.99977 13.3132L13.3135 1.99954' stroke='#BA8B4A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg></span>",
                    "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='27' viewBox='0 0 16 27' fill='none'><path d='M2.68652 2L14.0002 13.3137L2.68652 24.6274' stroke='#BA8B4A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg></span>"
                ],
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1600:{
                items:5
            }
        }
    });

    $('#hs5').owlCarousel({
        loop:false,
        margin: 24,
        nav:false,
        dots: false,
        responsive:{
            0:{
                loop: true,
                items:1.2,
                nav: true,
                dots: true,
                dotsEach: 1,
                navText: [
                    "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='27' viewBox='0 0 16 27' fill='none'><path d='M13.3135 24.627L1.99977 13.3132L13.3135 1.99954' stroke='#BA8B4A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg></span>",
                    "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='27' viewBox='0 0 16 27' fill='none'><path d='M2.68652 2L14.0002 13.3137L2.68652 24.6274' stroke='#BA8B4A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg></span>"
                ],
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1600:{
                items:5
            }
        }
    })
})

function addQty(inp_id) {
    const x = document.getElementById(inp_id);
    let currentValue = parseInt(x.value) || 0;
    if (currentValue < 9) {
        x.value = currentValue + 1;
    }
    
}
function subQty(inp_id) {
    const x = document.getElementById(inp_id);
    let currentValue = parseInt(x.value) || 0;
    if (currentValue > 1) {
        x.value = currentValue - 1;
    }
}

function showFilterDrop(el) {
    const initial = document.getElementById('initial');
    const extecial = document.getElementById('extecial');
    const pls2_l_main = document.querySelector('.pls2_l_main');

    if (initial.classList.contains('d-none')) {
        initial.classList.remove('d-none');
        extecial.classList.add('d-none');
        pls2_l_main.style.display = 'none';
        el.style.top = '0px';
    } else {
        extecial.classList.remove('d-none');
        initial.classList.add('d-none');
        pls2_l_main.style.display = 'flex';
        el.style.top = '16px';
    }
}


// $(document).ready(function () {
//     $(window).on('scroll', function () {
//         const scrollTop = window.scrollY;
//         if (scrollTop >= 90) {
//             $("#header").css("background", "#162222")
//         } else {
//             $("#header").css("background", "transparent")
//         }
//     });
// });

function dash_drop_mob(drp_div_id, rote_id, text_name, img_num, el) {
    const a = document.getElementById(drp_div_id);
    const b = document.getElementById(rote_id);
    const c = document.getElementById("dash_drop_lt_text");
    const d = document.getElementById("dash_drop_lt_im");
    const img_path = "./assets/img/ddic";

    if (a.classList.contains('d-none')) {
        a.classList.remove('d-none');
        b.style.rotate = "180deg";
    } else {
        a.classList.add('d-none');
        b.style.rotate = "0deg";

        if (typeof text_name !== "undefined") {
            c.innerText = text_name;
        }

        if (typeof img_num !== "undefined") {
            d.src = `${img_path}${img_num}.svg`;
        }

        document.querySelectorAll('.btn_dash_drop_inner').forEach(btn => {
            btn.classList.remove("active");
        });
        if (el) {
            el.classList.add("active");
        }
    }
}


const card1 = document.getElementById("hs1_cim1");
const card2 = document.getElementById("hs1_cim2");
const card3 = document.getElementById("hs1_cim3");

document.addEventListener("mousemove", (event) => {
  const centerX = window.innerWidth / 2;

  // Get horizontal distance from center, range -1 (left) to +1 (right)
  const percentX = (event.clientX - centerX) / centerX;

  // Clamp and scale to max ±18 degrees
  const rotateZ = Math.max(-1, Math.min(1, percentX)) * 4;

  card1.style.transform = `rotate(${rotateZ}deg)`;
  card2.style.transform = `rotate(${rotateZ}deg)`;
  card3.style.transform = `rotate(${rotateZ}deg)`;

  console.log(`rotateZ: ${rotateZ.toFixed(2)}°`);
});