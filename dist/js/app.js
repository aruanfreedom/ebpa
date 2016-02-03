$(document).ready(function() {
    $("#top a").on("click", function(e) {
        // e.preventDefault();
        showSection($(this).attr('href'), true);
    });
    showSection(window.location.hash, false);
    return false;


});


$(window).scroll(function() {
    checkSection();
});

function showSection(section, isAnimate) {
    var direction = section.replace(/#/, ''),
        reqSection = $('.scroll').filter('[data-section="' + direction + '"]'),
        reqSectionPos = reqSection.offsetTop;
    if (isAnimate) {
        $('html, body').animate({
            scrollTop: reqSectionPos
        }, 500);
    } else {
        $('html, body').scrollTop(reqSectionPos);
    }
}

function checkSection() {
    $(".scroll").each(function() {
        var $this = $(this),
            topEdge = $this.offset().top - 200,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
        if (topEdge < wScroll && bottomEdge > wScroll) {
            var currentId = $this.data('section'),
                reglink = $('#top a').filter('[href="#' + currentId + '"]');

            reglink.closest('.item').addClass('active').siblings().removeClass('active');
        }
    });
}


foo();
//Checkbox
function foo() {
	$('input[type="checkbox"]').on('change', function() {
		$(this).siblings('input[type="checkbox"]').not(this).prop('checked', false);
	});
};


//Upload
function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}

/* Person click view Modal windows */
person();
	function person(){
		var result,
			arrayPerson = ["david","herbert","charles",
							"friedbert","rajendra","katsu",
							"maria","albert","ramamoorthy",
							"kanat","stefan","hattori", "osman",
                            "koike", "chobanova"];

		for (var i = 0; i <= arrayPerson.length; i++) {
			result = arrayPerson[i];
			personClick(arrayPerson, result);
		};
	}

	function personClick(arrayPerson,result){
		$("#" + result).on("click",function() {
				for (var i = 0; i <= arrayPerson.length; i++) {
					if (result == arrayPerson[i]) {
						$("." + result).css("display", "block");
					} else{
						$("." + arrayPerson[i]).css("display", "none");
					}
				};
		});
	}
