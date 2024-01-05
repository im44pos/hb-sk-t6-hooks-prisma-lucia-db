<script lang="ts">
  import { enhance } from "$app/forms";

  import type { PageData } from "./$types";
  export let data: PageData;

  $: ({ notifications } = data);

  import { page } from "$app/stores";

</script>

<!-- <h1>Home page</h1><br> -->

<h2>Welcome user: {$page.data.username}</h2>
<p>From company : {$page.data.company_identifier}</p>
<!-- <p>From company : {$page.data.company_name}</p> -->
<p>With status  : {$page.data.state}</p>

<img
  src="Logo_definitief_possibilities_25.webp"
  alt="QWisioN logo: Imagine Possibilities"
/>

<!-- Notifications content: -->
<div class="grid">
<!-- Show all notifications, enable edit/delete notification -->
<div>
    <h2><strong><u>Notifications:</u></strong></h2>
    {#each notifications.reverse() as notification}
      <form action="?/deleteNotification&id={notification.id}" method="POST">
        <notification>
            <!-- Show notification -->
            <header>{notification.title}</header>
            <p>
                {notification.content}
            </p>
            <!-- <p>{notification.slug}</p> -->
            <!-- <p>{notification.published}</p> -->
            
            <!-- <form action="?/deleteNotification&id={notification.id}" method="POST"> -->
                <!-- // // Edit notification -->
                <a href="/{notification.id}" 
                    role="button" 
                    class="outline constrast" 
                    style="width: 100%;">
                    Edit Notification
                </a>
                <!-- // // Delete notification -->
                <button type="submit" class="outline secondary">Delete Notification</button>
            <!-- </form> -->
        </notification>
      </form>
      <br>
    {/each}
</div>
<!-- // // Create/add new notification -->
<form action="?/createNotification" method="POST">
    <h3>New Notification</h3>
    <label for="title"> Title </label>
    <input type="text" id="title" name="title" />
    
    <label for="content"> Content </label>
    <textarea id="content" name="content" rows={5} />

    <label for="slug"> Slug </label>
    <input type="text" id="slug" name="slug" />

    <label for="published"> Published </label>
    <input type="checkbox" id="published" name="published" />
    
    <button type="submit">Add Notification</button>
</form>
</div>


<style>
  h2, notification {
    text-align: center;
  }
  p {
    text-align: center;
  }

  /* :global(body) {
    margin: 0;
  }

  div {
    width: 100vw;
    height: 100vh;
    background: rgb(13, 19, 32);
    background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
  } */
</style>
