import React from 'react';
import st from "./1st.jpeg"
import snd from "./2nd.jpeg"
import trd from "./3rd.jpeg"
import fth from "./4th.jpeg"
import b1 from "./b1.jpeg"
import b2 from "./b2.jpeg"
import b3 from "./b3.jpeg"
import s1 from "./s1.jpeg"
import s2 from "./s2.jpeg"
import s3 from "./s3.jpeg"
import s4 from "./s4.jpeg"
import N1 from "./N1.jpeg"
import N2 from "./N2.png"
import M1 from "./M1.jpeg"
import M2 from "./M2.jpeg"
import M3 from "./M3.jpeg"
import M4 from "./M4.jpeg"
import M5 from "./M5.jpeg"
import E1 from "./E1.jpeg"
import E2 from "./E2.jpeg"
import E3 from "./E3.jpeg"
import em from "./em.jpeg"
import ps from "./ps.jpeg"
export const NumberTheory = () => {
  return (
    <div className='abcdef'>
      <h1>Number Theory</h1>
      <p>Number theory is a branch of mathematics that studies integers. Number theory is a fascinating field, because many questions involving integers are very difficult to solve even if they seem simple at first glance. As an example, consider the following equation:</p>
    <p>x3 + y3 + z3  = 33</p>
    <p>It is easy to find three real numbers x, y and z that satisfy the equation. For example, we can choose </p>
    <p>x = 3,</p>
    <p> y = 3√3, </p>
    <p>z = 3√3.</p>
    <p>However, it is an open problem in number theory if there are any three integers x, y and z that would satisfy the equation [6]. In this chapter, we will focus on basic concepts and algorithms in number theory. Throughout the chapter, we will assume that all numbers are integers, if not otherwise stated.</p>
    <h1>Primes and factors</h1>
    <p>A number a is called a factor or a divisor of a number b if a divides b. If a is a factor of b, we write a | b, and otherwise we write a - b. For example, the factors of 24 are 1, 2, 3, 4, 6, 8, 12 and 24. A number n &gt; 1 is a prime if its only positive factors are 1 and n. For example, 7, 19 and 41 are primes, but 35 is not a prime, because 5·7 = 35. For every number n &gt; 1, there is a unique prime factorization
n=p1a1 +p2a2 …..pkak  .
</p>
<p>where p1, p2,..., pk are distinct primes and α1,α2,...,αk are positive numbers. For example, the prime factorization for 84 is
84 = 22 . 31 . 71
The number of factors of a number n is
r(n) = kΣi=1  (ai+1),

because for each prime pi , there are αi + 1 ways to choose how many times it appears in the factor. For example, the number of factors of 84 is t(84) = 3·2·2 = 12. The factors are 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42 and 84.
</p>
<h1>Density of primes</h1>
<p>The density of primes means how often there are primes among the numbers. Let π(n) denote the number of primes between 1 and n. For example, π(10) = 4, because there are 4 primes between 1 and 10: 2, 3, 5 and 7. 
It is possible to show that
 π(n) ≈ n/lnn ,
 which means that primes are quite frequent. For example, the number of primes between 1 and 106 is π(106 ) = 78498, and 106 / ln106 ≈ 72382.
</p>
<h1>Conjectures</h1>
<p>There are many conjectures involving primes. Most people think that the conjectures are true, but nobody has been able to prove them. For example, the following conjectures are famous:</p>
<p>• Goldbach’s conjecture: Each even integer n &gt; 2 can be represented as a sum n = a+ b so that both a and b are primes. 
• Twin prime conjecture: There is an infinite number of pairs of the form (p, p +2), where both p and p +2 are primes. 
• Legendre’s conjecture: There is always a prime between numbers n 2 and (n+1)2 , where n is any positive integer.
</p>
<h1>Basic algorithms</h1>
<p>If a number n is not prime, it can be represented as a product a· b, where a ≤ √n or b ≤ √n, so it certainly has a factor between 2 and [√n]. Using this observation, we can both test if a number is prime and find the prime factorization of a number in O( √n) time. The following function prime checks if the given number n is prime. The function attempts to divide n by all numbers between 2 and [√n], and if none of them divides n, then n is prime.</p>
<img src={N1}/>
<p>The following function factors constructs a vector that contains the prime factorization of n. The function divides n by its prime factors, and adds them to the vector. The process ends when the remaining number n has no factors between 2 and [√n]. If n &gt; 1, it is prime and the last factor.</p>
   <img src={N2}/>
   <p>Note that each prime factor appears in the vector as many times as it divides the number. For example, 24 = 23 ·3, so the result of the function is [2,2,2,3].</p>
    </div>
  );
};



