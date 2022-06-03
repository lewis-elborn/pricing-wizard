<div class="apwb-step" data-step="<?php echo esc_attr($args['id']); ?>">
    <div class="apwb-step__inner">
        <p class="apwb-step__title">Awesome! Next up...</p>
        
        <p>Which gearbox would you prefer?</p>

        <div class="apwb-field apwb-field--radio">
            <input type="radio" id="manualGearbox" name="typeOfGearbox" value="Manual Gearbox" data-cf-name="typeOfGearbox" checked>
            <label for="manualGearbox">Manual Gearbox</label>
        </div>

        <div class="apwb-field apwb-field--radio">
            <input type="radio" id="autoGearbox" name="typeOfGearbox" value="Automatic Gearbox" data-cf-name="typeOfGearbox">
            <label for="autoGearbox">Automatic Gearbox</label>
        </div>
    </div>

    <div class="apwb-btns">
        <button class="apwb-btn" data-direction="previous">Go Back</button>
        <button class="apwb-btn" data-direction="next">Continue</button>
    </div>
</div>
