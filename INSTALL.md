<!DOCTYPE html>
<html class="" lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="INSTALL.md · master · agetic / sedes-sssro-backend" property="og:title">
<meta content="Sistema backend del Servicio de Salud Social Rural Obligatorio (SEDES) para registrar los internados que hacen los estudiantes y generar su resolución administrativa necesaria para su titulación en el Sistema..." property="og:description">
<meta content="https://gitlab.geo.gob.bo/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="og:image">
<meta content="https://gitlab.geo.gob.bo/agetic/sedes-sssro-backend/blob/master/INSTALL.md" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="INSTALL.md · master · agetic / sedes-sssro-backend" property="twitter:title">
<meta content="Sistema backend del Servicio de Salud Social Rural Obligatorio (SEDES) para registrar los internados que hacen los estudiantes y generar su resolución administrativa necesaria para su titulación en el Sistema..." property="twitter:description">
<meta content="https://gitlab.geo.gob.bo/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="twitter:image">

<title>INSTALL.md · master · agetic / sedes-sssro-backend · GitLab</title>
<meta content="Sistema backend del Servicio de Salud Social Rural Obligatorio (SEDES) para registrar los internados que hacen los estudiantes y generar su resolución administrativa necesaria para su titulación en el Sistema..." name="description">
<link rel="shortcut icon" type="image/x-icon" href="/assets/favicon-075eba76312e8421991a0c1f89a89ee81678bcde72319dd3e8047e2a47cd3a42.ico" />
<link rel="stylesheet" media="all" href="/assets/application-b82c159e67a3d15c3f67bf6b7968181447bd0473e3acdf3b874759239ab1296b.css" />
<link rel="stylesheet" media="print" href="/assets/print-9c3a1eb4a2f45c9f3d7dd4de03f14c2e6b921e757168b595d7f161bbc320fc05.css" />
<script src="/assets/application-b6e6a0ec5d9fa435390d9f3cd075c95e666cffbe02f641b8b7cdcd9f3c168ed3.js"></script>
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="w2kKvFiuUa5x9EhhSl4CQN8HStgTWH7+SJ/evzcAR0iLMfUWz34gC5ITpHN9SRGKV4+McXAScAZF6hy3sm6ilQ==" />
<meta content="origin-when-cross-origin" name="referrer">
<meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
<meta content="#474D57" name="theme-color">
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-5a9cee0e8a51212e70b90c87c12f382c428870c0ff67d1eb034d884b78d2dae7.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-a6eec6aeb9da138e507593b464fdac213047e49d3093fc30e90d9a995df83ba3.png" sizes="76x76" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-retina-72e2aadf86513a56e050e7f0f2355deaa19cc17ed97bbe5147847f2748e5a3e3.png" sizes="120x120" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-retina-8ebe416f5313483d9c1bc772b5bbe03ecad52a54eba443e5215a22caed2a16a2.png" sizes="152x152" />
<link color="rgb(226, 67, 41)" href="/assets/logo-d36b5212042cebc89b96df4bf6ac24e43db316143e89926c0db839ff694d2de4.svg" rel="mask-icon">
<meta content="/assets/msapplication-tile-1196ec67452f618d39cdd85e2e3a542f76574c071051ae7effbfde01710eb17d.png" name="msapplication-TileImage">
<meta content="#30353E" name="msapplication-TileColor">




</head>

<body class="ui_charcoal" data-group="" data-page="projects:blob:show" data-project="sedes-sssro-backend">
<script>
//<![CDATA[
window.gon={};gon.api_version="v3";gon.default_avatar_url="https:\/\/gitlab.geo.gob.bo\/assets\/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png";gon.max_file_size=10;gon.relative_url_root="";gon.shortcuts_path="\/help\/shortcuts";gon.user_color_scheme="white";gon.award_menu_url="\/emojis";gon.katex_css_url="\/assets\/katex-e46cafe9c3fa73920a7c2c063ee8bb0613e0cf85fd96a3aea25f8419c4bfcfba.css";gon.katex_js_url="\/assets\/katex-04bcf56379fcda0ee7c7a63f71d0fc15ffd2e014d017cd9d51fd6554dfccf40a.js";gon.current_user_id=130;
//]]>
</script>
<script>
  window.project_uploads_path = "/agetic/sedes-sssro-backend/uploads";
  window.preview_markdown_path = "/agetic/sedes-sssro-backend/preview_markdown";
</script>

<header class="navbar navbar-fixed-top navbar-gitlab with-horizontal-nav">
<a class="sr-only gl-accessibility" href="#content-body" tabindex="1">Skip to content</a>
<div class="container-fluid">
<div class="header-content">
<button aria-label="Toggle global navigation" class="side-nav-toggle" type="button">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-bars"></i>
</button>
<button class="navbar-toggle" type="button">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-ellipsis-v"></i>
</button>
<div class="navbar-collapse collapse">
<ul class="nav navbar-nav">
<li class="hidden-sm hidden-xs">
<div class="has-location-badge search search-form">
<form class="navbar-form" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><div class="search-input-container">
<div class="location-badge">This project</div>
<div class="search-input-wrap">
<div class="dropdown" data-url="/search/autocomplete">
<input type="search" name="search" id="search" placeholder="Search" class="search-input dropdown-menu-toggle no-outline js-search-dashboard-options" spellcheck="false" tabindex="1" autocomplete="off" data-toggle="dropdown" data-issues-path="https://gitlab.geo.gob.bo/dashboard/issues" data-mr-path="https://gitlab.geo.gob.bo/dashboard/merge_requests" />
<div class="dropdown-menu dropdown-select">
<div class="dropdown-content"><ul>
<li>
<a class="is-focused dropdown-menu-empty-link">
Loading...
</a>
</li>
</ul>
</div><div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
<i class="search-icon"></i>
<i class="clear-icon js-clear-input"></i>
</div>
</div>
</div>
<input type="hidden" name="group_id" id="group_id" class="js-search-group-options" />
<input type="hidden" name="project_id" id="search_project_id" value="695" class="js-search-project-options" data-project-path="sedes-sssro-backend" data-name="sedes-sssro-backend" data-issues-path="/agetic/sedes-sssro-backend/issues" data-mr-path="/agetic/sedes-sssro-backend/merge_requests" />
<input type="hidden" name="search_code" id="search_code" value="true" />
<input type="hidden" name="repository_ref" id="repository_ref" value="master" />

