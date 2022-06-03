<?php
    $step_files = scandir(APWB_STEPS_PATH);
    $step_files = array_diff($step_files, array('.', '..'));
    $step_files = array_values($step_files);
?>

<div class="apwb-container">
    <?php
        foreach($step_files as $index => $file) {
            $args = ['id' => $index];
            include_once APWB_STEPS_PATH . '/' . $file;
        }
    ?>

    <div class="apwb-errors"></div>
    <div class="apwb-spinner"></div>
</div>
