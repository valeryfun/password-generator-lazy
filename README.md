# password-generator-lazy
A password generator for the lazy. A simple NodeJs package to generate random and secure password. 
User may generate customed passwords to their likings. They can dictate the length of password and type of password. 
Password generated will also be copied to clipboard immediately for simple usage.

## To use
Clone the repository and open in VS code. 
Run 
```
npm install
```

To generate default password, run 
```
node index.js
```
this will generate a password of 10 random characters and symbols.

To generate password of desired length, run
```
node index.js -l <number>
```
this will generate a password of your desired length with random characters and symbols.

To generate password without number, run
```
node index.js -nn
```
this will generate a password without numbers.

Similarly, to generate a password without symbols, run
```
node index.js -ns
```
this will generate a password without symbols.

If you would like a combination of the above, you may just include into the same cmd line. 
For example, to generate a password with length 15 and without symbols:
```
node index.js -l 15 -ns
```
## Example of outcome
