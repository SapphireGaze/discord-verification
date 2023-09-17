# Discord Member Verification

### Automate discord member verification process using Nodemailer/SMTP server for email verification, assign member role with Discord.js, and store member information using Google Sheets API.

![image of an example verification modal](/src/resources/verification.png "verification modal example")

## **Setup**

### **Prerequisite**

[Docker](https://www.docker.com/) Version 20.10.25 or above

### **Google Cloud Platform**

Create a new project in [Google Cloud Platform](https://console.cloud.google.com/getting-started). Then, enable Google Sheets API in `APIs & Services`. Then navigate to `IAM & Admin > Service Accounts` and create a new service account. After the service account is created, proceed to `Manage Keys` for that account and create a new key. Rename the file as `credentials.json` and move the file to the root of this repository. Make sure to share the Google Sheets with the service account created as **Editor**.

### **Discord Developer Portal**

Create a new application in [Discord Developer Portal](https://discord.com/developers/applications), then navigate to `Bot` and enable `Server Members Intent` **AND** `Message Content Intent` under `Privileged Gateway Intents`. Finally, click on `Reset Token` and copy the token as `token` into the `config.json` file mentioned in the General Configuration below.   

Add the following permission when inviting the bot to the server:

- Manage Roles
- Manage Channels
- Read Messages/View Channels
- Send Messages
- Send TTS Messages
- Manage Messages
- Embed Links
- Read Message History

Make sure the bot's default role is above the target role permissions you want the bot to edit!!

### **General Configuration**

Clone this repository to local machine using 

```
git clone https://github.com/SapphireGaze/discord-verification.git
cd discord-verification/
```

and change directory into the cloned repository.

Then, create a new file at the root of the repository named `config.json` (check `sample.json` format), and the content of the file should follow the below JSON format:

```
{
   "token": "DISCORD-APPLICATION-TOKEN",
   "channelId": "CHANNEL-ID",
   "roleId": "ROLE-ID",
   "spreadsheetId": "SPREADSHEET-ID",
   "allowedDomains": [
       "DOMAIN-1",
       "DOMAIN-2",
       ...
   ],
   "senderEmail": "\"ORGANIZATION NAME\" <no-reply@DOMAIN>",
   "organization": "ORGANIZATION NAME"
}
```

After the configuration, save the file and change into `src` directory with the below command:

```
cd src/
```

and open `email.js`, change the nodemailer transporter to the designated SMTP server with the correct port and protocols.

Then, change into `templates` directory 

```
cd templates/
```

and create `agreement.txt` (store your server user agreement) and create `welcome.txt` (store message to send to user on join). 

Then you can save the files, and run the following command to start the bot! 

```
cd ../../
sh install.sh
```

Type "**verify**" in the channel corresponding to the configured channel id to show the initial modal!!