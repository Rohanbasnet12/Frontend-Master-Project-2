for (let i = 1; i <= 4; i++) {
    let button = $(`#button${i} .btn`); // Get the button based on the index value
    let answer = $(`#answer${i}`); // Get the answer based on the index value

    let showBtnClicked = true;

    let showButton = $(`#showBtn${i}`);
    let hideButton = $(`#hideBtn${i}`);

    button.each(function () {
        $(this).on('click', () => {
            if (showBtnClicked !== true) { // If the showButton is not active 
                hideButton.css('display', 'none');
                showButton.css('display', 'block');

                button.removeClass('buttonClicked'); // Remove class when the button is clicked
                answer.css({
                    'display': 'none'
                }) // Hide the answer

                showBtnClicked = true;

            } else { // If the showButton is active
                hideButton.css('display', 'block');
                showButton.css('display', 'none');

                button.addClass('buttonClicked'); // Add class when the button is clicked
                answer.css({
                    'display': 'block'
                }) // Show the answer

                showBtnClicked = false;
            }
        })
    })
}