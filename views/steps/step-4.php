<div class="pw-step" data-step="<?php echo esc_attr($args['id']); ?>">
    <div class="pw-step__inner">
        <p class="pw-step__title">Nearly there...</p>
        <p>Please select your desired package hours...</p>

        <div class="pw-columns">
            <label for="oneHours" class="pw-column">
                <p class="pw-column__title">
                    <span class="pw-column__price">1</span><br>
                    Hours
                </p>
                <p class="pw-column__value">
                    <span class="pw-column__price">1</span>$
                </p>
                <input type="radio" id="oneHours" name="pricingPackageRadioGroup" value="1" data-cf-name="pricingPackageRadioGroup">
            </label>

            <label for="fiveHours" class="pw-column pw-column--highlight">
            <p class="pw-column__title">
                    <span class="pw-column__price">5</span><br>
                    Hours
                </p>
                <p class="pw-column__value">
                    <span class="pw-column__price">5</span>$
                </p>
                <input type="radio" id="fiveHours" name="pricingPackageRadioGroup" value="5" data-cf-name="pricingPackageRadioGroup" checked>
            </label>

            <label for="tenHours" class="pw-column">
            <p class="pw-column__title">
                    <span class="pw-column__price">10</span><br>
                    Hours
                </p>
                <p class="pw-column__value">
                    <span class="pw-column__price">10</span>$
                </p>
                <input type="radio" id="tenHours" name="pricingPackageRadioGroup" value="10" data-cf-name="pricingPackageRadioGroup">
            </label>
        </div>

        <p>Sometimes our students need evening lessons, so we offer them where they are available. We don't have any block bookings or discounts for evening lessongs and each lesson is charged at the standard evening rate.</p>
        <p>Would you be interested in evening lessons?</p>

        <div class="pw-field pw-field--radio">
            <input type="radio" id="yesEveningLessons" name="eveningLessons" value="Yes" data-cf-name="eveningLessons">
		    <label for="yesEveningLessons">Yes</label>
        </div>

        <div class="pw-field pw-field--radio">
            <input type="radio" id="noEveningLessons" name="eveningLessons" value="No" data-cf-name="eveningLessons" checked>
		    <label for="noEveningLessons">No</label>
        </div>
    </div>

    <div class="pw-buttons">
        <button class="pw-button" data-direction="previous">Go Back</button>
        <button class="pw-button" data-direction="next">Continue</button>
    </div>
</div>