<div class="search-autocomplete-opts hide" data-autocomplete-path="/search/autocomplete" data-autocomplete-project-id="695" data-autocomplete-project-ref="master"></div>
</form></div>

</li>
<li class="visible-sm visible-xs">
<a title="Search" aria-label="Search" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/search"><i class="fa fa-search"></i>
</a></li>
<li>
<a title="Todos" aria-label="Todos" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/dashboard/todos"><i class="fa fa-bell fa-fw"></i>
<span class="badge hidden todos-pending-count">
0
</span>
</a></li>
<li class="header-user dropdown">
<a class="header-user-dropdown-toggle" data-toggle="dropdown" href="/calvarado"><img width="26" height="26" class="header-user-avatar" src="https://secure.gravatar.com/avatar/5ad6373ca57880c2ea969f0fcec55b2a?s=52&amp;d=identicon" alt="5ad6373ca57880c2ea969f0fcec55b2a?s=52&amp;d=identicon" />
<i class="fa fa-caret-down"></i>
</a><div class="dropdown-menu-nav dropdown-menu-align-right">
<ul>
<li>
<a class="profile-link" aria-label="Profile" data-user="calvarado" href="/calvarado">Profile</a>
</li>
<li>
<a aria-label="Profile Settings" href="/profile">Profile Settings</a>
</li>
<li>
<a aria-label="Help" href="/help">Help</a>
</li>
<li class="divider"></li>
<li>
<a class="sign-out-link" aria-label="Sign out" rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a>
</li>
</ul>
</div>
</li>
</ul>
</div>
<h1 class="title"><span><a href="/agetic">agetic</a></span> / <a class="project-item-select-holder" href="/agetic/sedes-sssro-backend">sedes-sssro-backend</a><button name="button" type="button" class="dropdown-toggle-caret js-projects-dropdown-toggle" aria-label="Toggle switch project dropdown" data-target=".js-dropdown-menu-projects" data-toggle="dropdown"><i class="fa fa-chevron-down"></i></button></h1>
<div class="header-logo">
<a class="home" title="Dashboard" id="logo" href="/"><svg width="36" height="36" class="tanuki-logo">
  <path class="tanuki-shape tanuki-left-ear" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"/>
  <path class="tanuki-shape tanuki-right-ear" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"/>
  <path class="tanuki-shape tanuki-nose" fill="#e24329" d="M18,34.38 3,14 33,14 Z"/>
  <path class="tanuki-shape tanuki-left-eye" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"/>
  <path class="tanuki-shape tanuki-right-eye" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"/>
  <path class="tanuki-shape tanuki-left-cheek" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"/>
  <path class="tanuki-shape tanuki-right-cheek" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"/>
</svg>

</a></div>
<div class="js-dropdown-menu-projects">
<div class="dropdown-menu dropdown-select dropdown-menu-projects">
<div class="dropdown-title"><span>Go to a project</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i class="fa fa-times dropdown-menu-close-icon"></i></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field" placeholder="Search your projects" autocomplete="off" /><i class="fa fa-search dropdown-input-search"></i><i role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
</div>

</div>
</div>
</header>

<script>
  var findFileURL = "/agetic/sedes-sssro-backend/find_file/master";
</script>

<div class="page-with-sidebar">
<div class="sidebar-wrapper nicescroll">
<div class="sidebar-action-buttons">
<div class="nav-header-btn toggle-nav-collapse" title="Open/Close">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-bars"></i>
</div>
<div class="nav-header-btn pin-nav-btn has-tooltip  js-nav-pin" data-container="body" data-placement="right" title="Pin Navigation">
<span class="sr-only">Toggle navigation pinning</span>
<i class="fa fa-fw fa-thumb-tack"></i>
</div>
</div>
<div class="nav-sidebar">
<ul class="nav">
<li class="active home"><a title="Projects" class="dashboard-shortcuts-projects" href="/dashboard/projects"><span>
Projects
</span>
</a></li><li class=""><a class="dashboard-shortcuts-activity" title="Activity" href="/dashboard/activity"><span>
Activity
</span>
</a></li><li class=""><a title="Groups" href="/dashboard/groups"><span>
Groups
</span>
</a></li><li class=""><a title="Milestones" href="/dashboard/milestones"><span>
Milestones
</span>
</a></li><li class=""><a title="Issues" class="dashboard-shortcuts-issues" href="/dashboard/issues?assignee_id=130"><span>
Issues
<span class="count">0</span>
</span>
</a></li><li class=""><a title="Merge Requests" class="dashboard-shortcuts-merge_requests" href="/dashboard/merge_requests?assignee_id=130"><span>
Merge Requests
<span class="count">0</span>
</span>
</a></li><li class=""><a title="Snippets" href="/dashboard/snippets"><span>
Snippets
</span>
</a></li></ul>
</div>

