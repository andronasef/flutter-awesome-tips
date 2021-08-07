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
            colors: {
                mainbg: "#0F0F0F",
                secondbg: "#373737"
            }
            // colors: {
            //     secondbg: "#323741", mainbg: "#23242A"
            // }
        }
    }
})
