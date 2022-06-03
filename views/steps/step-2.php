<div class="pw-step" data-step="<?php echo esc_attr($args['id']); ?>">
    <div class="pw-step__inner">
        <p class="pw-step__title">Great, thanks. Up next...</p>
        
        <p>What type of lessons would you like?</p>

        <div class="pw-field pw-field--radio">
            <input type="radio" id="newLearner" name="typeOfLesson" value="First Time learner" data-cf-name="typeOfLesson" checked>
            <label for="newLearner">First time learner</label>
        </div>

        <div class="pw-field pw-field--radio">
            <input type="radio" id="newlyPassedLearner" name="typeOfLesson" value="Pass Plus Lessons" data-cf-name="typeOfLesson">
            <label for="newlyPassedLearner">Pass Plus Lessons</label>
        </div>

        <div class="pw-field pw-field--radio">
            <input type="radio" id="experiencedLearner" name="typeOfLesson" value="Refresher Lessons" data-cf-name="typeOfLesson">
            <label for="experiencedLearner">Refresher Lessons</label>
        </div>
    </div>

    <div class="pw-buttons">
        <button class="pw-button" data-direction="previous">Go Back</button>
        <button class="pw-button" data-direction="next">Continue</button>
    </div>
</div>
