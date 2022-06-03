<div class="apwb-step" data-step="<?php echo esc_attr($args['id']); ?>">
    <div class="apwb-step__inner">
        <p class="apwb-step__title">Great, thanks. Up next...</p>
        
        <p>What type of lessons would you like?</p>

        <div class="apwb-field apwb-field--radio">
            <input type="radio" id="newLearner" name="typeOfLesson" value="First Time learner" data-cf-name="typeOfLesson" checked>
            <label for="newLearner">First time learner</label>
        </div>

        <div class="apwb-field apwb-field--radio">
            <input type="radio" id="newlyPassedLearner" name="typeOfLesson" value="Pass Plus Lessons" data-cf-name="typeOfLesson">
            <label for="newlyPassedLearner">Pass Plus Lessons</label>
        </div>

        <div class="apwb-field apwb-field--radio">
            <input type="radio" id="experiencedLearner" name="typeOfLesson" value="Refresher Lessons" data-cf-name="typeOfLesson">
            <label for="experiencedLearner">Refresher Lessons</label>
        </div>
    </div>

    <div class="apwb-btns">
        <button class="apwb-btn" data-direction="previous">Go Back</button>
        <button class="apwb-btn" data-direction="next">Continue</button>
    </div>
</div>
