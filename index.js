const program = require('commander')

program.version('1.0.0').description('Password generator for the lazy.')

program
	.option('-l, --length <number>', 'Length of Password', '10')
	.option('-s, --save', 'Save password to passwords.txt')
	.option('-nn, --no-numbers', 'Remove numbers')
	.option('-ns, --no-symbols', 'Remove symbols')
	.parse()

const { length, save, numbers, symbols } = program.opts()

console.log(numbers, symbols)