</div>
<div class="layout-nav">
<div class="container-fluid">
<div class="controls">
<div class="dropdown project-settings-dropdown">
<a class="dropdown-new btn btn-default" data-toggle="dropdown" href="#" id="project-settings-button">
<i class="fa fa-cog"></i>
<i class="fa fa-caret-down"></i>
</a>
<ul class="dropdown-menu dropdown-menu-align-right">
<li class=""><a title="Members" class="team-tab tab" href="/agetic/sedes-sssro-backend/project_members"><span>
Members
</span>
</a></li><li class=""><a title="Groups" href="/agetic/sedes-sssro-backend/group_links"><span>
Groups
</span>
</a></li><li class=""><a title="Deploy Keys" href="/agetic/sedes-sssro-backend/deploy_keys"><span>
Deploy Keys
</span>
</a></li><li class=""><a title="Webhooks" href="/agetic/sedes-sssro-backend/hooks"><span>
Webhooks
</span>
</a></li><li class=""><a title="Services" href="/agetic/sedes-sssro-backend/services"><span>
Services
</span>
</a></li><li class=""><a title="Protected Branches" href="/agetic/sedes-sssro-backend/protected_branches"><span>
Protected Branches
</span>
</a></li><li class=""><a title="Runners" href="/agetic/sedes-sssro-backend/runners"><span>
Runners
</span>
</a></li><li class=""><a title="Variables" href="/agetic/sedes-sssro-backend/variables"><span>
Variables
</span>
</a></li><li class=""><a title="Triggers" href="/agetic/sedes-sssro-backend/triggers"><span>
Triggers
</span>
</a></li><li class=""><a title="CI/CD Pipelines" href="/agetic/sedes-sssro-backend/pipelines/settings"><span>
CI/CD Pipelines
</span>
</a></li>
<li class="divider"></li>
<li>
<a href="/agetic/sedes-sssro-backend/edit">Edit Project
</a></li>
</ul>
</div>
</div>
<div class="nav-control scrolling-tabs-container">
<div class="fade-left">
<i class="fa fa-angle-left"></i>
</div>
<div class="fade-right">
<i class="fa fa-angle-right"></i>
</div>
<ul class="nav-links scrolling-tabs">
<li class="home"><a title="Project" class="shortcuts-project" href="/agetic/sedes-sssro-backend"><span>
Project
</span>
</a></li><li class=""><a title="Activity" class="shortcuts-project-activity" href="/agetic/sedes-sssro-backend/activity"><span>
Activity
</span>
</a></li><li class="active"><a title="Repository" class="shortcuts-tree" href="/agetic/sedes-sssro-backend/tree/master"><span>
Repository
</span>
</a></li><li class=""><a title="Pipelines" class="shortcuts-pipelines" href="/agetic/sedes-sssro-backend/pipelines"><span>
Pipelines
</span>
</a></li><li class=""><a title="Graphs" class="shortcuts-graphs" href="/agetic/sedes-sssro-backend/graphs/master"><span>
Graphs
</span>
</a></li><li class=""><a title="Issues" class="shortcuts-issues" href="/agetic/sedes-sssro-backend/issues"><span>
Issues
<span class="badge count issue_counter">0</span>
</span>
</a></li><li class=""><a title="Merge Requests" class="shortcuts-merge_requests" href="/agetic/sedes-sssro-backend/merge_requests"><span>
Merge Requests
<span class="badge count merge_counter">0</span>
</span>
</a></li><li class=""><a title="Wiki" class="shortcuts-wiki" href="/agetic/sedes-sssro-backend/wikis/home"><span>
Wiki
</span>
</a></li><li class="hidden">
<a title="Network" class="shortcuts-network" href="/agetic/sedes-sssro-backend/network/master">Network
</a></li>
<li class="hidden">
<a class="shortcuts-new-issue" href="/agetic/sedes-sssro-backend/issues/new">Create a new issue
</a></li>
<li class="hidden">
<a title="Builds" class="shortcuts-builds" href="/agetic/sedes-sssro-backend/builds">Builds
</a></li>
<li class="hidden">
<a title="Commits" class="shortcuts-commits" href="/agetic/sedes-sssro-backend/commits/master">Commits
</a></li>
<li class="hidden">
<a title="Issue Boards" class="shortcuts-issue-boards" href="/agetic/sedes-sssro-backend/boards">Issue Boards</a>
</li>
</ul>
</div>

</div>
</div>
<div class="content-wrapper page-with-layout-nav">
<div class="scrolling-tabs-container sub-nav-scroll">
<div class="fade-left">
<i class="fa fa-angle-left"></i>
</div>
<div class="fade-right">
<i class="fa fa-angle-right"></i>
</div>

<div class="nav-links sub-nav scrolling-tabs">
<ul class="container-fluid container-limited">
<li class="active"><a href="/agetic/sedes-sssro-backend/tree/master">Files
</a></li><li class=""><a href="/agetic/sedes-sssro-backend/commits/master">Commits
</a></li><li class=""><a href="/agetic/sedes-sssro-backend/network/master">Network
</a></li><li class=""><a href="/agetic/sedes-sssro-backend/compare?from=master&amp;to=master">Compare
</a></li><li class=""><a href="/agetic/sedes-sssro-backend/branches">Branches
</a></li><li class=""><a href="/agetic/sedes-sssro-backend/tags">Tags
</a></li></ul>
</div>
</div>

<div class="alert-wrapper">


<div class="flash-container flash-container-page">
</div>


</div>
<div class=" ">
<div class="content" id="content-body">

<div class="container-fluid container-limited">

