/* preloader */

$(window).on('load', function() {
	/*------------------
	Preloader
	--------------------*/
	$(".loader").fadeOut();
	$("#preloader").delay(200).fadeOut("slow");
});

/* topnavbar */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

  document.getElementById("topnavbar").style.boxShadow = "0 0 15px 0 rgba(0,0,0,.15)";
  
  } else {

  document.getElementById("topnavbar").style.boxShadow = "none";
  
  }

}

/* select language */

$("#select-field").select2({
	templateResult: formatState,
	minimumResultsForSearch: Infinity,
	templateSelection: formatState
});

function formatState (opt) {
if (!opt.id) {
	return opt.text.toUpperCase();
} 

var optimage = $(opt.element).attr('data-image'); 

if(!optimage){
   return opt.text.toUpperCase();
} else {                    
	var $opt = $(
	   '<span><img src="' + optimage + '" width="15px" /> ' + opt.text.toUpperCase() + '</span>'
	);
	return $opt;
}
};

/* Swiper */

var swiper = new Swiper(".topslider", {
	direction: "horizontal",
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination1',
		type: 'bullets',
		dynamicBullets: true,
		clickable: true,
	},
	navigation: {
	   nextEl: '.swiper-button-next',
	   prevEl: '.swiper-button-prev',
	 },
	spaceBetween: 0,
	speed: 1500,
	parallax: !0,
	autoplay:{
	   delay:3000
	 },
	loop: !0,
});

   var swiper = new Swiper(".swipernewproduct", {
     loop: false,
     speed:800,
     autoplay:{
       delay:3000
     },
     loopAdditionalSlides: 1,
     grabCursor: true,
     slidesPerView: 4,
     centeredSlides: false,
     spaceBetween: 50,
     pagination: {
       el: '.swiper-pagination1',
       dynamicBullets: true,
       clickable: true,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    1191: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    765: {
      slidesPerView: 1,
      spaceBetween: 30
    },
  }
   });
   
   
   var swiper = new Swiper(".swiperpopularproduct", {
     loop: false,
     speed:800,
     autoplay:{
       delay:3000
     },
     loopAdditionalSlides: 1,
     grabCursor: true,
     slidesPerView: 3,
	 slidesPerColumn: 2,
     centeredSlides: false,
     spaceBetween: 50,
     pagination: {
       el: '.swiper-pagination1',
       dynamicBullets: true,
       clickable: true,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    1191: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    765: {
      slidesPerView: 1,
      spaceBetween: 30
    },
  }
   });
   
 

/* cookiealert */

   (function () {
       "use strict";

       var cookieAlert = document.querySelector(".cookiealert");
       var acceptCookies = document.querySelector(".acceptcookies");

       if (!cookieAlert) {
          return;
       }

       cookieAlert.offsetHeight;

       // Show the alert if we cant find the "acceptCookies" cookie
       if (!getCookie("acceptCookies")) {
           cookieAlert.classList.add("show");
       }

       // When clicking on the agree button, create a 1 year
       // cookie to remember user's choice and close the banner
       acceptCookies.addEventListener("click", function () {
           setCookie("acceptCookies", true, 365);
           cookieAlert.classList.remove("show");
       });

       // Cookie functions
       function setCookie(cname, cvalue, exdays) {
           var d = new Date();
           d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
           var expires = "expires=" + d.toUTCString();
           document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
       }

       function getCookie(cname) {
           var name = cname + "=";
           var decodedCookie = decodeURIComponent(document.cookie);
           var ca = decodedCookie.split(';');
           for (var i = 0; i < ca.length; i++) {
               var c = ca[i];
               while (c.charAt(0) === ' ') {
                   c = c.substring(1);
               }
               if (c.indexOf(name) === 0) {
                   return c.substring(name.length, c.length);
               }
           }
           return "";
       }
   })();
    
/* input field */

(function() {
	// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}

	[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
		if( inputEl.value.trim() !== '' ) {
			classie.add( inputEl.parentNode, 'input--filled' );
		}

		// events:
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );
	
	[].slice.call( document.querySelectorAll( 'textarea.input__field' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
		if( inputEl.value.trim() !== '' ) {
			classie.add( inputEl.parentNode, 'input--filled' );
		}

		// events:
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );

	function onInputFocus( ev ) {
		classie.add( ev.target.parentNode, 'input--filled' );
	}

	function onInputBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input--filled' );
		}
	}
})();
			
