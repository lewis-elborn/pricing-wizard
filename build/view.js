/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
const $ = jQuery;

class MultistepForm {
  constructor() {
    this.steps = $('.pw-step');
    this.buttons = $('.pw-button');
    this.inputs = $('.pw-container').find(':input');
    this.columns = $('.pw-column');
    this.contactForm = $('.wpcf7');
    this.spinner = $('.pw-spinner');
    this.errors = $('.pw-errors');
    this.bindEvents();
  }

  bindEvents() {
    this.buttons.on('click', eventObject => this.handleStepChange(eventObject));
    this.inputs.on('keyup change', eventObject => this.updateContactFormInputValues(eventObject));
    this.contactForm.on('wpcf7submit', () => {
      this.changeStep(6);
    });
  }

  handleStepChange(eventObject) {
    const button = $(eventObject.target);
    const direction = button.data('direction');
    const stepContainer = button.closest('.pw-step');
    const currentStep = stepContainer.data('step');
    const ajaxAction = stepContainer.data('ajax-action');
    const nextStep = direction === 'next' ? currentStep + 1 : currentStep - 1;

    if (!direction) {
      return;
    }

    this.spinner.show();

    switch (ajaxAction) {
      case 'verifyPostcode':
        this.verifyPostcode(stepContainer, response => {
          if (response.success) {
            this.changeHourlyPrices(response.prices);
            this.changeStep(nextStep);
          } else {
            this.addError('Postcode is not valid.');
          }
        });
        break;

      default:
        this.changeStep(nextStep);
        break;
    }
  }

  updateContactFormInputValues(eventObject) {
    const input = $(eventObject.target);
    const contactFormName = input.data('cf-name');

    if (contactFormName) {
      const contactFormInput = $('.pw-container').find(`[name="${contactFormName}"]`);
      contactFormInput.val(input.val());
    }
  }

  changeStep(stepIndex) {
    this.clearErrors();
    this.spinner.hide();
    this.steps.hide();
    this.steps.each((index, element) => {
      const step = $(element);
      index !== stepIndex ? step.hide() : step.show();
    });
  }

  changeHourlyPrices(prices) {
    this.columns.each((index, element) => {
      $(element).find('.pw-column__price').text(prices[index]);
      $(element).find('.pw-column__price').text(prices[index]);
      $(element).find('input').val(prices[index]);
    });
  }

  addError(error) {
    this.spinner.hide();
    this.errors.show();
    this.errors.append(`<p>${error}</p>`);
  }

  clearErrors() {
    this.errors.hide();
    this.errors.empty();
  }

  verifyPostcode(step, callback) {
    const postcode = step.find('[id="postCode"]').val();
    $.ajax({
      type: "POST",
      dataType: "json",
      url: data.ajax_url,
      data: {
        action: 'apwb_ideal_postcode_lookup',
        postcode
      },
      success: response => {
        callback(response);
      },
      error: response => {
        callback(response);
      }
    });
  }

}

$(() => {
  new MultistepForm();
});
/******/ })()
;
//# sourceMappingURL=view.js.map