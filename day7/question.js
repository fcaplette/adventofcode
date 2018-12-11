/*
--- Part Two ---
As you're about to begin construction, four of the Elves offer to help. "The sun will set soon; it'll go faster if we work together." Now, you need to account for multiple people working on steps simultaneously. If multiple steps are available, workers should still begin them in alphabetical order.

Each step takes 60 seconds plus an amount corresponding to its letter: A=1, B=2, C=3, and so on. So, step A takes 60+1=61 seconds, while step Z takes 60+26=86 seconds. No time is required between steps.

To simplify things for the example, however, suppose you only have help from one Elf (a total of two workers) and that each step takes 60 fewer seconds (so that step A takes 1 second and step Z takes 26 seconds). Then, using the same instructions as above, this is how each second would be spent:

Second   Worker 1   Worker 2   Done
   0        C          .
   1        C          .
   2        C          .
   3        A          F       C
   4        B          F       CA
   5        B          F       CA
   6        D          F       CAB
   7        D          F       CAB
   8        D          F       CAB
   9        D          .       CABF
  10        E          .       CABFD
  11        E          .       CABFD
  12        E          .       CABFD
  13        E          .       CABFD
  14        E          .       CABFD
  15        .          .       CABFDE

Each row represents one second of time. The Second column identifies how many seconds have passed as of the beginning of that second. Each worker column shows the step that worker is currently doing (or . if they are idle). The Done column shows completed steps.

Note that the order of the steps has changed; this is because steps now take time to finish and multiple workers can begin multiple steps simultaneously.

In this example, it would take 15 seconds for two workers to complete these steps.

With 5 workers and the 60+ second step durations described above, how long will it take to complete all of the steps?

*/

// 1- You have 6 workers which in code mean that during each iteration, you can start a maxium of 6 task
// 2- As soon as one task is complete, it means that a worker is free. You can then re-run the iteration and Check
// what is the next tasks
// Create an array of objects: [{time: 63, letter:C}, {time: 84, letter:Z}]
//  the length of that object is the number of workers, so the length can never be more than 6
//  in a single iteration. Once the last iteration has been reached, loop through
//  all the item in the list. Find the one with the smallest time.
//  Add that time to a variable that keep track of the total time and
//  then, update all the remaining items in that list (loop again).
//  For example, the item would become: [{time: (84-63) = 21, letter:Z}]
//  Then, loop again with a maximum of 6 workers and repeat until you are through.
// }

// return value is the time it took to complete all the tasks
