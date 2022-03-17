// This is an examples of simple export.
//
// You can remove or add your own function in this file.
import $ from 'jquery';

$('#discuss_trends').on('mouseenter',
  () => {
    $('#digital_currency').removeClass('tile--active');
    $('.phone').removeClass('phone--digital');
    $('#shop_rewards').removeClass('tile--active');
    $('.phone').removeClass('phone--shop');
    $('#discuss_trends').addClass('tile--active');
    $('.phone').addClass('phone--discuss');
  }).on('mouseleave', () => {

});

$('#digital_currency').on('mouseenter',
  () => {
    $('#discuss_trends').removeClass('tile--active');
    $('.phone').removeClass('phone--discuss');
    $('#shop_rewards').removeClass('tile--active');
    $('.phone').removeClass('phone--shop');
    $('#digital_currency').addClass('tile--active');
    $('.phone').addClass('phone--digital');
  }).on('mouseleave', () => {

});

$('#shop_rewards').on('mouseenter',
  () => {
    $('#discuss_trends').removeClass('tile--active');
    $('.phone').removeClass('phone--discuss');
    $('#digital_currency').removeClass('tile--active');
    $('.phone').removeClass('phone--digital');
    $('#shop_rewards').addClass('tile--active');
    $('.phone').addClass('phone--shop');
  }).on('mouseleave', () => {
});
