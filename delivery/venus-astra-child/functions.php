<?php
/**
 * Venus — Méditerranée scientifique : thème enfant d'Astra
 *
 * Ce thème enfant applique la nouvelle direction artistique
 * « Méditerranée scientifique » au site laboratoiresvenus.com
 * tout en restant 100 % compatible avec Astra et Elementor.
 *
 * @package venus-mediterranee
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Charge le style du parent puis celui de l'enfant, plus les Google Fonts.
 */
add_action(
	'wp_enqueue_scripts',
	function () {
		$parent_handle = 'astra-theme-css';

		// Google Fonts — Cormorant Garamond + Inter.
		wp_enqueue_style(
			'venus-google-fonts',
			'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap',
			array(),
			null
		);

		// Style enfant.
		wp_enqueue_style(
			'venus-mediterranee',
			get_stylesheet_directory_uri() . '/style.css',
			array( $parent_handle ),
			wp_get_theme()->get( 'Version' )
		);
	},
	20
);

/**
 * Shortcode [venus_eyebrow text="..."]
 * Petit label en haut de section : trait or doré + texte uppercase.
 */
add_shortcode(
	'venus_eyebrow',
	function ( $atts ) {
		$atts = shortcode_atts( array( 'text' => '' ), $atts );
		return sprintf(
			'<p class="venus-eyebrow"><span class="venus-hairline"></span>%s</p>',
			esc_html( $atts['text'] )
		);
	}
);

/**
 * Shortcode [venus_display]Quarante-quatre ans <em>d'une science familière.</em>[/venus_display]
 */
add_shortcode(
	'venus_display',
	function ( $atts, $content = '' ) {
		return sprintf( '<h2 class="venus-display">%s</h2>', wp_kses_post( $content ) );
	}
);

/**
 * Topbar « Une pharmacopée méditerranéenne — Depuis 1981 »
 * inséré juste avant le header.
 */
add_action(
	'astra_header_before',
	function () {
		echo '<div class="ast-above-header-bar">Une pharmacopée méditerranéenne — Depuis 1981 · Algérie</div>';
	}
);

/**
 * Forcer la couleur de fond global à l'ivoire Venus.
 */
add_action(
	'wp_head',
	function () {
		echo '<style>body{background:#F4EFE6 !important;}</style>';
	},
	100
);
