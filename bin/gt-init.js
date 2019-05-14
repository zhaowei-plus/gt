#!/usr/bin/env node

const download = require('download-git-repo')
const exists = require('fs').existsSync
const path = require('path')
const ora = require('ora')
const home = require('user-home')
const inquirer = require('inquirer')
const rm = require('rimraf').sync

const logger = require('../lib/logger')
const generate = require('../lib/generate')

class Project {
    constructor(name) {
        let template = 'spa'; // 脚手架类型
        const inPlace = !name || name === '.'
        const proName = inPlace ? path.relative('../', process.cwd()) : name
        const to = path.resolve(name || '.')

        const tmp = path.join(home, '.gt-templates', template);

        this.downloadAndGenerate(proName, tmp, to);
    }

    downloadAndGenerate(name, tmp, to) {
        const spinner = ora('下载模板')
        spinner.start()

        if (exists(tmp))
            rm(tmp)

         download('git@github.com:zhaowei-plus/zw-pool-front.git#template/spa', tmp, {
            clone: true
        }, err => {
            spinner.stop()
            if (err) logger.fatal('Failed to download repo: ' + err.message.trim())
            generate(name, tmp, to, err => {
                if (err) logger.fatal(err)
                console.log()
                logger.success('Generated "%s".', name)
            })
        });
    }
}

module.exports = {
    Project,
};
