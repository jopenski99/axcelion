<template>
  <q-card class="q-pa-md full-width">
    <q-card-section>
      <div class="text-h6">Use WebAuthn</div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="primary" label="Register" @click="register" />
      <q-btn color="primary" label="Login" @click="login" />
    </q-card-actions>
  </q-card>
</template>

<script> 
export default {
  name: 'WebAuthn',
  data() {
    return {
      credentials: null,
    }
  },
  methods: {
    async register() {
      const publicKeyCredentialRequestOptions = {
        challenge: Uint8Array.from(window.crypto.getRandomValues(new Uint8Array(16)), c => c.toString(16).padStart(2, '0')),
        rp: {
          name: 'Axcelion',
        },
        user: {
          id: Uint8Array.from('user-id', c => c.charCodeAt(0)),
          name: 'John Doe',
          displayName: 'John Doe',
        },
        pubKeyCredParams: [
          {
            type: 'public-key',
            alg: -7,
          },
        ],
        attestation: 'direct',
        authenticatorSelection: {
          authenticatorAttachment: 'platform',
        },
      }

      try {
        const credential = await navigator.credentials.create({ publicKey: publicKeyCredentialRequestOptions })
        this.credentials = credential
      } catch (error) {
        console.log(error)
      }
    },
    async login() {
      const publicKeyCredentialRequestOptions = {
        challenge: Uint8Array.from(window.crypto.getRandomValues(new Uint8Array(16)), c => c.toString(16).padStart(2, '0')),
        allowCredentials: [
          {
            type: 'public-key',
            id: this.credentials.id,
            transports: ['internal'],
          },
        ],
        rpId: 'localhost',
        timeout: 60000,
        userVerification: 'required',
      }

      try {
        const credential = await navigator.credentials.get({ publicKey: publicKeyCredentialRequestOptions })
        console.log(credential)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