<div class="tree-holder" id="tree-holder">
<div class="nav-block">
<div class="tree-ref-holder">
<form class="project-refs-form" action="/agetic/sedes-sssro-backend/refs/switch" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="destination" id="destination" value="blob" />
<input type="hidden" name="path" id="path" value="INSTALL.md" />
<div class="dropdown">
<button class="dropdown-menu-toggle js-project-refs-dropdown" type="button" data-toggle="dropdown" data-selected="master" data-ref="master" data-refs-url="/agetic/sedes-sssro-backend/refs" data-field-name="ref" data-submit-form-on-click="true"><span class="dropdown-toggle-text ">master</span><i class="fa fa-chevron-down"></i></button>
<div class="dropdown-menu dropdown-menu-selectable">
<div class="dropdown-title"><span>Switch branch/tag</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i class="fa fa-times dropdown-menu-close-icon"></i></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field" placeholder="Search branches and tags" autocomplete="off" /><i class="fa fa-search dropdown-input-search"></i><i role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
</div>
</form>
</div>
<ul class="breadcrumb repo-breadcrumb">
<li>
<a href="/agetic/sedes-sssro-backend/tree/master">sedes-sssro-backend
</a></li>
<li>
<a href="/agetic/sedes-sssro-backend/blob/master/INSTALL.md"><strong>
INSTALL.md
</strong>
</a></li>
</ul>
</div>
<ul class="blob-commit-info hidden-xs">
<li class="commit js-toggle-container" id="commit-9aaf1ceb">
<a href="/jcalizaya"><img class="avatar has-tooltip s36 hidden-xs" alt="Judith Calizaya&#39;s avatar" title="Judith Calizaya" data-container="body" src="https://secure.gravatar.com/avatar/b250efff2974e97d05c779a0dd7d7065?s=72&amp;d=identicon" /></a>
<div class="commit-info-block">
<div class="commit-row-title">
<span class="item-title">
<a class="commit-row-message" href="/agetic/sedes-sssro-backend/commit/9aaf1ceb70f0f6be8df822d51bd6cf596cfce464">ajustes</a>
<span class="commit-row-message visible-xs-inline">
&middot;
9aaf1ceb
</span>
</span>
<div class="commit-actions hidden-xs">
<button class="btn btn-clipboard btn-transparent" data-toggle="tooltip" data-placement="bottom" data-container="body" data-clipboard-text="9aaf1ceb70f0f6be8df822d51bd6cf596cfce464" type="button" title="Copy to clipboard"><i class="fa fa-clipboard"></i></button>
<a class="commit-short-id btn btn-transparent" href="/agetic/sedes-sssro-backend/commit/9aaf1ceb70f0f6be8df822d51bd6cf596cfce464">9aaf1ceb</a>
<a class="btn btn-default" href="/agetic/sedes-sssro-backend/tree/9aaf1ceb70f0f6be8df822d51bd6cf596cfce464">Browse Files</a>
</div>
</div>
<a class="commit-author-link has-tooltip" title="jcalizaya@agetic.gob.bo" href="/jcalizaya">Judith Calizaya</a>
committed
<time class="js-timeago" title="Dec 28, 2016 7:01pm" datetime="2016-12-28T19:01:40Z" data-toggle="tooltip" data-placement="top" data-container="body">2016-12-28 15:01:40 -0400</time>
</div>
</li>

</ul>
<div class="blob-content-holder" id="blob-content-holder">
<article class="file-holder">
<div class="file-title">
<i class="fa fa-file-text-o fa-fw"></i>
<strong>
INSTALL.md
</strong>
<small>
10.8 KB
</small>
<div class="file-actions hidden-xs">
<div class="btn-group tree-btn-group">
<a class="btn btn-sm" target="_blank" href="/agetic/sedes-sssro-backend/raw/master/INSTALL.md">Raw</a>
<a class="btn btn-sm" href="/agetic/sedes-sssro-backend/blame/master/INSTALL.md">Blame</a>
<a class="btn btn-sm" href="/agetic/sedes-sssro-backend/commits/master/INSTALL.md">History</a>
<a class="btn btn-sm" href="/agetic/sedes-sssro-backend/blob/7c25afdd6313555c85d4fadb0647b1cfb0b9b37f/INSTALL.md">Permalink</a>
</div>
<div class="btn-group" role="group">
<a class="btn btn-sm" href="/agetic/sedes-sssro-backend/edit/master/INSTALL.md">Edit</a>
<button name="button" type="submit" class="btn btn-default" data-target="#modal-upload-blob" data-toggle="modal">Replace</button>
<button name="button" type="submit" class="btn btn-remove" data-target="#modal-remove-blob" data-toggle="modal">Delete</button>
</div>

