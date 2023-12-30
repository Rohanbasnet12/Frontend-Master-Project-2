let buttons = $(".btn");
let answers = $('.expand');

let showButton = $('#showBtn');
let hideButton = $('#hideBtn');

buttons.each(function (index) {
    $(this).on('click', () => {
        let answerId = $(this).data('answer');

        if (showButton.css('display') !== 'none') {
            showButton.css('display', 'none');
            hideButton.css('display', 'block');
            buttons.addClass('buttonClicked');
            answers.css('display', 'none'); // Hide all answers
            $('#' + answerId).css('display', 'block'); // Show the clicked answer
        } else {
            showButton.css('display', 'block');
            hideButton.css('display', 'none');
            buttons.removeClass('buttonClicked');
            answers.css('display', 'none');
        }
    })
});
