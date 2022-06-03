<div class="pw-step" data-step="<?php echo esc_attr($args['id']); ?>">
    <div class="pw-step__inner">
        <p class="pw-step__title">Awesome! Next up...</p>
        
        <p>Which gearbox would you prefer?</p>

        <div class="pw-field pw-field--radio">
            <input type="radio" id="manualGearbox" name="typeOfGearbox" value="Manual Gearbox" data-cf-name="typeOfGearbox" checked>
            <label for="manualGearbox">Manual Gearbox</label>
        </div>

        <div class="pw-field pw-field--radio">
            <input type="radio" id="autoGearbox" name="typeOfGearbox" value="Automatic Gearbox" data-cf-name="typeOfGearbox">
            <label for="autoGearbox">Automatic Gearbox</label>
        </div>
    </div>

    <div class="pw-buttons">
        <button class="pw-button" data-direction="previous">Go Back</button>
        <button class="pw-button" data-direction="next">Continue</button>
    </div>
</div>
