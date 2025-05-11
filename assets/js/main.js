 
(function ($) {
	("use strict");

	$(document).ready(function () {
 
 
		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$("#header-sticky").addClass("sticky");
			} else {
				$("#header-sticky").removeClass("sticky");
			}
		});

		function isInViewport(element) {
			var rect = element.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <=
					(window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <=
					(window.innerWidth || document.documentElement.clientWidth)
			);
		}

		function progress_bar() {
			var speed = 30;
			var items = $(".progress_bar .progress_bar_item");

			items.each(function () {
				var item = $(this).find(".progress");
				var itemValue = item.data("progress");
				var i = 0;
				var value = $(this);
				var started = $(this).data("started");

				if (!started && isInViewport(this)) {
					// Check if in viewport and not started before
					$(this).data("started", true);

					var count = setInterval(function () {
						if (i <= itemValue) {
							var iStr = i.toString();
							item.css({
								width: iStr + "%",
							});
							value.find(".item_value").html(iStr + "%");
						} else {
							clearInterval(count);
						}
						i++;
					}, speed);
				}
			});
		}

		// Run on scroll and on page load
		$(window).on("scroll", function () {
			progress_bar();
		});

		$(document).ready(function () {
			progress_bar();
		});

		//faq item
		const accordionItems = document.querySelectorAll(".accordion-item");
		accordionItems.forEach((item) => {
			item.addEventListener("click", function () {
				// Remove 'active' class from all other accordion items
				accordionItems.forEach((otherItem) => {
					if (otherItem !== this) {
						otherItem.classList.remove("active");
					}
				});

				// Toggle 'active' class on the clicked item
				this.classList.toggle("active");
			});
		});

		//--Pricing Switcher
		const switchElement = document.querySelector(".switch");
		if (switchElement) {
			switchElement.addEventListener("click", () => {
				switchElement.classList.toggle("active");
			});
		}

		//>> Hero-3 Slider Start <<//
		const sliderActive1 = ".hero-slider";
		const sliderInit1 = new Swiper(sliderActive1, {
			loop: true,
			slidesPerView: 1,
			effect: "fade",
			speed: 2000,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
		});
 

		//>> Testimonial Slider Start <<//
		const bannerSectionWrap = new Swiper(".banner-section-wrap", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			effect: "fade",
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				1199: {
					slidesPerView: 1,
				},
				767: {
					slidesPerView: 1,
				},
				575: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
 

 

		//>> Search Popup Start <<//
		const $searchWrap = $(".search-wrap");
		const $navSearch = $(".nav-search");
		const $searchClose = $("#search-close");

 

		function closeSearch() {
			$searchWrap.fadeOut(200);
			$navSearch.add($searchClose).removeClass("open");
		}

		$(document.body).on("click", function (e) {
			closeSearch();
		});

		$(".search-trigger, .main-search-input").on("click", function (e) {
			e.stopPropagation();
		});

 

		// Mouse Follower
		const follower = document.querySelector(
			".mouse-follower .cursor-outline"
		);
		const dot = document.querySelector(".mouse-follower .cursor-dot");
 

		// Mouse Follower Hide Function
		$("a, button").on("mouseenter mouseleave", function () {
			$(".mouse-follower").toggleClass("hide-cursor");
		});

		var terElement = $(
			"h1, h2, h3, h4, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six"
		);
		$(terElement).on("mouseenter mouseleave", function () {
			$(".mouse-follower").toggleClass("highlight-cursor-head");
			$(this).toggleClass("highlight-cursor-head");
		});

		var terElement = $("p");
		$(terElement).on("mouseenter mouseleave", function () {
			$(".mouse-follower").toggleClass("highlight-cursor-para");
			$(this).toggleClass("highlight-cursor-para");
		});
 
 
 
	});
	// progress-area
	let progressBars = $(".progress-area");
	let observer = new IntersectionObserver(function (progressBars) {
		progressBars.forEach(function (entry, index) {
			if (entry.isIntersecting) {
				let width = $(entry.target)
					.find(".progress-bar")
					.attr("aria-valuenow");
				let count = 0;
				let time = 1000 / width;
				let progressValue = $(entry.target).find(".progress-value");
				setInterval(() => {
					if (count == width) {
						clearInterval();
					} else {
						count += 1;
						$(progressValue).text(count + "%");
					}
				}, time);
				$(entry.target)
					.find(".progress-bar")
					.css({ width: width + "%", transition: "width 1s linear" });
			} else {
				$(entry.target)
					.find(".progress-bar")
					.css({ width: "0%", transition: "width 1s linear" });
			}
		});
	});
	progressBars.each(function () {
		observer.observe(this);
	});
	$(window).on("unload", function () {
		observer.disconnect();
	});
	//end
	
	function loader() {
		$(window).on("load", function () {
			// Animate loader off screen
			$(".preloader").addClass("loaded");
			$(".preloader").delay(600).fadeOut();
		});
	}

	loader();
})(jQuery)
