function generatePrimes(n) {
    const primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

function isPrime(number) {
    if (number <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

const n = 10; // Change this to the number of primes you want to generate
const primeSeries = generatePrimes(n);
console.log(`The first ${n} prime numbers are: ${primeSeries.join(', ')}`);
