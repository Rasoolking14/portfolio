<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Rasool Fredericks - Front-End Developer and Web Development student at Life-Choices Academy. Building responsive, accessible user interfaces with HTML, CSS, JavaScript, React and Vue.js.">
    <meta name="author" content="Rasool Fredericks">
    <link rel="canonical" href="<?php echo esc_url(home_url('/')); ?>">
    <meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)">
    <meta name="theme-color" content="#F6F6F6" media="(prefers-color-scheme: light)">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Rasool Fredericks - Portfolio">
    <meta property="og:title" content="Rasool Fredericks - Front-End Developer">
    <meta property="og:description" content="Building responsive, accessible user interfaces with HTML, CSS, JavaScript, React and Vue.js.">
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
    <meta property="og:image" content="<?php echo esc_url(get_template_directory_uri() . '/assets/profile.png'); ?>">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Rasool Fredericks - Front-End Developer">
    <meta name="twitter:description" content="Building responsive, accessible user interfaces with HTML, CSS, JavaScript, React and Vue.js.">
    <meta name="twitter:image" content="<?php echo esc_url(get_template_directory_uri() . '/assets/profile.png'); ?>">

    <!-- Icons -->
    <link rel="icon" type="image/svg+xml" href="<?php echo esc_url(get_template_directory_uri() . '/assets/favicon.svg'); ?>">
    <link rel="apple-touch-icon" href="<?php echo esc_url(get_template_directory_uri() . '/assets/profile.png'); ?>">

    <!-- Structured data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rasool Fredericks",
        "jobTitle": "Front-End Developer",
        "email": "mailto:fredericksrasool11@gmail.com",
        "url": "<?php echo esc_url(home_url('/')); ?>",
        "knowsAbout": ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Responsive Design", "Git", "REST APIs"],
        "sameAs": [
            "https://www.linkedin.com/in/rasool-fredericks",
            "https://github.com/Rasoolking14"
        ]
    }
    </script>

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
