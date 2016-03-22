$('[data-select]').select2({
    minimumResultsForSearch: Infinity
});
$('.select2-selection__arrow').append('<i class="fa fa-angle-down"></i>');
$('[data-checkbox]').iCheck({
    checkboxClass: 'icheckbox_square-green',
    radioClass: 'iradio_square-green',
    increaseArea: '20%'
});
$('[data-toggle="tooltip"]').tooltip();
