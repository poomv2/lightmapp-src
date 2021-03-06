// import $ from 'jquery';

// document.addEventListener('DOMContentLoaded', () =>
// {
//   // Gets the video src from the data-src on each button

//   let $videoSrc;
//   $('.video-btn').on('click', () => {
//     $videoSrc = $(this).data('src');
//   });

//   // when the modal is opened autoplay it
//   $('#myModal').on('shown.bs.modal', () => {
//     $('#video').attr('src', $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0');
//   });

//   // stop playing the youtube video when I close the modal
//   $('#myModal').on('hide.bs.modal', () => {
//     // a poor man's stop video
//     $('#video').attr('src', $videoSrc);
//   });

//   // document ready
// });

$(document).ready(() => {
  // Gets the video src from the data-src on each button

  let $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data('src');
  });

  // when the modal is opened autoplay it
  $('#myModal').on('shown.bs.modal', (e) => {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $('#video').attr('src', `${$videoSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`);
  });

  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', (e) => {
    // a poor man's stop video
    $('#video').attr('src', $videoSrc);
  });

  // document ready
});
