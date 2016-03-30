
$(document).ready(function() {
	init_tabsets();
});

function init_tabsets() {
	
	$("div.tab-set").each(function(i, tabset) { 
		var hash = false;
		var tabset = $(tabset);

		$("div.tab-content > div", tabset).hide();

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

			$("div.tab-content > div", tabset).hide();

			$("div.tab-content > div", tabset).eq(active_index).show();
			/*
			try {
				ga('send', {
					hitType: 'pageview',
					page: $("a", this).attr("title");
				});
			} catch (err) {}
			*/

		});

		$("ul.tabs > li:visible:first", tabset).click();

		$("a[rel=next-tab]", tabset).on("click", function() {
			$("ul.tabs > li.on", tabset).next().click();
		});

		$("a[rel=previous-tab]", tabset).on("click", function() {
			$("ul.tabs > li.on", tabset).prev().click();
		});
	});
}