$(document).ready(function(){$(".trigger").on("click",function(t){t.preventDefault(),console.log("asdf");var a=$(this).attr("href").replace("#",""),e={};$("[data-target]").each(function(){var t=$(this);trigger=t.data("target"),trigger==a&&(e=t)});var r=e.offset().top;$("html, body").animate({scrollTop:r},500)})});