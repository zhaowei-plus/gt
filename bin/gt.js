#!/usr/bin/env node

const {
    Project
} = require('./gt-init');
const program = require('commander');
const chalk = require('chalk');


program
    .version(require('../package').version)
    .usage('<command> [options]');

program
    .command('init [project-name]')
    .description("创建新项目")
    .action(async(options) => {
        if (!options) {
            console.log('请输入项目名');
        }

        new Project(options);
    });

/**
 * 帮助信息
 */
program.on('--help', () => {
    console.log('  Examples:')
    console.log()
    console.log(chalk.gray('    # 使用模板创建一个新项目'))
    console.log('    $ gt init new-project')
    console.log()
});



program.parse(process.argv)
