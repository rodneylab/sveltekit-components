<script lang="ts">
	import { EmailInputField, PasswordInputField, TextArea, TextInputField } from '$lib';

	let name = '';
	let email = '';
	let message = '';
	let password = '';
	let errors: {
		name?: string;
		email?: string;
		message?: string;
		password?: string;
	};
	$: errors = {};

	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	function clearFormFields() {
		name = '';
		email = '';
		message = '';
	}

	function validateInputs() {
		if (name.trim() === '') {
			errors = { ...errors, name: 'Enter your name' };
		}
		if (!emailRegex.test(email)) {
			errors = { ...errors, email: 'Enter a valid email' };
		}
		if (message.trim() === '') {
			errors = { ...errors, message: 'Enter a message' };
		} else if (message.length > 256) {
			errors = { ...errors, message: 'Enter a shorter message' };
		}
	}

	function handleSubmit() {
		validateInputs();
		console.log('Details: ', { name, email, message });
		clearFormFields();
	}
	$: submitting = false;
</script>

<svelte:head><title>Form Fields</title></svelte:head>

<main class="container">
	<h1>Form Fields</h1>
	<h2>Comment Form Example</h2>
	<form on:submit|preventDefault={handleSubmit}>
		<TextInputField
			name="name"
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
			name="email"
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
			name="message"
			value={message}
			id="form-message"
			placeholder="Enter your message here"
			title="Message"
			spellcheck
			error={errors?.message ?? null}
			on:update={(event) => {
				message = event.detail;
			}}
			style="padding-bottom:1rem"
		/>
		<button type="submit" disabled={submitting}>Submit form</button>
	</form>

	<h2>Login Form Example</h2>
	<form on:submit|preventDefault={handleSubmit}>
		<EmailInputField
			name="email"
			value={email}
			id="login-email"
			placeholder="blake@example.com"
			title="Email"
			error={errors?.email ?? null}
			on:update={(event) => {
				email = event.detail;
			}}
			style="padding-bottom:1rem"
		/>
		<PasswordInputField
			name="password"
			value={password}
			id="login-password"
			placeholder="P@$sw0rD"
			title="Password"
			error={errors?.password ?? null}
			on:update={(event) => {
				password = event.detail;
			}}
			style="padding-bottom:1rem;border-style:none"
		/>
		<button type="submit" disabled={submitting}>Submit form</button>
	</form>
</main>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 20rem;
		margin: 0 auto;
	}
</style>