</div>
</div>
<div class="file-content wiki">
<h1 dir="auto">&#x000A;<a id="user-content-servicio-social-de-salud-rural-obligatorio-sedes-backend" class="anchor" href="#servicio-social-de-salud-rural-obligatorio-sedes-backend" aria-hidden="true"></a>Servicio Social de Salud Rural Obligatorio - SEDES (BACKEND)</h1>&#x000A;&#x000A;<h2 dir="auto">&#x000A;<a id="user-content-introducción" class="anchor" href="#introducci%C3%B3n" aria-hidden="true"></a>Introducción</h2>&#x000A;&#x000A;<p dir="auto">A continuación se presentan los pasos necesarios para instalar la aplicación.</p>&#x000A;&#x000A;<h2 dir="auto">&#x000A;<a id="user-content-creación-de-la-base-de-datos" class="anchor" href="#creaci%C3%B3n-de-la-base-de-datos" aria-hidden="true"></a>Creación de la Base de Datos</h2>&#x000A;&#x000A;<p dir="auto">Se debe crear la base de datos para la ejecución del backend, para ello conectarse con el siguiente comando (sólo el primero):</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>psql -U postgres&#x000A;Password <span class="k">for </span>user postgres:&#x000A;psql <span class="o">(</span>9.4.6<span class="o">)</span>&#x000A;Type <span class="s2">"help"</span> <span class="k">for </span>help.&#x000A;&#x000A;<span class="nv">postgres</span><span class="o">=</span><span class="c">#</span>&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Crear un usuario gestor de la base de datos que se creará para el sistema:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">postgres=# </span>CREATE USER nombre_del_usuario_de_base WITH PASSWORD <span class="s1">'escribirlacontraseniaaqui'</span>;&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Para crear la base de datos, ejecutar el siguiente comando dentro de la línea de comandos de postgres:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">postgres=# </span>CREATE DATABASE sedes_sssro_db WITH OWNER sedes_sssro_user;&#x000A;</code></pre>&#x000A;&#x000A;<h2 dir="auto">&#x000A;<a id="user-content-instalación" class="anchor" href="#instalaci%C3%B3n" aria-hidden="true"></a>Instalación</h2>&#x000A;&#x000A;<p dir="auto">Para instalar el proyecto:</p>&#x000A;&#x000A;<p dir="auto">Clonarlo:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>git clone git@gitlab.geo.gob.bo:agetic/sedes-sssro-backend.git&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Ingresar a la carpeta:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span><span class="nb">cd </span>sedes-sssro-backend&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Podemos verificar que estamos en el branch master:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>git status&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Nos devolverá:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code>- On branch master&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto"><code>(Opcional)</code> Si necesitamos trabajar un branch específico (en este ejemplo, el nombre del branch es nombre_del_branch) ejecutamos:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>git checkout nombre_del_branch&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Al volver a verificar el git status:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>git status&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Nos da como respuesta que ya estamos en el branch que queremos:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code>- On branch nombre_del_branch&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Para instalar la aplicación, tiene las siguientes opciones:</p>&#x000A;&#x000A;<h6 dir="auto">&#x000A;<a id="user-content-opción-1" class="anchor" href="#opci%C3%B3n-1" aria-hidden="true"></a>Opción 1</h6>&#x000A;&#x000A;<p dir="auto">Ejecutar el comando <code>npm install</code> de forma normal y después ejecutar <code>npm run parchar</code> para reemplazar los archivos de librerías o módulos que fueron modificados. Si elige esta opción es importante que después <strong>no olvide ejecutar el comando <code>npm run parchar</code></strong>.</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>npm install&#x000A;<span class="gp">$ </span>npm run parchar&#x000A;</code></pre>&#x000A;&#x000A;<h6 dir="auto">&#x000A;<a id="user-content-opción-2" class="anchor" href="#opci%C3%B3n-2" aria-hidden="true"></a>Opción 2</h6>&#x000A;&#x000A;<p dir="auto">Ejecutar <code>npm run instalar</code> que ejecutará los dos pasos anteriores automáticamente (<code>npm install</code> y <code>npm run parchar</code>).</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>npm run instalar&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Ambas opciones descargarán todas las dependencias necesarias y posteriormente reemplazarán los archivos parchados.</p>&#x000A;&#x000A;<h2 dir="auto">&#x000A;<a id="user-content-archivos-de-configuración" class="anchor" href="#archivos-de-configuraci%C3%B3n" aria-hidden="true"></a>Archivos de Configuración</h2>&#x000A;&#x000A;<p dir="auto">Para modificar los datos de conexion a la base de datos y para modificar el puerto de conexion de <strong>desarrollo</strong> realizar una copia del archivo <code>src/config/config.environment.js.sample</code> y cambiar los datos de conexión a la base de datos respectiva, el archivo debería ser nombrado de la siguiente manera:</p>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li><code>src/config/config.development.js</code></li>&#x000A;</ul><p dir="auto">Para modificar los datos de conexion a la base de datos y para modificar el puerto de conexion de <strong>test</strong> realizar una copia del archivo <code>src/config/config.environment.js.sample</code> y cambiar los datos de conexión a la base de datos respectiva, el archivo debería ser nombrado de la siguiente manera:</p>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li><code>src/config/config.test.js</code></li>&#x000A;</ul><p dir="auto">Si se debe hacer correr la aplicación en <strong>producción</strong> realizar una copia del archivo <code>src/config/config.environment.js.sample</code> y cambiar los datos de conexión a la base de datos respectiva, el archivo debería ser nombrado de la siguiente manera:</p>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li><code>src/config/config.production.js</code></li>&#x000A;</ul><p dir="auto">En ambos casos, es importante cambiar lo siguiente:</p>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li><code>nombre de la base de datos</code></li>&#x000A;<li><code>el nombre del usuario</code></li>&#x000A;<li><code>la contraseña</code></li>&#x000A;</ul><p dir="auto">Para modificar los datos de conexión a la base de datos y para modificar el puerto de conexión de testing modificar :</p>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li><code>src/config/config.test.js</code></li>&#x000A;</ul><p dir="auto">Para modificar el acceso (proteccion via CORS)</p>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li><code>src/lib/middlewares.js</code></li>&#x000A;</ul><p dir="auto">Para configurar la conexión a la base de datos de los seeders y migraciones debemos realizar una copia del archivo <code>config/config.js.sample</code> y renombrarlo bajo el nombre <code>config/config.js</code> con los datos necesarios para la conexión a la base de datos (este archivo es utilizado para los seeders y las migraciones).</p>&#x000A;&#x000A;<p dir="auto">Para configurar variables del sistema se debe realizar una copia del archivo <code>config/app.json.sample</code> y renombrarlo bajo el nombre de <code>config/app.json</code>.&#x000A;Para el archivo <code>config/app.json</code> se pueden realizar la siguientes configuraciones:</p>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li>Modificar la configuración para envío de correos, modificar según el ambiente en el que se vaya a levantar la aplicación (development, test, production).</li>&#x000A;<li>Modificar la dirección del frontend con la que se generarán los códigos QR de las credenciales (urlEstudiante).</li>&#x000A;<li>Modificar la dirección del frontend con la que se generarán los códigos QR de las resoluciones administrativas (urlResolucion).</li>&#x000A;<li>Modificar la dirección del frontend que llega al correo electrónico al crear una nueva cuenta de usuario (correo.url).</li>&#x000A;<li>Modificar la dirección del frontend que llega al correo electrónico cuando se solicita recuperación de contraseña (correo.url).</li>&#x000A;</ul><p dir="auto">Modificar de acuerdo al ambiente (development, test, production) en el que se ejecutará la aplicación.</p>&#x000A;&#x000A;<h2 dir="auto">&#x000A;<a id="user-content-iniciar-la-aplicación" class="anchor" href="#iniciar-la-aplicaci%C3%B3n" aria-hidden="true"></a>Iniciar la aplicación</h2>&#x000A;&#x000A;<p dir="auto">Las opciones de ejecución son las siguientes:</p>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li>&#x000A;<strong>npm run setup</strong> genera las tablas necesarias en la base de datos y ejecuta los seders y migrations.</li>&#x000A;<li>&#x000A;<strong>npm run startdev</strong>   levanta el sistema en modo developer, se reinicia en cada cambio realizado en los archivos.</li>&#x000A;<li>&#x000A;<strong>npm start</strong>   levanta el sistema.</li>&#x000A;<li>&#x000A;<strong>npm test</strong>  ejecuta el sistema y las pruebas unitarias y/o de integración en su propia base de datos de acuerdo a configuración.</li>&#x000A;<li>&#x000A;<strong>npm run lint</strong>  ejecuta el eslint para verificar el estandar de programacion, actualmente esta basado en: <code>https://github.com/airbnb/javascript</code>&#x000A;</li>&#x000A;<li>&#x000A;<strong>npm run apidoc</strong>  genera el apidoc del apirest y se lo encuentra en la carpeta public.</li>&#x000A;</ul><p dir="auto"><code>Sólo para ambiente de producción</code></p>&#x000A;&#x000A;<p dir="auto">Para configurar el ambiente de producción de forma global en la máquina en donde se vaya a instalar la aplicación es necesario ejecutar el siguiente comando en la consola:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span><span class="nb">export </span><span class="nv">NODE_ENV</span><span class="o">=</span>production&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto"><strong>Para ejecutar los seeders y las migraciones, ejecutar el siguiente comando, en el path del proyecto:</strong></p>&#x000A;&#x000A;<p dir="auto">Si se está iniciando la aplicacón por pimera vez o si se necesita regenerar la base de datos ejecutar:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>npm run setup&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Esto realizará las siguientes acciones:</p>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li>&#x000A;<p>Regenerar la base de datos</p>&#x000A;&#x000A;<blockquote>&#x000A;<p>Es decir se regenerá la base de datos, este comando debería ser ejecutado sólo una vez  en el ambiente de producción, al instalar la aplicación. Si se ejecuta nuevamente y el sistema ya estaba en uso se perderán todos los datos.</p>&#x000A;</blockquote>&#x000A;</li>&#x000A;<li><p>Ejecutar los seeders</p></li>&#x000A;<li><p>Ejecutar las migraciones</p></li>&#x000A;</ul><p dir="auto">Para iniciar la aplicación, ejecutar:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>npm start&#x000A;</code></pre>&#x000A;&#x000A;<h2 dir="auto">&#x000A;<a id="user-content-configuración-de-servicios-de-interoperabilidad" class="anchor" href="#configuraci%C3%B3n-de-servicios-de-interoperabilidad" aria-hidden="true"></a>Configuración de servicios de interoperabilidad</h2>&#x000A;&#x000A;<p dir="auto">En general, para poder utilizar los servicios de interoperabilidad satisfactoriamente se debe duplicar el archivo <code>config/app.json.sample</code> bajo el nombre <code>config/app.json</code> (si es que no se ha duplicado aún). Y modificar los atributos: servicio_segip, servicio_snis, servicio_sishab con las credenciales de acceso correctas.</p>&#x000A;&#x000A;<p dir="auto">El presente sistema cuenta con los siguientes servicios de interoperabilidad:</p>&#x000A;&#x000A;<h3 dir="auto">&#x000A;<a id="user-content-servicio-web-segip" class="anchor" href="#servicio-web-segip" aria-hidden="true"></a>Servicio Web SEGIP</h3>&#x000A;&#x000A;<p dir="auto">Este proyecto realiza el consumo del servicio web del SEGIP, para obtener y validar los datos de las personas que se registren en el sistema. En el archivo <code>config/app.json</code> se encuentra bajo el nombre de servicio <strong>servicio_segip</strong>.</p>&#x000A;&#x000A;<h3 dir="auto">&#x000A;<a id="user-content-servicio-web-snis" class="anchor" href="#servicio-web-snis" aria-hidden="true"></a>Servicio Web SNIS</h3>&#x000A;&#x000A;<p dir="auto">Este proyecto realiza el consumo del servicio web del SNIS, para obtener los datos de los establecimientos de salud existentes en el país, los mismos que posteriomente serán asignados a algún estudiante que esté realizando su Servicio Social de Salud Rural Obligatorio. En el archivo <code>config/app.json</code> se encuentra bajo el nombre de servicio <strong>servicio_snis</strong>.</p>&#x000A;&#x000A;<h3 dir="auto">&#x000A;<a id="user-content-servicio-web-sishab" class="anchor" href="#servicio-web-sishab" aria-hidden="true"></a>Servicio Web SISHAB</h3>&#x000A;&#x000A;<p dir="auto">Este proyecto está integrado con el Sistema de Habilitación de Estudiantes SISHAB. Esto permite realizar el consumo de las Universidades Privadas registradas en el SISHAB. En el archivo <code>config/app.json</code> se encuentra bajo el nombre de servicio <strong>servicio_sishab</strong>.</p>&#x000A;&#x000A;<h3 dir="auto">&#x000A;<a id="user-content-servicio-web-migración" class="anchor" href="#servicio-web-migraci%C3%B3n" aria-hidden="true"></a>Servicio Web Migración</h3>&#x000A;&#x000A;<p dir="auto">Este proyecto realiza el consumo del servicio web de MIGRACIÓN, para obtener y validar los datos de las personas extranjeras que cuenten con un pasaporte y se encuentren registrados en MIGRACIÓN. En el archivo <code>config/app.json</code> se encuentra bajo el nombre de servicio <strong>servicio_migracion</strong>.</p>&#x000A;&#x000A;<h2 dir="auto">&#x000A;<a id="user-content-configuración-de-supervisor" class="anchor" href="#configuraci%C3%B3n-de-supervisor" aria-hidden="true"></a>Configuración de <strong>supervisor</strong>&#x000A;</h2>&#x000A;&#x000A;<p dir="auto">Si se desea hacer correr la aplicación mediante <code>supervisor</code> se debe realizar la siguiente configuración:</p>&#x000A;&#x000A;<p dir="auto">Navegar hasta la ruta:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span><span class="nb">cd</span> /etc/supervisor/conf.d/&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Crear un archivo para hacer correr la aplicación de backend, en este ejemplo, se definirá el archivo bajo el nombre de <code>sssroBackendDEV</code>:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>sudo touch sssroBackendDEV.conf&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Y colocar el siguiente contenido:</p>&#x000A;&#x000A;<h5 dir="auto">&#x000A;<a id="user-content-ambiente-de-desarrollo" class="anchor" href="#ambiente-de-desarrollo" aria-hidden="true"></a>Ambiente de desarrollo</h5>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="o">[</span>program:sssroBackendDEV]&#x000A;<span class="nb">command</span><span class="o">=</span>npm start&#x000A;<span class="nv">directory</span><span class="o">=</span>/home/usuario/proyectos/SEDES/DEV/sedes-sssro-backend&#x000A;<span class="nv">autostart</span><span class="o">=</span><span class="nb">true&#x000A;</span><span class="nv">autorestart</span><span class="o">=</span><span class="nb">true&#x000A;</span><span class="nv">stderr_logfile</span><span class="o">=</span>/var/log/sssroBackendDEV.err.log&#x000A;<span class="nv">stdout_logfile</span><span class="o">=</span>/var/log/sssroBackendDEV.out.log&#x000A;<span class="nv">user</span><span class="o">=</span>usuario&#x000A;</code></pre>&#x000A;&#x000A;<h5 dir="auto">&#x000A;<a id="user-content-ambiente-de-producción" class="anchor" href="#ambiente-de-producci%C3%B3n" aria-hidden="true"></a>Ambiente de producción</h5>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="o">[</span>program:sssroBackendDEV]&#x000A;<span class="nb">command</span><span class="o">=</span>npm start&#x000A;<span class="nv">directory</span><span class="o">=</span>/home/usuario/proyectos/SEDES/DEV/sedes-sssro-backend&#x000A;<span class="nv">autostart</span><span class="o">=</span><span class="nb">true&#x000A;</span><span class="nv">autorestart</span><span class="o">=</span><span class="nb">true&#x000A;</span><span class="nv">environment</span><span class="o">=</span><span class="nv">NODE_ENV</span><span class="o">=</span>production&#x000A;<span class="nv">stderr_logfile</span><span class="o">=</span>/var/log/sssroBackendDEV.err.log&#x000A;<span class="nv">stdout_logfile</span><span class="o">=</span>/var/log/sssroBackendDEV.out.log&#x000A;<span class="nv">user</span><span class="o">=</span>usuario&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Considerar que el nombre del usuario del equipo puede variar.</p>&#x000A;&#x000A;<p dir="auto">Considerar que la ruta real en la que se encuentra la aplicación puede variar.</p>&#x000A;&#x000A;<p dir="auto"><strong>RAM</strong></p>&#x000A;&#x000A;<p dir="auto">NodeJS por defecto utiliza 1.76GB en máquinas de 64 bits, para aumentar este parámetro es necesario utilizar el siguiente comando: "--max_old_space_size=".</p>&#x000A;&#x000A;<p dir="auto">Para hacer esto, se debe modificar el archivo package.json, en la opción <strong>start</strong>, línea 7 aproximadamente, por ejemplo para utilizar 4GB de RAM cambiar por:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code>...&#x000A;...&#x000A;  <span class="s2">"scripts"</span>: <span class="o">{</span>&#x000A;    <span class="s2">"start"</span>: <span class="s2">"babel-node --max_old_space_size=4096 index.js"</span>,&#x000A;    ...&#x000A;  <span class="o">}</span>&#x000A;...&#x000A;...&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Referencia:</p>&#x000A;&#x000A;<blockquote dir="auto">&#x000A;<p><a href="http://prestonparry.com/articles/IncreaseNodeJSMemorySize/" rel="nofollow noreferrer" target="_blank">http://prestonparry.com/articles/IncreaseNodeJSMemorySize/</a></p>&#x000A;</blockquote>&#x000A;&#x000A;<h3 dir="auto">&#x000A;<a id="user-content-reiniciar-supervisor" class="anchor" href="#reiniciar-supervisor" aria-hidden="true"></a>Reiniciar "supervisor"</h3>&#x000A;&#x000A;<p dir="auto">Reiniciar el servicio "supervisor" para que se ejecute la aplicación:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>sudo /etc/init.d/supervisor restart&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Para verificar que la aplicación este efectivamente corriendo, se puede ejecutar el siguiente comando, y verificar que la aplicación este corriendo en el puerto configurado:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>netstat -ltpn&#x000A;&#x000A;Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name&#x000A;tcp        0      0 0.0.0.0:80              0.0.0.0:<span class="k">*</span>               LISTEN      -               &#x000A;tcp        0      0 0.0.0.0:22              0.0.0.0:<span class="k">*</span>               LISTEN      -               &#x000A;tcp        0      0 0.0.0.0:5432            0.0.0.0:<span class="k">*</span>               LISTEN      -               &#x000A;tcp6       0      0 :::4000                 :::<span class="k">*</span>                    LISTEN      32274/nodejs&#x000A;tcp6       0      0 :::3000                 :::<span class="k">*</span>                    LISTEN      4381/gulp&#x000A;</code></pre>&#x000A;&#x000A;<p dir="auto">Ó se puede revisar las tareas del <code>supervisor</code>, buscar el nombre de la tarea y su respectivo estado:</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight shell" v-pre="true"><code><span class="gp">$ </span>sudo supervisorctl&#x000A;&#x000A;sssroBackendDEV                   RUNNING    pid 4617, uptime 3 days, 21:41:05&#x000A;sssroFrontendDEV                  RUNNING    pid 4380, uptime 3 days, 21:41:36&#x000A;</code></pre>
</div>

