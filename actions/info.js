const chalk = require('chalk')
const {readFileSync} =require('node:fs')
const {join} =require('node:path')
const BANNER=`
_     _  _     _     ____ _     _ 
/ \   / \/ \   / \ /\/   _Y \   / \
| |   | || |   | | |||  / | |   | |
| |_/\| || |_/\| \_/||  \_| |_/\| |
\____/\_/\____/\____/\____|____/\_/
`
const handleInfo=()=>{
console.info(chalk.blueBright(BANNER));
console.info(chalk.green('[Lilu CLI]'));
console.info('Lilu CLI Version :',chalk.blue(JSON.parse(readFileSync(join(__dirname,'../package.json')).toString()).version,),'\n')
 
}

module.exports=handleInfo