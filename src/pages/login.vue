<template>
  <div>
    <q-input
      v-model="form.email"
      placeholder="email"
      @blur="$v.form.email.$touch"
      @keyup.enter="submit"
      :error="$v.form.email.$error"
    />
   <q-input
      v-model="form.pass"
      placeholder="password"
      @blur="$v.form.pass.$touch"
      @keyup.enter="submit"
      :error="$v.form.pass.$error"
    />
    <q-btn color="primary" @click="submit">Submit</q-btn>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators"
import { Notify } from "quasar"
import auth from "../auth"

export default {
	data() {
		return {
			form: {
				email: "a@a.com",
				pass: "asdfasdf",
			},
		}
	},
	validations: {
		form: {
			email: { required, email },
			pass: { required },
		},
	},
	methods: {
		submit() {
			this.$v.form.$touch()

			if (this.$v.form.$error) {
				Notify.create("Please review fields again.")
				debugger
				return
			}
			auth.login(this.form.email, this.form.pass, loggedIn => {
				if (!loggedIn) {
					this.error = true
				} else {
					console.log(loggedIn)
					router.push({ path: "profile" })

					// this.$router.replace(
					// 	this.$route.query.redirect || "/profile",
					// )
				}
			})
		},
	},
	directives: {
		focus: {
			// directive definition
			inserted: function(el) {
				el.focus()
			},
		},
	},
}
</script>

<style>
.error {
	color: red;
}
</style>