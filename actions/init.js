const fs=require('node:fs')
const chalk=require('chalk')
const ora=require('ora')
const downloadGitRepo=require('download-git-repo')
const handleInit= async (source)=>{
    const projectFolderPath=`${process.cwd()}/${source}`
    if(!/^[a-zA-Z_][\w_\-]+$/g.test(source)){
        console.info(chalk.blueBright('请输入正确的项目名称 (比如：learn-js).'))
        return
    }

    if(fs.existsSync(projectFolderPath)){
        console.info(chalk.blueBright(`文件夹${source} 已经存在.`))
        return
    }

    console.info(chalk.blueBright(`
    ------------------------------------------
      Summer.js - Node Framework 
    ------------------------------------------
    `))

    const download=ora(chalk.bold(`初始化${source}项目...`)).start()
    downloadGitRepo('direct:https://github.com/calidan-x/summer.git#stable',`${source}`,{clone:true},async(err)=>{
        if(err){
            console.log(err)
            download.fail()
            console.log(chalk.red(`项目模版下载失败, 请检查你的网络环境.`))
            process.exit(1)
        }
        download.succeed('下载成功！')

        const summerPackage=require(`${projectFolderPath}/package.json`)
        const combinedJson={...summerPackage,name:source}
        fs.writeFileSync(`${projectFolderPath}/package.json`,JSON.stringify(combinedJson,null,2),'utf-8')
        console.info(``)
        console.info(chalk.bold('现在执行以下命令:'))
        console.info('')
        console.info(chalk.green(chalk.bold(`cd ${source}`)))
        console.info(chalk.green(chalk.bold('npm run install-all')))
        console.info(chalk.green(chalk.bold('npm run publish-all')))
        console.info('')
    })
  
}

module.exports=handleInit