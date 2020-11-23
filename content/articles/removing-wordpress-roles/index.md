---
title: Removing unnecessary Wordpress roles
date: 2020-11-21
subject: ["tutorial", "wordpress"]
author: Nick La Rosa
featimg: users.png
---

A recent wordpress job I have worked on involved a significant amount of security testing for a Wordpress install using Woocommerce, YAOST and a few other smaller plugins. Entire reports and testing environemtns had to be setup for each user role possible in the database. Both Yoast and Woocommerce setup custom roles by default, and rather than do any paper work on redundant roles, I decided to just remove them. As we were using only the <strong>Customer</strong> and <strong>Adminstrator</strong>, I needed to find a way to remove the following roles.

<ul>
<li>Subscriber</li>
<li>Contributor</li>
<li>Author</li>
<li>Editor</li>
<li>Shop Manager</li>
<li>WPSEO Manager</li>
<li>WPSEO Editor</li>
</ul>

The following code did the trick. Add this to any custom plugin file or the funcitons.php file within your theme.

```
add_action('admin_menu', 'remove_unnecessary_roles');

function remove_unnecessary_roles()
{
	global $wp_roles;

	$roles_to_remove = array('subscriber', 'contributor', 'author', 'editor', 'shop_manager', 'wpseo_manager', 'wpseo_editor');

	foreach ($roles_to_remove as $role) {
		if (isset($wp_roles->roles[$role])) {
			$wp_roles->remove_role($role);
		}
	}
}
```
