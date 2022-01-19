// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

text.match(/\d+/g).map(n=> parseInt(n)).reduce((a, b) => a + b, 0)


// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let txt = 'You cannot end a sentence with because because because is a conjunction'
txt.match(/because+/g).length

