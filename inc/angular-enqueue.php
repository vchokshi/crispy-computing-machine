<?php

class angular_enqueue {

	function init() {

		add_action( 'wp_enqueue_scripts', array( $this, 'angular_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'angular_styles' ) );

	}

	function angular_scripts() {

		wp_enqueue_script( 'angular_core', get_template_directory_uri().'/bower_components/angular/angular.js', array( 'jquery' ), null, false );
		wp_enqueue_script( 'bootstrap-js', get_template_directory_uri().'/bower_components/bootstrap/dist/js/bootstrap.js', array( 'jquery' ), null, false );
		wp_enqueue_script( 'chart-js', get_template_directory_uri().'/bower_components/chart.js/dist/Chart.js', array( 'jquery' ), null, false );

		wp_enqueue_script( 'angular_bootstrap', get_template_directory_uri().'/bower_components/angular-bootstrap/ui-bootstrap-tpls.js', array( 'angular_core' ), null, false );

		wp_enqueue_script( 'angular_animate', get_template_directory_uri().'/bower_components/angular-animate/angular-animate.js', array( 'angular_core' ), null, false );
		wp_enqueue_script( 'angular_resource', get_template_directory_uri().'/bower_components/angular-resource/angular-resource.js', array( 'angular_core' ), null, false );
		wp_enqueue_script( 'angular_touch', get_template_directory_uri().'/bower_components/angular-touch/angular-touch.js', array( 'angular_core' ), null, false );
		wp_enqueue_script( 'angular_ui-router', get_template_directory_uri().'/bower_components/angular-ui-router/release/angular-ui-router.min.js', array( 'angular_core' ), null, false );
		wp_enqueue_script( 'angular_ngStorage', get_template_directory_uri().'/bower_components/ngstorage/ngStorage.js', array( 'angular_core' ), null, false );
		wp_enqueue_script( 'angular_ng-password-strength', get_template_directory_uri().'/bower_components/ng-password-strength/dist/scripts/ng-password-strength.js', array( 'angular_core' ), null, false );
		wp_enqueue_script( 'angular_chart-js', get_template_directory_uri().'/node_modules/angular-chart.js/dist/angular-chart.js', array( 'angular_core' ), null, false );

		wp_enqueue_script( 'unify_theme', get_template_directory_uri().'/assets/unify.js', array( 'jquery' ), null, false );
		wp_enqueue_script( 'angular_theme', get_template_directory_uri().'/app.js', array( 'angular_core' ), null, false );
		//wp_enqueue_script( 'angular_theme', get_template_directory_uri().'/assets/js/angular-app.js', array( 'angular_core' ), null, false );

		wp_localize_script( 'angular_theme', 'ajaxInfo',
			array(

				'api_url'			 => get_bloginfo('url') . '/' . rest_get_url_prefix() . '/wp/v2/',
				'template_directory' => get_template_directory_uri() . '/',
				'nonce'				 => wp_create_nonce( 'wp_rest' ),
				'is_admin'			 => current_user_can('administrator')

			)
		);

	}

	function angular_styles() {
		wp_enqueue_style( 'bootstrap', get_template_directory_uri().'/bower_components/bootstrap/dist/css/bootstrap.css', array(), null, 'all' );
		wp_enqueue_style( 'bootstrap-switch', get_template_directory_uri().'/bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css', array(), null, 'all' );
		wp_enqueue_style( 'font-awesome', get_template_directory_uri().'/bower_components/font-awesome/css/font-awesome.min.css', array(), null, 'all' );

		wp_enqueue_style( 'angularStyles', get_template_directory_uri().'/style.css', array(), null, 'all' );

	}

}


?>
