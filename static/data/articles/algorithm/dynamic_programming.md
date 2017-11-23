## 动态规划
- a computer can be seen as a Finite State Machine
- each state saved in memory, and can then be change to another state
- the current state can by rely on the state before, or all the state before
- one state may have one or multiple possibility (like 围棋)
1. 只有一种可能 -> 递归
2. 每个状态的最优选择都是由上一个状态的最优选择得到的 -> 贪心
3. 每个状态的最优选择都是由之前所有阶段的选择得到的 -> 搜索
4. 每个状态的最优选择可以从之前某个状态的某个或某些选择直接得到而不管之前这个选择是如何得到的 -> 动态规划
