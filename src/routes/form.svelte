<script lang="ts">
  import EmailInputField from '$lib/components/EmailInputField.svelte';
  import TextArea from '$lib/components/TextArea.svelte';
  import TextInputField from '$lib/components/TextInputField.svelte';
  let name = '';
  let email = '';
  let message = '';
  let errors: {
    name?: string;
    email?: string;
    message?: string;
  };
  $: errors = {};

  function clearFormFields() {
    name = '';
    email = '';
    message = '';
  }

  function handleSubmit() {
    console.log('Details: ', { name, email, message });
    clearFormFields();
  }
  $: submitting = false;
</script>

<form on:submit|preventDefault={handleSubmit}>
  <TextInputField
    value={name}
    id="form-name"
    placeholder="Blake Jones"
    title="Name"
    error={errors?.name ?? null}
    on:update={(event) => {
      name = event.detail;
    }}
    style="padding-bottom:1rem"
  />
  <EmailInputField
    value={email}
    id="form-email"
    placeholder="blake@example.com"
    title="Email"
    error={errors?.email ?? null}
    on:update={(event) => {
      email = event.detail;
    }}
    style="padding-bottom:1rem"
  />
  <TextArea
    value={message}
    id="form-message"
    placeholder="Enter your message here"
    title="Message"
    error={errors?.message ?? null}
    on:update={(event) => {
      message = event.detail;
    }}
    style="padding-bottom:1rem"
  />
  <button type="submit" disabled={submitting}>Submit form</button>
</form>
