import $ from 'jquery';
import * as env from '../../config/env';

const URL = `${env.API_URL}/api/v.1/landing/`;
const emailRegEx = /^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const setCounter = (totalJoined) => {
  const rangeValueLabel = $('.range__value');
  const rangeBarWidth = $('.range__bar')[0].clientWidth;
  const progress = (rangeBarWidth / 10000) * totalJoined;

  const progressWidth = rangeBarWidth < progress ? rangeBarWidth : progress;

  $('.range').append(`<style>.range__bar::before{ width: ${progressWidth}px !important; }</style>`);
  rangeValueLabel.text(`${totalJoined}/10k`);
};

const setEmailValidationText = (text) => {
  if (text) {
    $('.email-signup-validation').css('display', 'flex');
    const validationLabel = $('.email-signup-validation>span');
    validationLabel.text(text || '');
  } else {
    $('.email-signup-validation').css('display', 'none');
  }
};

const emailValidation = (email) => {
  const validation = { text: '', isValid: true };
  if (!emailRegEx.test(email) || !email.length) {
    validation.text = 'Please, enter an email address.';
    validation.isValid = false;
  }

  setEmailValidationText(validation.text);
  return validation.isValid;
};

const sendEmail = (email) => {
  const data = {
    email,
  };

  $.ajax({
    url: URL,
    method: 'POST',
    data,
    success({ totalJoined }) {
      setCounter(totalJoined);
      setEmailValidationText();
    },
    error: (err) => {
      if (err.status === 400) {
        const errorText = JSON.parse(err.responseText).email;
        setEmailValidationText(errorText);
      }
    },
  });
};

const getTotalJoined = () => {
  $.ajax({
    url: URL,
    type: 'GET',
    dataType: 'json',
    success({ totalJoined }) {
      setCounter(totalJoined);
    },
  });
};

const subscription = () => {
  getTotalJoined();

  const inputElement = $('#join-input');

  inputElement.change((e) => {
    e.preventDefault();
    setEmailValidationText();
  });

  $('#join-btn').click((e) => {
    e.preventDefault();
    const email = inputElement.val();

    if (emailValidation(email)) {
      sendEmail(email);
    }
  });
};

export default subscription;
