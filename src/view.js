import { AddressFinder } from "@ideal-postcodes/postcode-lookup";
import { isValid } from "postcode";

class MultiStep {

    // ...
    constructor() {
        this.steps = document.getElementsByClassName('.apwb-step');
        this.postcode = document.getElementsByClassName('.apwb-postcode');
        this.btns = document.getElementsByClassName('.apwb-btn');
        this.columns = document.getElementsByClassName('.apwb-column');
        this.wpcf7 = document.getElementsByClassName('.wpcf7');
        this.loader = document.getElementsByClassName('.apwb-loader');
        this.errors = document.getElementsByClassName('.apwb-errors');
        this.bindEvents();
    }
  
    // ...
    bindEvents() {
        // Listen for step change, if > then process @stepChangeHandler.
        this.addEventListener( 'click', this.stepChangeHandler( e ) );

        // Listen for input values, if > then process @updateValues.
        this.addEventListener( 'keyup', this.updateValues( e ) );

        // Listen for contact form 7 submission.
        this.addEventListener( 'wpcf7submit', function( e ) {
            // If contact form 7 is fired, move to final step.
            this.stepChange( 6 );
        }, false );
    }

    // ...
    stepChangeHandler(e) {
        // Get the button that triggered the event.
        const btn = e.target;

        // Get the button's data-dir attribute.
        const dir = btn.getAttribute( 'data-dir' );

        // Get the '.apwb-step' div closest to the button.
        const step = btn.closest( '.apwb-step' );

        // Get the '.apwb-step' div's data-curStep attribute.
        const curStep = step.getAttribute( 'data-curStep' );

        // Get the '.apwb-step' div's data-xhrAction attribute.
        const xhrAction = step.getAttribute( 'data-xhrAction' );

        // Calculate the next step, based on the button's data-dir attribute.
        const nextStep = dir === 'next' ? parseInt( curStep ) + 1 : parseInt( curStep ) - 1;

        // If the next step is valid, move to the next step.
        if ( this.validateStep( nextStep ) ) {

            // Show the ui loader.
            this.loader.classList.add( 'apwb-loader--active' );

            switch ( xhrAction ) {
                // If the next step requires postcode lookup, do the lookup.
                case 'verifyPostcode':
                    // Check API response here...
                    if (isValid(this.postcode.value)) {

                        const controller = AddressFinder.setup({
                            apiKey: "iddqd",
                            outputFields: {
                                post_town: "#post_town",
                                postcode: "#postcode",
                            }
                        });
                        
                        idealPostcodes.lookupAddress({
                            query: "ID1 1QD",  	// required
                            limit: 10,			// optional
                            page: 0 			// optional
                        }, function (error, searchResults) {
                            if (error) {
                                // Implement some error handling
                            } 
                            console.log(searchResults); 	
                        });

                    }

                    break;
                    // Else, continue to the next step.
                    default:
                        this.stepChange( nextStep );
            }

        }
    }

    // ...
    updateValues(e) {
        // Get the input that triggered the event.
        const input = e.target;
        // add the postcode to the wpcf7 postcode input.
    }

    // ...
    stepChange(stepIndex) {
        // Hide the ui loader.
        this.loader.classList.remove( 'apwb-loader--active' );
        // Hide the error message.
        this.clearErrors();
        // Set the current step visibility.
        this.steps.classList.remove( 'apwb-step--active' );

        // Set the step visibility.
        this.steps.forEach( (step, index) => {
            // Hide all steps.
            step.classList.remove( 'apwb-step--active' );
            // If the stepIndex is equal to the current step, show the current step.
            if ( index === stepIndex ) {
                step.classList.add( 'apwb-step--active' );
            }
        } );

    }

    // ...
    updatePricing(prices) {
        // Set the pricing.
        this.columns.forEach( (prices, index) => {
            // do somthing...
        } );
    }

    // ...
    errorHandler(error) {
        // Hide the ui loader.
        this.loader.classList.remove( 'apwb-loader--active' );
        // Show the error message.
        this.errors.classList.add( 'apwb-errors--active' );
        // Set the error message.
        this.errors.innerHTML = error;
    }

    // ...
    clearErrors() {
        // Hide the error message.
        this.errors.classList.remove( 'apwb-errors--active' );
        // Clear the error message.
        this.errors.innerHTML = '';
    }
  
  }
  
  // Usage:
  let MultiStep = new MultiStep();
  MultiStep;