#!/usr/bin/env node

const { program } = require("commander");
const { version } = require("./package.json");

program.version(version, "-v, --version", "输出当前版本号");
program.option("-h, --help", "输出帮助信息");

program
  .command("init <项目名称>")
  .alias("i")
  .description("初始化项目")
  .action(async (source, destination) => {});

program
  .command("start")
  .description("运行项目")
  .action(async (source, destination) => {});

program
  .command("info")
  .description("展示项目详情")
  .action(async (source, destination) => {});

program
   .command('config <配置文件>')
   .alias('cfs')
   .description('创建一个配置文件')
   .action(async(source,destination)=>{})

program
   .command('error <错误类型文件>')
   .alias('e')
   .description('创建一个错误声明')
   .action(async(source,destination)=>{})

program
   .command('middleware <中间件文件>')
   .alias('m')
   .description('创建一个中间件声明')
   .action(async(source,destination)=>{})

program
   .command('router <路由文件>')
   .alias('r')
   .description('创建一个路由声明')
   .action(async(source,destination)=>{})

program
   .command('service <服务文件>')
   .alias('s')
   .description('创建一个服务声明')
   .action(async(source,destination)=>{})

program.parseAsync(process.argv);
