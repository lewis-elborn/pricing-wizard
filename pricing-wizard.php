<?php
/**
 * Plugin Name:       Pricing Wizard
 * Plugin URI:        https://www.aphinity.co.uk/
 * Description:       Provides a wizard block, for dynamic postcode pricing using the Ideal Postcodes API.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Lewis Elborn
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pricing-wizard
 * Domain Path:       /languages
 * Update URI:        https://www.aphinity.co.uk/
 *
 * @link              https://www.aphinity.co.uk/
 * @since             1.0.0
 * @package           Pricing_Wizard
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Current plugin version. (SemVer - https://semver.org)
 * 
 * @since	1.0.0
 */
define( 'APWB_VERSION', '1.0.0' );

/** Define the plugin path.
 * 
 * @since	1.0.0
 */
define('APWB_DIR_PATH', plugin_dir_path( __FILE__ ));
define('APWB_DIR_URL', plugin_dir_url( __FILE__ ));
define('APWB_VIEWS_PATH', APWB_DIR_PATH . 'views');
define('APWB_STEPS_PATH', APWB_DIR_PATH . 'views/steps');

/** 
 * Ideal Postcodes API lookup.
 * 
 * @since	1.0.0
 */
function apwb_ideal_postcode_lookup() {
    if (isset($_REQUEST)) {
        $typedPostcode = $_REQUEST['postcode'];
    }

    // Complete rest of api call here...
    // Don't forget to catch errors & die.
}

/** 
 * Render callback for 'aphinity/pricing-wizard' block.
 * 
 * @since	1.0.0
 */
function apwb_dynamic_render_callback( $block_attributes, $content, $block_instance ) {

    if(!is_admin()) {
        wp_enqueue_script('apwb-dynamic-view-js');
        wp_localize_script( 'apwb-dynamic-view-js', 'apwbData', array(
            'restURL' => rest_url(),
            'restNonce' => wp_create_nonce( 'wp_rest' )
        ));
    }

    ob_start();
    include_once APWB_VIEWS_PATH . '/block.php';
    return ob_get_clean();
}
add_action( 'wp_ajax_ppw_api_lookup', 'apwb_ideal_postcode_lookup' );
add_action( 'wp_ajax_nopriv_ppw_api_lookup', 'apwb_ideal_postcode_lookup' );

/** 
 * Register 'aphinity/pricing-wizard' block.
 * 
 * @since	1.0.0
 */
function apwb_dynamic_register_block() {

    // Only load if Gutenberg is available.
    if ( !function_exists( 'register_block_type' ) ) {
        return;
    }

    // automatically load dependencies and version
    $asset_file = include( APWB_DIR_PATH . 'build/index.asset.php');
    $view_asset_file = include( APWB_DIR_PATH . 'build/view.asset.php');
 
    wp_register_script(
        'apwb-dynamic-js',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_register_script(
        'apwb-dynamic-view-js',
        plugins_url( 'build/view.js', __FILE__ ),
        $view_asset_file['dependencies'],
        $view_asset_file['version']
    );
 
    register_block_type( __DIR__, array(
        'api_version' => 2,
        'editor_script' => 'apwb-dynamic-js',
        'render_callback' => 'apwb_dynamic_render_callback'
    ) );
 
}
add_action( 'init', 'apwb_dynamic_register_block' );