/* AOS	 */

AOS.init({
	easing: 'ease-in-out-sine'
});

/* contactForm */

$(document).ready(function(){
$("#contactForm").on("submit",function(e){
  e.preventDefault();

  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  if(name == "") {
	  $("#danger").text("Name is required");
	  $(".danger").show();
  }else if (email == "") {
	  $("#danger").text("Email is required");
	  $(".danger").show();
  }else if (subject == "") {
	  $("#danger").text("Subject is required");
	  $(".danger").show();
  }else if (message == "") {
	  $("#danger").text("Message is required");
	  $(".danger").show();
  }else{
	$.ajax({
	  url  : "send_email.php",
	  type : "POST",
	  cache:false,
	  data :{name:name,email:email,subject:subject,message:message},
	  success:function(response){
		  
	//  window.location.reload(true); 	  

   // setInterval('location.reload()', 3000);
	
	
	window.scrollTo({top: 0, behavior: 'smooth'});	

	setTimeout(function(){
		$("#success").text("Contact form submitted successfully");
		$(".success").show();
		$(".danger").hide();
		$("#contactForm").trigger('reset');
	}, 1500); 
	
	 
	  }
	});
  }
});

$(".btnclosenotifsuccess").click(function(){
window.location.reload(true); 
});
		
});
		  
/* datetimepicker */

$('.datetimepicker').datetimepicker(
{
defaultDate: new Date(),
format: 'DD/MM/YYYY ',
/* format: 'DD/MM/YYYY hh:mm A', */

});

$('.datepicker').datetimepicker(
{
format: 'DD/MM/YYYY ',
/* format: 'DD/MM/YYYY hh:mm A', */

});

/* compact-gallery */

baguetteBox.run('.compact-gallery', { animation: 'fadeIn'});

/* checkoutcity */

$( '#checkoutcity' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* checkoutcounty */

$( '#checkoutcounty' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* checkoutcityBilling */

$( '#checkoutcityBilling' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* checkoutcountyBilling */

$( '#checkoutcountyBilling' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* checkoutcityShipping */

$( '#checkoutcityShipping' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* checkoutcountyShipping */

$( '#checkoutcountyShipping' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );


/* topnavbar scroll Up /Down */

var bodymo = document.body;
const menuOpen = "menuopen";

$('#topnavbar .navbar-toggler').on('click', function(){
	classie.toggle(bodymo, menuOpen);
});

const bodynav = document.body;
const triggerMenu = document.getElementById("topnavbar");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;



window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
	bodynav.classList.remove(scrollUp);
	return;
  }
  
  if (currentScroll > lastScroll && !bodynav.classList.contains(scrollDown)) {
	// down
	bodynav.classList.remove(scrollUp);
	bodynav.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && bodynav.classList.contains(scrollDown)) {
	// up
	bodynav.classList.remove(scrollDown);
	bodynav.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});


/* backtotop */

$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$(".backtotop").fadeIn();
	} else {
		$(".backtotop").fadeOut();
	}
});

/* $(".backtotop").click(function() {
	$("html, body").animate({scrollTop: 0}, 500);
	return false;
}); */



/* search */

(function(window) {

	'use strict';

	var openCtrl = document.getElementById('btn-ch-search'),
		closeCtrl = document.getElementById('btn-ch-search-close'),
		searchContainer = document.querySelector('.ch-search'),
		inputSearch = searchContainer.querySelector('.ch-search__input');

	function init() {
		initEvents();	
	}

	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}
		});
	}

	function openSearch() {
		searchContainer.classList.add('ch-search--open');
		inputSearch.focus();
	}

	function closeSearch() {
		searchContainer.classList.remove('ch-search--open');
		inputSearch.blur();
		inputSearch.value = '';
	}

	init();

})(window);

/* Add To Wishlist  */

