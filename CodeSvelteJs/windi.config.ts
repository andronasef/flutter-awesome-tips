// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    plugins: [
        // Other plugins
        require('@windicss/animations')({
            settings: {
                animatedSpeed: 1000,
                heartBeatSpeed: 1000,
                hingeSpeed: 2000,
                bounceInSpeed: 750,
                bounceOutSpeed: 750,
                animationDelaySpeed: 1000,
            },
        }),
    ],
    theme: {
        extend: {
            fontFamily: { "roboto": "Roboto" },
            colors: {
                // THEME 1
                mainbg: "#0F0F0F",
                secondbg: "#373737"

                // THEME 2
                // mainbg: "#3D4451",
                // secondbg: "#2A2E37"

                // THEME 3
                // mainbg: "#0F0F0F",
                // secondbg: "#373737"
            }
        }
    }
})
