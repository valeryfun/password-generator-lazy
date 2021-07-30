const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createPassword')

program.version('1.0.0').description('Password generator for the lazy.')

program
	.option('-l, --length <number>', 'Length of Password', '10')
	.option('-s, --save', 'Save password to passwords.txt')
	.option('-nn, --no-numbers', 'Remove numbers')
	.option('-ns, --no-symbols', 'Remove symbols')
	.parse()

const { length, save, numbers, symbols } = program.opts()

//Generate password
const generatedPassword = createPassword(length, numbers, symbols)

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Copied to clipboard'))
