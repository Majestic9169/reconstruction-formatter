### Example Usage
1. on the index.html page click on submit a recon (reconDB is not available yet)
2. enter your csTimer dump, example format is 3. 12.69 R U R' U', make sure that the time is not in parantheses, make sure to entire the fps too. the fps for the example is 30fps
eg 
```
1. 11.05   D2 L' B2 L2 D2 B2 R D2 R B2 R' B D L2 R' F' D' B U F2 
2. 7.54   B' R2 B2 U2 B2 U F2 D' R2 F2 U' R2 L F R2 F L' R' U' R2 
3. 8.20   U' B2 U' F U' F' U' R B2 L' D2 R' U2 D2 B2 R' F2 U B 
4. 9.66   D' L F D' R' L' D F2 R D' F L2 F D2 L2 F2 B U2 L2 D2 R2 
5. 7.86   D' R2 D R2 B2 L2 R2 D2 U2 B D R U B2 L F' D' B2 F2 
6. 7.16   F B2 L' B2 D2 R' D2 L2 D2 U2 B2 D2 U' F' L B' F D B D' 
7. 7.67   R D2 F R' U' B U F L F R2 F2 L2 U2 B' R2 L2 F L2 B' R2 
8. 9.42   U2 R2 F' U2 B' D2 F' R2 F2 U2 R2 B2 L B D2 U R F' R2 U2 
9. 14.15   D B2 D R2 B2 F2 R2 U' B2 L2 R' D B D L' D2 F D L2 U' 
10. 9.09   U2 B' D2 B2 L2 B R2 B L2 B2 L2 R' F2 R2 F U' L F R' D 
11. 7.92   L' D R' B2 U2 B2 F2 L' D2 L U2 L' R' D B R2 U' R2 D B 
12. 8.53   F R2 F' R' B2 R2 U2 B2 U2 R U2 R2 D2 F2 D R B F' L' D L
```
3. this will take you to the solve.html page, where you can input your reconstruction and click submit to generate a table with your statistics
eg reconstruction for solve 1 
solve
```
y' // inspec
U R' F B' D' B D' y D' // cross
y U R U' R' r' U' R U M' // f2l1
U y' U' R U' R' U2 F' U' F // f2l2
U2' L' U' L U2 L' U' L // f2l3
y R U R' U M' U R U' r' // f2l4
U2' U2' R U2' R2' F R F' R U2' R' // oll
U2' F R U' R' U' R U R' F' R U R' U' R' F R F' // pll
```
splits
```
866
932
971
1025
1051
1097
1140
```
4. clicking save will add your reconstruction to the 'reconstruction' cookie

### Further Plans
+ unpacking and neatly displaying the reconstruction cookie in the reconDB.html page
+ creating a pdf to neatly share the statistics
+ if possible [@SachdevJai](https://github.com/SachdevJai/) will integrate his cube visualiser instead of using alg.cubing.net 
+ long term plan is to create a proper database of solves

### Issues
1. the way the formatter currently works is it trusts the user to input a valid solve with comments for the steps of the solve. this is not a problem since I'm the only one using it right now. this way I am able to easily display the stats without any complicated verification. however the stats currently displayed are per step stats, which is aren't entirely relevant in the creation of a proper database, the more important stats are things like f2l time, ll time, ols, c+1, etc. with my current system there isn't a way to reliably generate those stats without either some standardised for of input or many conditionals on the text. the easier solution for me would be to create a standardised input
