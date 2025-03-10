//In powershell create env variables (TEST ONLY)
[System.Environment]::SetEnvironmentVariable("PORT", "8090", "User")
[System.Environment]::SetEnvironmentVariable("HOSTNAME", "0.0.0.0", "User")
[System.Environment]::SetEnvironmentVariable("SECRET_KEY", "ae8e4903c6c37dbcf1d7497253e6329a98cb509fdf042bcc83e8ab0e14cf738e", "User")
//start the server
node app.js