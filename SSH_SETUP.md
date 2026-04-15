# Setting Up SSH Keys for GitHub

This document explains how to generate an SSH key pair and add it to your GitHub account.

## Generating a New SSH Key

1. Open Terminal on your local machine.

2. Paste the text below, substituting your GitHub email address:
   ```bash
   ssh-keygen -t ed25519 -C "cameron@beloveful.com"
   ```

3. When you're prompted to "Enter a file in which to save the key," press Enter to accept the default location.

4. When you're prompted to enter a passphrase, enter a secure passphrase or press Enter to continue without a passphrase.

## Adding Your SSH Key to the ssh-agent

1. Start the ssh-agent in the background:
   ```bash
   eval "$(ssh-agent -s)"
   ```

2. Add your SSH private key to the ssh-agent:
   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```

## Adding Your SSH Key to Your GitHub Account

1. Copy the contents of your public key file:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   
2. Log in to your GitHub account.

3. In the upper-right corner of any page, click your profile photo, then click Settings.

4. In the left sidebar, click SSH and GPG keys.

5. Click New SSH key or Add SSH key.

6. In the "Title" field, add a descriptive label for the new key. For example, "camo dev ops".

7. In the "Key" field, paste your public key.

8. Select "Authentication Key" as the key type if available, otherwise just paste as a general SSH key.

9. Click "Add SSH key".

---

**Important Security Notes:**
- SSH keys are extremely sensitive and should never be shared with others.
- The private key should remain private and stored securely on your local machine.
- Never paste your private key in public places or share it in code repositories.
- Keep your SSH keys protected with strong passphrases.