$(document).ready(function(){
  $(".wishlist-btn").click(function(){
    $(".wishlistdef").toggleClass("wishlist-compare-active");

	if ($(".wishlistdef").hasClass("wishlist-compare-active")) {
			$(function() {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				timer: 3000
			});

			Toast.fire({
				icon: 'success',
				title: ' Product added to Wishlist '
			})

			});
	}else {
		$(function() {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				timer: 3000
			});

			Toast.fire({
				icon: 'warning',
				title: ' Product removed from Wishlist '
			})

			});
	}

  });
  $(".compare-btn").click(function(){
    $(".comparedef").toggleClass("wishlist-compare-active");
	
	if ($(".comparedef").hasClass("wishlist-compare-active")) {
			$(function() {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				timer: 3000
			});

			Toast.fire({
				icon: 'success',
				title: ' Product added to Comparison list '
			})

			});
	}else {
		$(function() {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				timer: 3000
			});

			Toast.fire({
				icon: 'warning',
				title: ' Product removed from Comparison list '
			})

			});
	}
	
  });
});

/* Add To Wishlist  */

$(document).ready(function(){
  $("#BillingDelivery").click(function(){
    $( ".billing-details-cont" ).toggle( 300 );
  });
  
});

/* item in cart */


$(".color").click(function(){
      var val = $(".color:checked").val();
    });

    let products = [
	<!-- appetizers -->
	{
    id: 1,
    title: "Nike Air Zoom Terra Kiger 7",
    image: 'assets/img/products/thumbnail/nike/nike-1.jpg',
	price: 140.00,

  },
  	{
    id: 2,
    title: "Adidas Solarglide 5 Laufschuh",
    image: 'assets/img/products/adidas-solarglide-5-laufschuh.png',
	price: 180.00,
  },

	];


    function toShow(x){
       
        x.map(product=> {

        })
    }

    function cartTotal(){

        let count = $(".item-in-cart-cost").length;

        $(".item-in-cart-count").html(count);


        if(count>0){
            let totalCost = $(".item-in-cart-cost").toArray().map(el=>el.innerHTML).reduce((x,y)=>Number(x)+Number(y));
            // console.log(typeof totalCost);
			
			const child = document.getElementsByClassName("total");
            const directParentHasClassCart = child.parentElement?.classList.contains('cartmodal');
			const directParentHasClassCheckout = child.parentElement?.classList.contains('checkoutmodal');
			
			if ($(".total").parents().hasClass('cartmodal')) {
			$(".total").html(`

					
					
					<div class="text-center text-md-end">
						<h4 class="addeditems-total">Total $<span class="cart-cost-total">${Number(totalCost).toFixed(2)}</span></h4>
					</div>
				
						

            `)
			}
			if ($(".totaltwo").parents().hasClass('checkoutmodal')) {
			
			$(".totaltwo").html(`

                <div class="d-flex justify-content-between font-weight-bold px-3">
                    <h4 class="addeditems-total">Total</h4>
                    <h4 class="addeditems-total">$<span id="totalPrice" data-name="totalPrice" class="cart-cost-total">${Number(totalCost).toFixed(2)}</span></h4>
                </div>
				
				<div class="justify-content-between font-weight-bold px-3 text-center text-md-start">
				   <button name="sendorder" type="submit" class="btn btn-outline-grey cart-checkout "><i class="fas fa-share-square"></i> Place Order </button>
                </div>
				
				

            `)
			
			}
			

        }else{
            $(".total").html("empty cart")
        }

    }


    $("#products").delegate(".add-to-cart","click",function () {
        let currentItemId = $(this).attr("data-id");

        let productInfo = products.filter(el=>el.id == currentItemId)[0];

        if($(".item-in-cart").toArray().map(el=>el.getAttribute("data-id")).includes(currentItemId)){

        <!--  alert("Already Added") -->
		<!-- sweetalert - already added -->
		
		$(function() {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top',
			showConfirmButton: false,
			timer: 3000
		});

		Toast.fire({
			icon: 'warning',
			title: ' Already Added '
		})

		});
		
		<!-- end sweetalert - already added -->

        }else{
		
	    <!-- sweetalert - add to cart -->
		
		$(function() {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top',
			showConfirmButton: false,
			timer: 3000
		});

		Toast.fire({
			icon: 'success',
			title: ' Product added successfully '
		})

		});
		
		<!-- end sweetalert - add to cart -->
		
		var var_color = $("input[name='color']:checked").val(); 
		var var_size  = $("input[name='size']:checked").val(); 

            $("#cart").append(`
        <div class="card border-0 rounded-0 item-in-cart" data-id="${productInfo.id}">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-end">
                    <img src="${productInfo.image}" class="img-in-cart" alt="">
                    <button class="btn btn-outline-danger remove-from-cart" data-id="${productInfo.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
                <p class="addeditems-title mt-3">
                    ${productInfo.title}, Color: ${var_color}, Size: ${var_size}
                </p>
				
                <div class="d-flex justify-content-between align-items-end">
                    <div class="form-row">
                        <button class="btn btn-outline-grey quantity-minus">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input id="quantityOne" type="number" class="addeditems-form form-control w-25 mx-2 quantity" data-unitPrice="${productInfo.price}" value="1" min="1">
                        <button class="btn btn-outline-grey quantity-plus">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <p class="addeditems-price mb-0">$<span class="item-in-cart-cost">${productInfo.price}</span></p>
                </div>
                <hr>
            </div>
        </div>
        `);
		
		   
		   <!-- checkout -->
		   
		  

        }

        cartTotal();

    })
	
		

    $("#cart").delegate(".remove-from-cart","click",function () {

        $(this).parentsUntil("#cart").remove();
		var checkid = $(this).data("id");
		
		var ccc = document.getElementsByClassName("check");
        for (var i = 0; i < ccc.length; i++) {

		if ($(this).data("id") == ccc[i].id) {
				$(".check.card[data-id='"+checkid+"']").remove();
				cartTotal();
			}

        <!-- alert(ccc[i].id); -->
      }
		
		
	if ($(this).data("id") == $("#checkout").find(".check.card").data("id")) {
        $(".check.card[data-id='"+checkid+"']").remove();
		cartTotal();
    }
       
		

        cartTotal();

    })

    $("#cart").delegate(".quantity-plus","click",function () {

        let q =$(this).siblings(".quantity").val();
        let p = $(this).siblings(".quantity").attr("data-unitPrice");
        let newQ = Number(q)+1;
        let newCost = p * newQ;
        // console.log(p);
        $(this).siblings(".quantity").val(newQ);
        $(this).parent().parent().siblings("td").children("p").find(".item-in-cart-cost").html(newCost.toFixed(2));	
		
        cartTotal();
    })

    $("#cart").delegate(".quantity-minus","click",function () {

        let q =$(this).siblings(".quantity").val();
        let p = $(this).siblings(".quantity").attr("data-unitPrice");
        if(q>1){

            let newQ = Number(q)-1;
            let newCost = p * newQ;
            // console.log(p);
            $(this).siblings(".quantity").val(newQ);
            $(this).parent().parent().siblings("td").children("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
			
            cartTotal();

        }

    })

    $("#cart").delegate(".quantity","keyup change",function () {

        let q =$(this).val();
        let p = $(this).attr("data-unitPrice");
        if(q>1){

            let newQ = Number(q);
            let newCost = p * newQ;
            // console.log(p);
            $(this).val(newQ);
            $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
			
			$("#quantityTwo").val(newQ);
			
            cartTotal();

        }else{
		
        <!--  alert("More Than One"); -->
			
		<!-- sweetalert - more than one -->
		
		$(function() {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top',
			showConfirmButton: false,
			timer: 3000
		});

		Toast.fire({
			icon: 'error',
			title: ' More Than One '
		})

		});
		
		<!-- end sweetalert - more than one -->
        }

    })
	
	
	
	$(".remove-from-cart").click(function(){
		var checkid = $(this).data("id");
	    $(this).parentsUntil("#products").remove();
		$(".item-in-cart[data-id='"+checkid+"']").remove();
       cartTotal();
		     
	});
	
 
	$(".remove-from-wishlist").click(function(){
		var countWN = $(".wishlist-count-num");
		var wishlistcountnum = countWN.text();
		
        wishlistcountnum--;
        countWN.text(wishlistcountnum);
       
	    $(this).parentsUntil("#products").remove();
		     
	});

	
	/* remove compare */
	
		var countCN = $(".compare-count-num");
		var comparecountnum = countCN.text();
	
	$(".remove-from-compare-one").click(function(){
	   document.querySelectorAll(".compare-remove-one").forEach(e => e.remove());      
	   comparecountnum--;
       countCN.text(comparecountnum);	
	});
	
	$(".remove-from-compare-two").click(function(){
	   document.querySelectorAll(".compare-remove-two").forEach(e => e.remove());      
	   comparecountnum--;
       countCN.text(comparecountnum);	
	});
	
	$(".remove-from-compare-three").click(function(){
	   document.querySelectorAll(".compare-remove-three").forEach(e => e.remove());      
	   comparecountnum--;
       countCN.text(comparecountnum);	
	});
	
	
