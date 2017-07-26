
$(document).ready(function() {
	init_tabsets();
});

function init_tabsets() {
	
	$(".tab-set").each(function(i, tabset) { 
		var hash = false;
		var tabset = $(tabset);

		$(".tab-content > *", tabset).hide();

		$("ul.tabs > li", tabset).each(function(i, obj) {
			if ($(obj).children("a").data("hash") == window.location.hash) {
				hash = $(obj).children("a");
			}
		});


		$("ul.tabs > li", tabset).on("click", function() {

			if ($(this).data("rel")) true;

			$(this).parent().children("li").removeClass("on");
			$(this).addClass("on");

			var active_index = $(this).index();

			$(".tab-content > *", tabset).hide();

			$(".tab-content > *", tabset).eq(active_index).show();
			/*
			try {
				ga('send', {
					hitType: 'pageview',
					page: $("a", this).attr("title");
				});
			} catch (err) {}
			*/

		});

		$("ul.tabs > li", tabset).eq(0).trigger("click");

		$("a[rel=next-tab]", tabset).on("click", function() {
			$("ul.tabs > li.on", tabset).next().click();
		});

		$("a[rel=previous-tab]", tabset).on("click", function() {
			$("ul.tabs > li.on", tabset).prev().click();
		});
	});
}