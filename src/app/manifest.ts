import { MetadataRoute } from "next";
const manifest = (): MetadataRoute.Manifest => {
    return {
        name: "ASOS_Shopping", //full application name
        short_name: "ASOS",//short name for home screen
        description: "Online Store for Fashion and Clothing",//app description
        start_url: "/",//Entry page when app launches
        scope: "/",//scope of service worker control
        display: "standalone", //display mode (native app style,on browser UI)
        background_color: "#ffffff",//splash screen background color
        theme_color: "#000000",//Theme color for address bar and task manager
        icons: [// Icon array for different resolutions
            {
                src: "/icon-192x192.ico", //Path to 192x192 icon
                sizes: "192x192",//Icon dimensions
                type: "image/ico",//mime type
            },
            {
                src: "/icon-512x512.ico", //Path to 512x512 icon
                sizes: "512x512",//Icon dimensions
                type: "image/ico"//mime type
            }
        ],
        lang: "en"
    }
}
export default manifest;