/* submitOrder */

$(document).ready(function(){
$("#submitOrder").on("submit",function(e){
  e.preventDefault();

	var checkoutname = $("#checkoutname").val();
	var checkoutsurname = $("#checkoutsurname").val();
	var checkoutcounty = $("#checkoutcounty").val();
	var checkoutcity = $("#checkoutcity").val();
	var checkoutzip = $("#checkoutzip").val();
	var checkoutsuraddress = $("#checkoutsuraddress").val();
	var checkoutreceiver = $("#checkoutreceiver").val();
	var checkoutphone = $("#checkoutphone").val();
	var checkoutordernotes = $("#checkoutordernotes").val();
	var checkoutshipping = $("input[name='shipping']:checked").val(); 
	var totalPrice = $("#totalPrice").html();



	form_elements = [];
	$(".check").each(function () { 
		var addeditemsTitle = $(this).find("input[name='addeditemsTitle']").val(); 	
		var quantityTwo = $(this).find("span[data-name='quantityTwo']").html(); 		
		var addeditemsInfo = $(this).find("span[data-name='addeditemsInfo']").html(); 
		var addeditemsPrice = $(this).find("span[data-name='addeditemsPrice']").html(); 
		current_frm_obj = {addeditemsTitle:addeditemsTitle, addeditemsInfo:addeditemsInfo, quantityTwo:quantityTwo, addeditemsPrice:addeditemsPrice};
		form_elements.push(current_frm_obj);

	});


  if(checkoutname == "") {
	  $("#danger").text("Name is required");
	  $(".danger").show();
  }else if (checkoutsurname == "") {
	  $("#danger").text("Surname is required");
	  $(".danger").show();
  }else if (checkoutcounty == "") {
	  $("#danger").text("State / County is required");
	  $(".danger").show();
  }else if (checkoutcity == "") {
	  $("#danger").text("City is required");
	  $(".danger").show();
  }else if (checkoutzip == "") {
	  $("#danger").text("Postal code / ZIP is required");
	  $(".danger").show();
  }else if (checkoutsuraddress == "") {
	  $("#danger").text("Address is required");
	  $(".danger").show();
  }else if (checkoutreceiver == "") {
	  $("#danger").text("Apartment / Company / Receiver is required");
	  $(".danger").show();
  }else if (checkoutphone == "") {
	  $("#danger").text("Phone is required");
	  $(".danger").show();
  }else{
	$.ajax({
	  url  : "/send_order.php",
	  type : "POST",
	  cache:false,
	  data :{checkoutname:checkoutname,
			 checkoutsurname:checkoutsurname,
			 checkoutcounty:checkoutcounty,
			 checkoutcity:checkoutcity,
			 checkoutzip:checkoutzip,
			 checkoutsuraddress:checkoutsuraddress,
			 checkoutreceiver:checkoutreceiver,
			 checkoutphone:checkoutphone,
			 checkoutordernotes:checkoutordernotes,
			 totalPrice:totalPrice,
			 checkoutshipping:checkoutshipping,
			 result:JSON.stringify(form_elements)},
	  success:function(response){
	   console.log(form_elements); 
		  
	//  window.location.reload(true); 	  

   // setInterval('location.reload()', 3000);
	
	
	window.scrollTo({top: 0, behavior: 'smooth'});	

	setTimeout(function(){
		$("#success").text("Order submitted successfully");
		$(".success").show();
		$(".danger").hide();
		$("#submitOrder").trigger('reset');
	}, 1500); 
	
	 
	  }
	});
  }
});

$(".btnclosenotifsuccess").click(function(){
window.location.reload(true); 
});
		
});
		  	
	

//


		









	  