</article>
</div>

</div>
<div class="modal" id="modal-remove-blob">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<a class="close" data-dismiss="modal" href="#">×</a>
<h3 class="page-title">Delete INSTALL.md</h3>
</div>
<div class="modal-body">
<form class="form-horizontal js-replace-blob-form js-quick-submit js-requires-input" action="/agetic/sedes-sssro-backend/blob/master/INSTALL.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="delete" /><input type="hidden" name="authenticity_token" value="Rtr8pitpIErZ85nHNJ7pObUDu0ojAIc4+KPIwYT04IUOggMMvLlR7zoUddUDifrzPYt940BKicD11grJAZoFWA==" /><div class="form-group commit_message-group">
<label class="control-label" for="commit_message-4e41f6d37533632eabc9f39d3dbd7121">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-4e41f6d37533632eabc9f39d3dbd7121" class="form-control js-commit-message" placeholder="Delete INSTALL.md" required="required" rows="3">
Delete INSTALL.md</textarea>
</div>
</div>
</div>

<div class="form-group branch">
<label class="control-label" for="target_branch">Target branch</label>
<div class="col-sm-10">
<input type="text" name="target_branch" id="target_branch" value="master" required="required" class="form-control js-target-branch" />
<div class="js-create-merge-request-container">
<div class="checkbox">
<label for="create_merge_request-36490d3e8ba7a7150636844b22bdf609"><input type="checkbox" name="create_merge_request" id="create_merge_request-36490d3e8ba7a7150636844b22bdf609" value="1" class="js-create-merge-request" checked="checked" />
Start a <strong>new merge request</strong> with these changes
</label></div>
</div>
</div>
</div>
<input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch" />

