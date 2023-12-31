<script lang="ts">
	import { enhance } from "$app/forms";
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ notification } = data);
</script>

<form action="?/updateNotification" method="POST">
	<h3>Editing: {notification.title}</h3>
	<label for="title"> Title </label>
	<input type="text" id="title" name="title" value={notification.title} />

	<label for="content"> Content </label>
	<textarea id="content" name="content" rows={5} value={notification.content} />
	
	<button type="submit">Update Notification</button>
</form>


<style>
	h3 {
		text-align: center;
	}
	/* p {
		text-align: center;
	} */
</style>