'use strict';
$(document).ready(function () {
    $('#the-explanation').hide().attr('tabindex', '-1');

    var expButton = $('<button id="expButton">Show Explanation</button>');
    $('#the-explanation').before(expButton);

    $(expButton).attr('aria-pressed', 'false');
    $(expButton).bind('click keypress', function (e) {
        var $this = $(this),
            expArea = $('#the-explanation'),
            eType = e.type,
            code = eType.charCode || eType.keyCode;

        // react to both enter and space.
        // as well as just plain ole click
        if ((eType === 'click') || (code === 13 || code === 32)) {

            expArea.toggle();

            if (expArea.is(':visible')) {
                $this.text('Hide Explanation');
                expArea.focus();
            }
            else {
                $this.text('Show Explanation');
                $this.focus();
            }

            eType.preventDefault;
        }
    });
});