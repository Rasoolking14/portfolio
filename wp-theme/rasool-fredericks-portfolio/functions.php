<?php
function rf_portfolio_enqueue_assets() {
    wp_enqueue_style('rf-portfolio-main', get_template_directory_uri() . '/assets/styles.css', array(), '1.0.0');
    wp_enqueue_script('rf-portfolio-main', get_template_directory_uri() . '/assets/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'rf_portfolio_enqueue_assets');
