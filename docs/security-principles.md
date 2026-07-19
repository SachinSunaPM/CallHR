# Security principles

Security choices for CallHR must be planned and reviewed before they are implemented. These principles guide that work.

## No homemade cryptography

Do not create custom encryption or other cryptography. Cryptography is the technology used to protect information. Use established, maintained security libraries that have been reviewed by security experts.

## End-to-end encryption

End-to-end encryption is a design requirement. It means that only the people in a conversation should be able to read its protected content.

## Store ciphertext, not readable messages

The server should store ciphertext rather than readable message contents. Ciphertext is information that has been encrypted and cannot be understood without the correct key.

## No audio recording in the MVP

Audio calls must not be recorded in the MVP.

## Protect private keys

Private keys must not be stored unencrypted on the server. A private key is a secret value used to protect encrypted information.

## Keep secrets out of Git

Secrets must never be committed to Git. This includes passwords, API keys, tokens, email credentials, and private keys.

## Backend-enforced blocking

Blocking must be enforced by the backend, which is the part of the application that runs on the server. It must not rely only on what the user interface shows.

## Review security choices first

Security choices must be reviewed before implementation. This includes the design, libraries, data storage, and how private information is handled.
