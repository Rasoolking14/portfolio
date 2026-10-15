<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Rasool Fredericks - Senior Full-Stack Engineer with 8+ years building scalable, cloud-native web applications. React, Next.js, Node.js, TypeScript, AWS and PostgreSQL.">
    <meta name="author" content="Rasool Fredericks">
    <link rel="canonical" href="<?php echo esc_url(home_url('/')); ?>">
    <meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)">
    <meta name="theme-color" content="#F6F6F6" media="(prefers-color-scheme: light)">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Rasool Fredericks - Portfolio">
    <meta property="og:title" content="Rasool Fredericks - Senior Full-Stack Engineer">
    <meta property="og:description" content="Building scalable, cloud-native web applications with React, Node.js and AWS.">
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
    <meta property="og:image" content="<?php echo esc_url(get_template_directory_uri() . '/assets/profile.png'); ?>">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Rasool Fredericks - Senior Full-Stack Engineer">
    <meta name="twitter:description" content="Building scalable, cloud-native web applications with React, Node.js and AWS.">
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
        "jobTitle": "Senior Full-Stack Engineer",
        "email": "mailto:fredericksrasool11@gmail.com",
        "url": "<?php echo esc_url(home_url('/')); ?>",
        "knowsAbout": ["React", "Next.js", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
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