export const GCD = () => {
  return (
    <div className='abcdef'>
      <h1>Greatest Common Divisor</h1>
      <h5>GCD(greatest common divisor) or HCF(highest common factor) of two number is the largest number that divide’s the set of number. GCD is often calculated in coding problems as a sub-part of solution. </h5>
       <h1>Naïve Approach:</h1>   
       <h5>To find the gcd of n,m:
Traverse over all the numbers from min(n,m) to 1 inclusive and return the number that divides both n and m. Lets see the code:
</h5> 
<img src={st} alt=""  />
<h5>Time Complexity of this program is O(min(n,m)). Though it is not very bad but still it can be optimized using Euclid’s method of finding GCD. This method is used to find GCD of big integers to optimize the code.</h5>
    <h1>Euclid’s Algorithm to calculate GCD:</h1>
    <h5>According to Euclid’s Algorithm GCD(n,m) = GCD(m,n%m). 
Now you must be wondering ,“ but why it works?”. So lets see the mathematical proof of Euclid’s Algorithm. Also, this is not mandatory or required for competitive programming so you can skip directly to the code implementation part. Now for the curious one lets see the proof:
</h5>
<h5>KEY POINT : When a and b are integers and a!=0, we say a divides b and write a|b if, b/a is an integer.</h5>
<h5>

Mathematical representation of algorithm :
If a=bq+r, then gcd(a,b) = gcd(b,r).
	gcd(a,b) = gcd(b,r)
	gcd(b,r) = gcd(r,r1)
	gcd(r,r1) = gcd(r1,r2)…. 
	And this will go on until the below iteration:
	= gcd(ri-1,ri) = gcd(ri,0)= ri(this is our gcd).
</h5>
<h1>Proof</h1>
<h5>Let d be any common divisor of a and b.
d|a, d|b  d|(a-bq)d|r.
Let e be any common devisor of b and r.
e|b, e|r  e|(bq+r)e|a.
which means:
Any common divisor of a and b must also be a divisor of r and any common divisor of b and r must also be a divisor of a. 
Which further concludes:
d is common divisor of a and b if and only if a is common divisor of b and r. which implies of divisor of both these sets must be same the gcd of both these sets must also be same, which tells us that :
gcd(a,b) = gcd(b,r)
In code we represent it as:
gcd(a,b) = gcd(b,a%r).
</h5>
<h1>Still Confused??</h1>
<h5>Don’t worry it is bit confusing thing to get around, but you will get it after few try, also you can check  for more clarification.</h5>
   
   <h5>Now lets see the implementation of Euclid’s algorithm. It can be implemented in both recursive and iterative ways as follows:</h5>
    <h1>1st Recursive Method:</h1>
    <img src={snd} alt=""/>
    <h1>2nd Iterative Method:</h1>
    <img src={trd} alt=""/>
    <h5>Time Complexity: O(log(max(a,b)).</h5>
    <h1>Calculating LCM:</h1>
    <h5>LCM(lowest common multiple) can also be calculated in a optimized way using Euclid’s Algorithm.
lcm(a,b) * gcd(a,b) = a*b.
Thus, lcm(a,n) = (a*b)/(gcd(a,b);
Also we can make minute change in our function to directly return lcm so lets check its implementation:
</h5>
<img src={fth} alt=""/>
    </div>
  )
}

export const Modular_Arithmatic = () => {
  return (
    <div className='abcdef'>
      <h1>Modular Arithmatic</h1>
      <h1>Definition</h1>
    <p>A modular multiplicative inverse of an integer a is an integer x such that a⋅x is congruent to 11 modular some modulus mm. To write it in a formal way: we want to find an integer xx so that</p>
    <p>a⋅x≡1 mod m.)</p>
    <p>We will also denote xx simply with a−1. </p>
    <p>We should note that the modular inverse does not always exist. For example, let m=4, a=2. By checking all possible values modulo mm is should become clear that we cannot find a−1 satisfying the above equation. It can be proven that the modular inverse exists if and only if aa and mm are relatively prime (i.e. gcd(a,m)=1).</p> <p>ab+c=ab⋅acab+c=ab⋅ac and a2b=ab⋅ab=(ab)2a2b=ab⋅ab=(ab)2.</p>
    <p>In this article, we present two methods for finding the modular inverse in case it exists, and one method for finding the modular inverse for all numbers in linear time.</p>
    <h2>Finding the Modular Inverse using Extended Euclidean algorithm</h2>
    <p>Consider the following equation (with unknown xx and y):</p>
    <b>a⋅x+m⋅y=1</b>
    <p>This is a Linear Diophantine equation in two variables. As shown in the linked article, when gcd(a,m)=1, the equation has a solution which can be found using the extended Euclidean algorithm. Note that gcd(a,m)=1is also the condition for the modular inverse to exist.</p>
    <p>
        Now, if we take modulo mm of both sides, we can get rid of m⋅y, and the equation becomes:

    </p>
    <b>a⋅x≡1 mod m </b>
    <p>Thus, the modular inverse of a is x.
        The implementation is as follows:
        </p>
        <img src={ps} alt=""/>
   
    

<p>Notice that we way we modify x. The resulting x from the extended Euclidean algorithm may be negative, so x % m might also be negative, and we first have to add m to make it positive.</p>
<h2>Finding the Modular Inverse using Binary Exponentiation</h2>
<p>
    Another method for finding modular inverse is to use Euler's theorem, which states that the following congruence is true if aa and mm are relatively prime:
    </p>
<b>aϕ(m) ≡1 mod m</b>
<p>ϕ is Euler's Totient function. Again, note that aa and mm being relative prime was also the condition for the modular inverse to exist.</p>
<p>If mm is a prime number, this simplifies to Fermat's little theorem:</p>
<p>am−1 ≡ 1 mod m</p>
<p>Multiply both sides of the above equations by a−1, and we get:</p>
<ul>
    <li>For an arbitrary (but coprime) modulus m: aϕ(m)−1 ≡ a−1 mod m</li>
    <li>For a prime modulus mm: am−2 ≡ a−1 mod m</li>
</ul>
<p>From these results, we can easily find the modular inverse using the Fermat's little theorem which works in O(logm) time.</p>

<p>Even though this method is easier to understand than the method	 described in previous paragraph, in the case when mm is not a prime number, we need to calculate Euler phi function, which involves factorization of m, which might be very hard. If the prime factorization of mm is known, then the complexity of this method is O(logm)).</p>
<h2>Finding the modular inverse for every number modulo </h2>
<p>The problem is the following: we want to compute the modular inverse for every number in the range [1,m−1].
    Applying the algorithms described in the previous sections, we can obtain a solution with complexity O(mlogm).
    </p>
<p>Here we present a better algorithm with complexity O(m). However for this specific algorithm we require that the modulus mm is prime.
    We denote by inv[i] the modular inverse of ii. Then for i1 the following equation is valid:
    </p>
    
    <b>inv[i] = −⌊m/i⌋⋅inv[m mod i] mod m</b>
    <p>Thus the implementation is very simple:</p>
    <img src={em} alt=""  />
    </div>
  );
};
export const BinaryExponential = () => {
  return (
    <div className='abcdef'>
      <h1>Binary Exponential</h1>
    <p>Binary exponentiation (also known as exponentiation by squaring) is a trick which allows to calculate anan using only O(logn)O(log⁡n) multiplications (instead of O(n)O(n) multiplications required by the naive approach).</p>
    <p>It also has important applications in many tasks unrelated to arithmetic, since it can be used with any operations that have the property of <b>associativity:</b></p>
    <p>(X⋅Y)⋅Z=X⋅(Y⋅Z)(X⋅Y)⋅Z=X⋅(Y⋅Z)</p>
    <p>Most obviously this applies to modular multiplication, to multiplication of matrices and to other problems which we will discuss below.
    </p>
    <h1>Algorithm</h1>
    <p>Raising aa to the power of nn is expressed naively as multiplication by aa done n−1n−1 times: an=a⋅a⋅…⋅aan=a⋅a⋅…⋅a. However, this approach is not practical for large aa or nn.</p>
    <p>ab+c=ab⋅acab+c=ab⋅ac and a2b=ab⋅ab=(ab)2a2b=ab⋅ab=(ab)2.</p>
    <p>The idea of binary exponentiation is, that we split the work using the binary representation of the exponent.
    </p>
    <p>Let's write nn in base 2, for example:</p>
    <p>313=311012=38⋅34⋅31313=311012=38⋅34⋅31</p>
    <p>Since the number nn has exactly ⌊log2n⌋+1⌊log2⁡n⌋+1 digits in base 2, we only need to perform O(logn)O(log⁡n) multiplications, if we know the powers a1,a2,a4,a8,…,a⌊logn⌋a1,a2,a4,a8,…,a⌊log⁡n⌋.</p>
    <p>
        So we only need to know a fast way to compute those. Luckily this is very easy, since an element in the sequence is just the square of the previous element. 
    </p>
    <p>31323438=3=(31)2=32=9=(32)2=92=81=(34)2=812=656131=332=(31)2=32=934=(32)2=92=8138=(34)2=812=6561</p>
    <p>
        So to get the final answer for 313313, we only need to multiply three of them (skipping 3232 because the corresponding bit in nn is not set): 313=6561⋅81⋅3=1594323313=6561⋅81⋅3=1594323
    </p>
    <p>The final complexity of this algorithm is O(logn)O(log⁡n): we have to compute lognlog⁡n powers of aa, and then have to do at most lognlog⁡n multiplications to get the final answer from them</p>
    <p>The following recursive approach expresses the same idea:

    </p>
    <p>
        an=⎧⎩⎨⎪⎪⎪⎪⎪⎪⎪⎪1(an2)2(an−12)2⋅aif n==0if n0 and n evenif n0 and n oddan=(1 n==0(an2)2if n0 and n even(an−12)2⋅aif n0 and n odd
    </p>
    <h1>Implementation</h1>
    <p>First the recursive approach, which is a direct translation of the recursive formula:</p>

    <img src ={b1}/>

<p>The second approach accomplishes the same task without recursion. It computes all the powers in a loop, and multiplies the ones with the corresponding set bit in n. Although the complexity of both approaches is identical, this approach will be faster in practice since we have the overhead of the recursive calls.</p> 


    <img src ={b2}/>

<h1>Applications</h1>
<h2>Effective computation of large exponents modulo a number</h2>


<p><b>Problem:</b> Compute xnmodmxnmodm. This is a very common operation. For instance it is used in computing the <u>modular multiplicative inverse</u></p>
<p><b>Solution:</b>Since we know that the module operator doesn't interfere with multiplications </p>
<p>
    (a⋅b≡(amodm)⋅(bmodm)(modm)a⋅b≡(amodm)⋅(bmodm)(modm)), we can directly use the same code, and just replace every multiplication with a modular multiplication:
</p>

    <img src ={b3}/>

<h2>Effective computation of Fibonacci numbers</h2>
<p><b>Problem: </b>: Compute nn-th Fibonacci number FnFn.</p>
<p>
    <b>Solution: </b> We will only go through an overview of the algorithm. To compute the next Fibonacci number, only the two previous ones are needed, as Fn=Fn−1+Fn−2Fn=Fn−1+Fn−2. We can build a 2×22×2 matrix that describes this transformation: the transition from FiFi and Fi+1Fi+1 to Fi+1Fi+1 and Fi+2Fi+2. For example, applying this transformation to the pair F0F0 and F1F1 would change it into F1F1 and F2F2. Therefore, we can raise this transformation matrix to the nn-th power to find FnFn in time complexity O(logn)O(log⁡n).
</p>
<h2>Applying a permutation kk times</h2>
<p><b>Problem:</b> You are given a sequence of length nn. Apply to it a given permutation kk times.</p>
<p><b>Soltion:</b>: Simply raise the permutation to kk-th power using binary exponentiation, and then apply it to the sequence. This will give you a time complexity of O(nlogk)O(nlog⁡k).</p>
<p><b>Note:</b>This task can be solved more efficiently in linear time by building the permutation graph and considering each cycle independently. You could then compute kk modulo the size of the cycle and find the final position for each number which is part of this cycle.</p>
<h2>Fast application of a set of geometric operations to a set of points</h2>

<p><b>Problem:</b>Given nn points pipi, apply mm transformations to each of these points. Each transformation can be a shift, a scaling or a rotation around a given axis by a given angle. There is also a "loop" operation which applies a given list of transformations kk times ("loop" operations can be nested). You should apply all transformations faster than O(n⋅length)O(n⋅length), where lengthlength is the total number of transformations to be applied (after unrolling "loop" operations).</p>
<p><b>Solution:</b>Let's look at how the different types of transformations change the coordinates:</p>
<ul>
    <li>Shift operation: adds a different constant to each of the coordinates</li>
    <li>Scaling operation: multiplies each of the coordinates by a different constant.</li>
    <li>Rotation operation: the transformation is more complicated (we won't go in details here), but each of the new coordinates still can be represented as a linear combination of the old ones.</li>
</ul>
<p>As you can see, each of the transformations can be represented as a linear operation on the coordinates. Thus, a transformation can be written as a 4×44×4 matrix of the form:</p>
<p>
    ⎛⎝⎜⎜⎜a11a21a31a41a12a22a32a42a13a23a33a43a14a24a34a44⎞⎠⎟⎟⎟(a11a12a13a14a21a22a23a24a31a32a33a34a41a42a43a44)
    that, when multiplied by a vector with the old coordinates and an unit gives a new vector with the new coordinates and an unit:
      
</p>
<p>
    (xyz1)⋅⎛⎝⎜⎜⎜a11a21a31a41a12a22a32a42a13a23a33a43a14a24a34a44⎞⎠⎟⎟⎟=(x′y′z′1)(xyz1)⋅(a11a12a13a14a21a22a23a24a31a32a33a34a41a42a43a44)=(x′y′z′1)

</p>
<p>(Why introduce a fictitious fourth coordinate, you ask? Without this, it would not be possible to implement the shift operation, as it requires us to add a constant to the coordinates. Without the fictitious coordinates, we would only be able to apply a linear combination to the coordinates, not being able to add a constant.)</p>
<p>Here are some examples of how transformations are represented in matrix form:</p>
<ul>
    <li>Shift operation: shift xx coordinate by 55, yy coordinate by 77 and zz coordinate by 99.
        <p>⎛⎝⎜⎜⎜1005010700190001(1000010000105791)</p>
    </li>
    <li>Scaling operation: scale the xx coordinate by 1010 and the other two by 55.
        <p>10000050000500001(10000050000500001)</p>
    </li>
    <li>Rotation operation: rotate θθ degrees around the xx axis following the right-hand rule (counter-clockwise direction).
        <p>10000cosθsinθ00−sinθcosθ00001(10000cos⁡θ−sin⁡θ00sin⁡θcos⁡θ00001)</p>
    </li>
</ul>
<p>Now, once every transformation is described as a matrix, the sequence of transformations can be described as a product of these matrices, and a "loop" of kk repetitions can be described as the matrix raised to the power of kk (which can be calculated using binary exponentiation in O(logk)O(log⁡k)). This way, the matrix which represents all transformations can be calculated first in O(mlogk)O(mlog⁡k), and then it can be applied to each of the nn points in O(n)O(n) for a total complexity of O(n+mlogk)O(n+mlog⁡k).</p>
<h2>Number of paths of length kk in a graph</h2>
<p><b>Problem:</b>Given a directed unweighted graph of nn vertices, find the number of paths of length kk from any vertex uu to any other vertex vv.</p>
<p><b>Solution:</b>The algorithm consists of raising the adjacency matrix MM of the graph (a matrix where mij=1mij=1 if there is an edge from ii to jj, or 00 otherwise) to the kk-th power. Now mijmij will be the number of paths of length kk from ii to jj. The time complexity of this solution is O(n3logk)O(n3log⁡k).</p>
<p><b>Note:</b>In that same article, another variation 
    of this problem is considered: when the edges are 
    weighted and it is required to find the minimum
     weight path containing exactly kk edges. As shown 
     in that article, this problem is also solved by 
     exponentiation of the adjacency matrix. The matrix
      would have the weight of the edge from ii to jj, 
       ∞∞ if there is no such edge. Instead of the usual 
       operation of multiplying two matrices, a modified
        one should be used: instead of multiplication, 
        both values are added, and instead of a summation,
         a minimum is taken. That is: resultij=min1 ≤ k ≤ n(aik+bkj)resultij=min1 ≤ k ≤ n(aik+bkj).</p>
<h2>Variation of binary exponentiation: multiplying two numbers modulo mm</h2>
<p><b>Problem:</b>Multiply two numbers aa and bb modulo mm. aa and bb fit in the built-in data types, but their product is too big to fit in a 64-bit integer. The idea is to compute a⋅b(modm)a⋅b(modm) without using bignum arithmetics.</p>
 <p><b>Solution:</b>We simply apply the binary construction algorithm described above, only performing additions instead of multiplications. In other words, we have "expanded" the multiplication of two numbers to O(logm)O(log⁡m) operations of addition and multiplication by two (which, in essence, is an addition).
    a⋅b=02⋅a2⋅b2⋅a−12⋅b+bif a=0if agt0 
    </p>   
    <p><b>Note:</b>You can solve this task in a different way by using floating-point operations. First compute the expression a⋅bma⋅bm using floating-point numbers and cast it to an unsigned integer qq. Subtract q⋅mq⋅m from a⋅ba⋅b using unsigned integer arithmetics and take it modulo mm to find the answer. This solution looks rather unreliable, but it is very fast, and very easy to implement.</p>
    </div>
  );
};

export const Sieve = () => {
  return (
    <div className='abcdef'>
      <h1>SIEVE OF  ERATOSTHENES</h1>
      <p>Sieve of Eratosthenes is an algorithm for finding all the prime numbers in a segment [1;n] using O(nloglogn) operations.</p>
      <p>The algorithm is very simple: at the beginning we write down all numbers between 2 and n. We mark all proper multiples of 2 (since 2 is the smallest prime number) as composite. A proper multiple of a number x, is a number greater than x and divisible by x. Then we find the next number that hasn't been marked as composite, in this case it is 3. Which means 3 is prime, and we mark all proper multiples of 3 as composite. The next unmarked number is 5, which is the next prime number, and we mark all proper multiples of it. And we continue this procedure until we processed all numbers in the row.</p>
   <img src={s1}/>
   <p>This code first marks all numbers except zero and one as potential prime numbers, then it begins the process of sifting composite numbers. For this it iterates over all numbers from 22 to nn. If the current number ii is a prime number, it marks all numbers that are multiples of ii as composite numbers, starting from i2i2. This is already an optimization over naive way of implementing it, and is allowed as all smaller numbers that are multiples of ii necessary also have a prime factor which is less than ii, so all of them were already sifted earlier. Since i2i2 can easily overflow the type int, the additional verification is done using type long long before the second nested loop.</p>
    <p>Using such implementation the algorithm consumes O(n)O(n) of the memory (obviously) and performs O(nloglogn).</p>
   <h1>Different optimizations of the Sieve of Eratosthenes</h1>
   <p>The biggest weakness of the algorithm is, that it "walks" along the memory multiple times, only manipulating single elements. This is not very cache friendly. And because of that, the constant which is concealed in O(nloglogn) is comparably big.
Besides, the consumed memory is a bottleneck for big n.
The methods presented below allow us to reduce the quantity of the performed operations, as well as to shorten the consumed memory noticeably.
</p>
<h1>Sieving till root</h1>
<p>Obviously, to find all the prime numbers until n, it will be enough just to perform the sifting only by the prime numbers, which do not exceed the root of n.</p>
   <img src={s2}/>
   <p>Such optimization doesn't affect the complexity (indeed, by repeating the proof presented above we'll get the evaluation n nlnlnn−−√+o(n)which is asymptotically the same according to the properties of logarithms), though the number of operations will reduce noticeably.</p>
    <h1>Sieving by the odd numbers only</h1>
    <p>Since all even numbers (except 22) are composite, we can stop checking even numbers at all. Instead, we need to operate with odd numbers only.
First, it will allow us to half the needed memory. Second, it will reduce the number of operations performing by algorithm approximately in half.
</p>
<h1>Reducing consumed memory</h1>
<p>We should notice that algorithm of Eratosthenes operates with nn bits of memory. Hence, we can essentially reduce consumed memory by preserving not nn bytes, which are the variables of Boolean type, but nn bits, i.e. n8n8 bytes of memory.</p>
    <p>However, such an approach, which is called bit-level compression, will complicate the operations with these bits. Read or write operation on any bit will require several arithmetic operations and ultimately slow down the algorithm.</p>
    <p>Thus, this approach is only justified, if nn is so big that we cannot allocate nn bytes of memory anymore. In this case we will trade saving memory (88 times less) with significant slowing down of the algorithm.</p>
   <p>After all, it's worth mentioning there exist data structures that automatically do a bit-level compression, such as vector and bitset in C++</p>
   <h1>Segmented Sieve</h1>
   <p>It follows from the optimization "sieving till root" that there is no need to keep the whole array is_prime[1...n] at all time. For performing of sieving it's enough to keep just prime numbers until root of nn, i.e. prime[1... sqrt(n)], split the complete range into blocks, and sieve each block separately. In doing so, we never have to keep multiple blocks in memory at the same time, and the CPU handles caching a lot better.
Let ss be a constant which determines the size of the block, then we have ⌈ns⌉⌈ns⌉ blocks altogether, and the block kk (k=0...⌊ns⌋k=0...⌊ns⌋) contains the numbers in a segment [ks;ks+s−1][ks;ks+s−1]. We can work on blocks by turns, i.e. for every block kk we will go through all the prime numbers (from 11 to n−−√n) and perform sieving using them. It is worth noting, that we have to modify the strategy a little bit when handling the first numbers: first, all the prime numbers from [1;n−−√][1;n] shouldn't remove themselves; and second, the numbers 00 and 11 should be marked as non-prime numbers. While working on the last block it should not be forgotten that the last needed number nn is not necessary located in the end of the block.
Here we have an implementation that counts the number of primes smaller than or equal to nn using block sieving.
Here we have an implementation that counts the number of primes smaller than or equal to nn using block sieving
</p>
<img src={s3}/>
<p>The running time of block sieving is the same as for regular sieve of Eratosthenes (unless the size of the blocks is very small), but the needed memory will shorten to O(n−−√+S) and we have better caching results. On the other hand, there will be a division for each pair of a block and prime number from [1;n−−√], and that will be far worse for smaller block sizes. Hence, it is necessary to keep balance when selecting the constant S. We achieved the best results for block sizes between 104 and 105.</p>
   <h1>Find primes in range</h1>
   <p>Sometimes we need to find all prime numbers in a range [L,R] of small size (e.g. R−L+1≈1e7), where R can be very large (e.g. 1e12).

To solve such a problem, we can use the idea of the Segmented sieve. We pre-generate all prime numbers up to R−−√, and use those primes to mark all composite numbers in the segment [L,R].
</p>
<img src={s4}/>
<p>Time complexity of this approach is O((R−L+1)loglog(R)+R−−√loglogR−−√).</p>
    </div>
  )
}
export const MillerRabin = () => {
  return (
    <div className='abcdef'>
      <h1>MILLER-RABIN </h1>
    <h2>Trial division</h2>
    <p>
        By definition a prime number doesn't have any divisors other than 1 and itself. A composite number has at least one additional divisor, let's call it d. Naturally n/d is also a divisor of n. It's easy to see, that either d≤√n or n/d≤√n, therefore one of the divisors d and n/d is ≤√n. We can use this information to check for primality.</p>
        <p>We try to find a non-trivial divisor, by checking if any of the numbers between 2 and √n is a divisor of n. If it is a divisor, than n is definitely not prime, otherwise it is.</p>

    <img src ={M1}/>

<p>This is the simplest form of a prime check. You can optimize this function quite a bit, for instance by only checking all odd numbers in the loop, since the only even prime number is 2.</p>
<h2>Fermat primality test</h2>
<p>This is a probabilistic test.</p>
<p>Fermat's little theorem states, that for a prime number p and a coprime integer a the following equation holds:</p>
<b>a<sup>p-1</sup>  ≡ 1 mod p</b>
<p>In general this theorem doesn't hold for composite numbers.</p>
<p>This can be used to create a primality test. We pick an integer 2≤a≤p−2, and check if the equation holds or not. If it doesn't hold, e.g. a<sup>p-1</sup>  ≢  1 mod p, we know that p cannot be a prime number. In this case we call the base a a Fermat witness for the compositeness of p.</p>
<p>However it is also possible, that the equation holds for a composite number. So if the equation holds, we don't have a proof for primality. We only can say that p is probably prime. If it turns out that the number is actually composite, we call the base a a Fermat liar.

    By running the test for all possible bases a, we can actually prove that a number is prime. However this is not done in practice, since this is a lot more effort that just doing trial division. Instead the test will be repeated multiple times with random choices for a. If we find no witness for the compositeness, it is very likely that the number is in fact prime.
    </p>
   
        <img src ={M2}/>
    
    <p>We use Binary Exponentiation to efficiently compute the power <b>a<sup>p-1</sup></b>.</p>
<p>There is one bad news though: there exist some composite numbers where  <b>a<sup>n-1</sup> ≡ 1 mod n</b>  holds for all a coprime to n, for instance for the number 561=3⋅11⋅17. Such numbers are called Carmichael numbers. The Fermat primality test can identify these numbers only, if we have immense luck and choose a base a with gcd(a,n)≠1.

    The Fermat test is still be used in practice, as it is very fast and Carmichael numbers are very rare. E.g. there only exist 646 such numbers below 109.
    </p>
<h2>Miller-Rabin primality test</h2>
<p>The Miller-Rabin test extends the ideas from the Fermat test.

    For an odd number n, n−1 is even and we can factor out all powers of 2. We can write:
    </p>
<b>n – 1 = 2<sup>s</sup> ⋅ d, with d odd.</b>
<p>This allows us to factorize the equation of Fermat's little theorem:</p>
<b>an−1 ≡ 1 mod n⟺ a2^(s).d − 1 ≡ 0 mod n</b>
<b>⟺ ( a2^(s-1).d + 1)( a2^(s-1).d  −1 ) ≡ 0 mod n</b>
<b>⟺ ( a2^(s-1).d  −1 ) ( a2^(s-2).d + 1)( a2^(s-2).d  −1 ) ≡ 0 mod n</b>
<b>.</b>
<b>.</b>
<b>.</b>
<b>⟺ ( a2^(s-1).d  −1 ) ( a2^(s-2).d + 1)………….(ad+1)(ad-1) ≡ 0 md n</b>
<p>If n is prime, then n has to divide one of these factors. And in the Miller-Rabin primality test we check exactly that statement, which is a more stricter version of the statement of the Fermat test. For a base 2≤a≤n−2 we check if either</p>
<b>a<sup>d</sup> ≡ 1 mod n</b>
<p>holds or</p>
<b>a<sup>2^(r)d</sup>  ≡ -1 mod n</b>
<p>holds for some 0≤r≤s−1.</p>
<p>If we found a base a which doesn't satisfy any of the above equalities, than we found a witness for the compositeness of n. In this case we have proven that n is not a prime number.</p>
<p>Similar to the Fermat test, it is also possible that the set of equations is satisfied for a composite number. In that case the base a is called a strong liar. If a base a satisfies the equations (one of them), n is only strong probable prime. However, there are no numbers like the Carmichael numbers, where all non-trivial bases lie. In fact it is possible to show, that at most 14 of the bases can be strong liars. If n is composite, we have a probability of ≥75% that a random base will tell us that it is composite. By doing multiple iterations, choosing different random bases, we can tell with very high probability if the number is truly prime or if it is composite.

    Here is an implementation for 64 bit integer.
    </p>
    
        <img src ={M3}/>
    
    
        <img src ={M4}/>
   
<h2>Deterministic version</h2>

<p>Miller showed that it is possible to make the algorithm deterministic by only checking all bases ≤O((lnn)<sup>2</sup>). Bach later gave a concrete bound, it is only necessary to test all bases a≤2ln(n)<sup>2</sup>.</p>
<p>This is still a pretty large number of bases. So people have invested quite a lot of computation power into finding lower bounds. It turns out, for testing a 32 bit integer it is only necessary to check the first 4 prime bases: 2, 3, 5 and 7. The smallest composite number that fails this test is 3,215,031,751=151⋅751⋅28351. And for testing 64 bit integer it is enough to check the first 12 prime bases: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, and 37.

    This results in the following deterministic implementation:
    </p>
  
        <img src ={M5}/>
   
    <p>It's also possible to do the check with only 7 bases: 2, 325, 9375, 28178, 450775, 9780504 and 1795265022. However, since these numbers (except 2) are not prime, you need to check additionally if the number you are checking is equal to any prime divisor of those bases: 2, 3, 5, 13, 19, 73, 193, 407521, 299210837.</p>
    </div>
  )
}

export const Euler = () => {
  return (
    <div className='abcdef'>
      <h1>EULER’S TOTIENT FUNCTION</h1>
    <p>
        Euler's totient function, also known as phi-function ϕ(n), counts the number of integers between 1 and n inclusive, which are coprime to n. Two numbers are coprime if their greatest common divisor equals 1 (1 is considered to be coprime to any number).
        </p>
    <h2>Properties</h2>
    <p>The following properties of Euler totient function are sufficient to calculate it for any number:</p>
        <p> If p is a prime number, then gcd(p,q)=1 for all 1≤q &lt; p. Therefore we have: </p>
    <b>ϕ(p)=p−1. </b>
    <p>If p is a prime number and k≥1, then there are exactly pk/p numbers between 1 and pk that are divisible by p. Which gives us:
        </p>
        <b>ϕ(pk)=pk−pk−1.</b>
        <p>If a and b are relatively prime, then:</p>
        <b>
            ϕ(ab)=ϕ(a)⋅ϕ(b). 
        </b>
        
   
   
   
            
    <img src ={E1}/>

<h2>Euler totient function from 1 to n in O(nloglogn)</h2>
<p>If we need all all the totient of all numbers between 1 and n, then factorizing all n numbers is not efficient. We can use the same idea as the Sieve of Eratosthenes. It is still based on the property shown above, but instead of updating the temporary result for each prime factor for each number, we find all prime numbers and for each one update the temporary results of all numbers that are divisible by that prime number.

    Since this approach is basically identical to the Sieve of Eratosthenes, the complexity will also be the same:<b> O(nloglogn)</b>
    </p>
    
        <img src ={E2}/>
    
    <h2>Divisor sum property</h2>
    <p>This interesting property was established by Gauss:</p>
    <b>∑d|n ϕ(d)=n</b>
<p>Here the sum is over all positive divisors d of n.</p>
<p>For instance the divisors of 10 are 1, 2, 5 and 10. Hence </p>
<b>ϕ(1)+ϕ(2)+ϕ(5)+ϕ(10)=1+1+4+4=10.</b>
<h2>Finding the totient from 1 to n using the divisor sum property</h2>
<p>The divisor sum property also allows us to compute the totient of all numbers between 1 and n. This implementation is a little simpler than the previous implementation based on the Sieve of Eratosthenes, however also has a slightly worse complexity: O(nlogn).</p>

    <img src ={E3}/>

    </div>
  )
}
