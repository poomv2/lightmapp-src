import $ from 'jquery';
import ClipboardJS from 'clipboard';

new ClipboardJS('.copy-icon');

$('.btn-copy').on('click',
  () => {
    $('.site-nav .btn-inner').addClass('small');
    $('.contact-text').addClass('hidden');
    $('.email-text').removeClass('hidden');
  });

$('.copy-icon').on('click',
  () => {
    $('.email-text').addClass('hidden');
    $('.copied-text').removeClass('hidden');
  });