<div class="form-group">
<div class="col-sm-offset-2 col-sm-10">
<button name="button" type="submit" class="btn btn-remove btn-remove-file">Delete file</button>
<a class="btn btn-cancel" data-dismiss="modal" href="#">Cancel</a>
</div>
</div>
</form></div>
</div>
</div>
</div>
<script>
  new NewCommitForm($('.js-replace-blob-form'))
</script>

<div class="modal" id="modal-upload-blob">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<a class="close" data-dismiss="modal" href="#">×</a>
<h3 class="page-title">Replace INSTALL.md</h3>
</div>
<div class="modal-body">
<form class="js-quick-submit js-upload-blob-form form-horizontal" action="/agetic/sedes-sssro-backend/update/master/INSTALL.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="1ffjjO/0QejaYHZ6rDLSR8EOfQEJM6qAfm6ZUdYr3o2drxwmeCQwTTmHmmibJcGNSYa7qGp5pHhzG1tZU0U7UA==" /><div class="dropzone">
<div class="dropzone-previews blob-upload-dropzone-previews">
<p class="dz-message light">
Attach a file by drag &amp; drop or
<a class="markdown-selector" href="#">click to upload</a>
</p>
</div>
</div>
<br>
<div class="alert alert-danger data dropzone-alerts" style="display:none"></div>
<div class="form-group commit_message-group">
<label class="control-label" for="commit_message-2cd48b3795bb850c0aabe35db64bfd6b">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-2cd48b3795bb850c0aabe35db64bfd6b" class="form-control js-commit-message" placeholder="Replace INSTALL.md" required="required" rows="3">
Replace INSTALL.md</textarea>
</div>
</div>
</div>

