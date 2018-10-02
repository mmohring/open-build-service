$(function ($) {
  // There are three input fields on the package add file view: filename, url and choose file
  // and only one of them is required.
  // We just set HTML5 required tags on all of them and set to false with JS
  // when one of them is set.
  var $inputs = $('.package-add-file input');
  $inputs.on('change', function () {
    var otherInputWithValueExists = $inputs.not(this).filter(function() {
        return !!this.value;
    }).length > 0;

    if(!otherInputWithValueExists) {
      $inputs.prop('required', !$(this).val().length);
    }
  });

  $('details.details-with-codemirror').on('click', function () {
    var editor = $(this).find('.CodeMirror')[0].CodeMirror;
    window.setTimeout(function() {
      editor.refresh();
    },1);
  });

  $('#expand-diffs').on('click', function () {
    var details = $('details.card.details-with-codemirror');
    details.attr('open', 'open');
    $('.CodeMirror').each(function(){
      $(this)[0].CodeMirror.refresh();
    });
  });

  $('#collapse-diffs').on('click', function () {
    var details = $('details.card.details-with-codemirror');
    details.attr('open', null);
  });
});
