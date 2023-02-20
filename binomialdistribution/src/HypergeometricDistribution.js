/*
*
* Population / Number_pop / Size of population.
* Possibilities / Population_s / Number of successes in population:
* Draws / Number_sample / Size of sample
* Successes / Sample_s / Successes in the sample
* 
*
* https://en.wikipedia.org/wiki/Hypergeometric_distribution
*/
export class HypergeometricDistribution {
    constructor(population, possibilities, draws) {
        this.population = population
        this.possibilities = possibilities
        this.draws = draws
        this.successes = successes
        this.cumulative = cumulative
    }

    distribution() {
        return 1;
    }
}

// trevnorris
// https://gist.github.com/trevnorris/c39ac96740842e05303f
// https://www.math.ucla.edu/~tom/distributions/Hypergeometric.html
function hyp(x, n, m, nn) {
    var nz, mz;
    // best to have n<m
    if (m < n) {s
      nz = m;
      mz = n
    } else {
      nz = n;
      mz = m
    }
    var h=1;
    var s=1;
    var k=0;
    var i=0;
    while (i < x) {
      while (s > 1 && k < nz) {
        h = h * (1 - mz / (nn - k));
        s = s * (1 -mz / (nn - k));
        k = k + 1;
      }
      h = h * (nz - i) * (mz - i) / (i + 1) / (nn - nz - mz + i + 1);
      s = s + h;
      i = i + 1;
    }
    while (k < nz) {
      s = s * (1 - mz / (nn - k));
      k = k + 1;
    }
    return s;
  }
  
  function compute(form) {
    var nn = Math.floor(eval(form.pop1.value));
    var m = Math.floor(eval(form.pop2.value));
    var n = Math.floor(eval(form.sample.value));
    var x = Math.floor(eval(form.argument.value));
    var Prob;
    if (n <= 0 || m <= 0 || nn <= 0) {
      alert("Parameters must be positive integers");
      Prob = 0;
    } else if (m > nn || n > nn) {
      alert("m and n must be less than N");
      Prob = 0;
    } else if (x < 0 || x < n + m - nn) {
      Prob = 0;
    } else if (x >= n || x >= m) {
      Prob = 1;
    } else {
      if (2 * m > nn) {
        if (2 * n > nn) {
          Prob = hyp(nn - m - n + x, nn - n, nn - m, nn);
        } else {
          Prob = 1 - hyp(n - x - 1, n, nn - m, nn);
        }
      } else if (2 * n > nn) {
        Prob = 1 - hyp(m - x - 1, m, nn - n, nn);
      } else {
        Prob = hyp(x, n, m, nn)
      }
    }
    Prob = Math.round(Prob * 100000) / 100000;
    form.result.value = Prob;
  }
  
  //Tests
  function assert(name, expected, actual) {
    var pass = expected === actual

    if (pass)
    {
        // console.info(`Test PASSED: ${name} passed. Expected: ${expected} Actual: ${actual}.`)
    } else  {
        console.warn(`Test FAILED: ${name} failed. Expected: ${expected} Actual: ${actual}.`)
    }
}

//Test 1: 