<div class="form-group branch">
<label class="control-label" for="target_branch">Target branch</label>
<div class="col-sm-10">
<input type="text" name="target_branch" id="target_branch" value="master" required="required" class="form-control js-target-branch" />
<div class="js-create-merge-request-container">
<div class="checkbox">
<label for="create_merge_request-15954e77dd8188d134c7614e4b0c8725"><input type="checkbox" name="create_merge_request" id="create_merge_request-15954e77dd8188d134c7614e4b0c8725" value="1" class="js-create-merge-request" checked="checked" />
Start a <strong>new merge request</strong> with these changes
</label></div>
</div>
</div>
</div>
<input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch" />

<div class="form-actions">
<button name="button" type="submit" class="btn btn-small btn-create btn-upload-file" id="submit-all">Replace file</button>
<a class="btn btn-cancel" data-dismiss="modal" href="#">Cancel</a>
</div>
</form></div>
</div>
</div>
</div>
<script>
  gl.utils.disableButtonIfEmptyField($('.js-upload-blob-form').find('.js-commit-message'), '.btn-upload-file');
  new BlobFileDropzone($('.js-upload-blob-form'), 'put');
  new NewCommitForm($('.js-upload-blob-form'))
</script>

</div>

</div>
</div>
</div>
</div>



</body>
</html>

