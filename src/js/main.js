function showHide(elementid) {

	if (document.getElementById(elementid).style.display == 'none') {

		document.getElementById(elementid).style.display = '';
	}

	else {
		document.getElementById(elementid).style.display = 'none';
	}
}

$(document).ready(function() {

	$("#header").load("header.html", function () {
		
		var main = $('main').attr('id');

		$("#menu-" + main).addClass("active");

	});
	
	$("#content-sidebar").load("sidebar.html");

	$("#footer").load("footer.html");

	$("[data-dinaanim]").each(function () {

		var $this = $(this);

		$this.addClass("dinaAnim-invisible");

		if ($(window).width() > 767) {

			$this.appear(function () {

				var delay = ($this.data("dinadelay") ? $this.data("dinadelay") : 1);

				if (delay > 1) $this.css("animation-delay", delay + "ms");

				$this.addClass("dinaAnim-animated");
				$this.addClass('dinaAnim-' + $this.data("dinaanim"));

				setTimeout(function () {

					$this.addClass("dinaAnim-visible");

				}, delay);

			}, { accX: 0, accY: -150 });

		} else {

			$this.animate({ opacity: 1 }, 300, 'easeInOutQuad', function () {});
		}
	});

	$('.owl-carousel-main').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: false,
		dots: false,
		autoplay: true,
		animateOut: 'fadeOut'
	});

	$("#content-sidebar").on("change", "#select-content-main", function () {

		var url = $(this).val();

		$(location).attr('href', url);

	});

	$("#mas").on("click", function (event) {
		event.preventDefault();

		var item = $(this).attr('href');

		showHide(item);

	});

	$("#footer").on("click", "#toTop", function (event) {
		event.preventDefault();

		$('body,html').animate({ scrollTop: $('#header').offset().top }, 1000, 'swing');

	});

});