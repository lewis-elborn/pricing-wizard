<?php

/**
 * The admin of the plugin.
 *
 * @link       https://www.aphinity.co.uk/
 * @since      1.0.0
 *
 * @package    Pricing_Wizard
 * @subpackage Pricing_Wizard/admin
 */
class Apwb_Admin { 

	/**
	 * Registers the admin settings and page.
	 * 
	 * @since	1.0.0
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) .  'admin/class-apwb-admin-settings.php';

	}

}