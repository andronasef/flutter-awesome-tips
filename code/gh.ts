var ghpages = require('gh-pages')


ghpages.publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/andronasef/FlutterAwesomeTips.git', // Update to point to your repository  
        user: {
            name: 'Andrew Nasef', // update to use your name
            email: 'androamazing@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)

