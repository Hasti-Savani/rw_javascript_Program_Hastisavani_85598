// JavaScript Program To Get The Current URL using regex

{
    let url = parseInt(prompt("Enter a URL..."));
    let regex = /^(https?:\/\/[^\/]+)(\/.*)?$/;
    let match = url.match(regex);
    if (match) {
        console.log("Full URL:", url);
        console.log("Protocol and domain:", match[1]);
        console.log("Path:", match[2] || "(none)");
    } else {
        console.log("Could not parse the URL.");
    }
}