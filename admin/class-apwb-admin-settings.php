<?php

/**
 * The admin settings of the plugin.
 *
 * @link       https://www.aphinity.co.uk/
 * @since      1.0.0
 *
 * @package    Pricing_Wizard
 * @subpackage Pricing_Wizard/admin
 */
class Apwb_Admin_settings {
	

	/**
	 * Add the menu to the Plugins set of menu items
	 * 
	 * @since	1.0.0
	 */
	public function setup_plugin_options_menu() {

		add_plugins_page(
			'Pricing Wizard Config', 	// page_title
			'Pricing Wizard Config',	// menu_title	
			'manage_options',			// capability
			'pricing_wizard_config',	// menu_slug
			array( $this, 'render_settings_page_content') // function
		);

	}


	/**
	 * Renders a simple page to display for the theme menu defined above.
	 * 
	 * @since	1.0.0
	 */
	public function render_settings_page_content( $active_tab = '' ) {
		?>
		<!-- Create a header in the default WordPress 'wrap' container -->
		<div class="apwb-settings-wrap">

			<h2><?php _e( 'Pricing Wizard Config', 'pricing-wizard' ); ?></h2>
			<?php settings_errors(); ?>

			<?php if( isset( $_GET[ 'tab' ] ) ) {
				$active_tab = $_GET[ 'tab' ];
			} else if( $active_tab == 'ideal_api_key' ) {
				$active_tab = 'ideal_api_key';
			} else {
				$active_tab = 'welcome_options';
			} // end if/else ?>

			<h2 class="nav-tab-wrapper">
				<a href="?page=pricing_wizard_config&tab=welcome_options" class="nav-tab <?php echo $active_tab == 'welcome_options' ? 'nav-tab-active' : ''; ?>"><?php _e( 'Welcome, ', 'pricing_wizard' ) . get_current_user_id(); ?></a>
				<a href="?page=pricing_wizard_config&tab=ideal_api_key" class="nav-tab <?php echo $active_tab == 'ideal_api_key' ? 'nav-tab-active' : ''; ?>"><?php _e( 'Settings', 'pricing_wizard' ); ?></a>
			</h2>

			<form method="post" action="options.php">
				<?php

				if( $active_tab == 'welcome_options' ) {

					settings_fields( 'wppb_demo_welcome_options' );
					do_settings_sections( 'wppb_demo_welcome_options' );

				} else {

					settings_fields( 'wppb_demo_ideal_api_key' );
					do_settings_sections( 'wppb_demo_ideal_api_key' );

				} // end if/else

				submit_button();

				?>
			</form>

		</div><!-- /.wrap -->
	<?php
	}

}