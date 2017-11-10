'use strict';

$(document).ready(function () {
  var wrap = $('.form');
  var maxFields = 10;
  var x = 1;

  $('.js-add-input').on('click', function () {

    if (x < maxFields) {
        var newInput = $('<input type="text" class="form__input" /> <a href="#" class="events__link js-remove-input">Удалить</a>');
      $(wrap).append(newInput)
      .css('margin-top: 10px;');
      x++; 
    }
  });

  $(wrap).on("click", ".js-remove-input", function () {
    $(this).prev('input').remove();
    $(this).remove();
    x--;
    })
});
