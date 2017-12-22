# 另一大插件，Vuex
Vue 三大插件之一，其实就俩了，resource推荐用别的来代替了。

## 干啥的
美其名曰状态管理，实际就一中央集权的数据库。还必须通过指定的指令来操作（mutation）从而方便管理。

## 好用吗
真的好用，当你想在两个不属于同一个父组件的组件之间传数据的时候，你就知道多好用了。

## 怎么用
和其他插件一样:
1. 先用 `npm insall vuex --save`
2. import 进来: `import vuex from 'vuex'`
3. `Vue.use(vuex)`
4. export Store object 出来： `export default new Vuex.Store({})`
5. 根组件注册： `new Vue({ store: store })`

## 具体概念
就像官网说的，四大概念。很好理解，所以说好用，简单上手

### 1.state
- 就是指data，所有数据都存在state里面
- 组件里使用 `this.$store.state.data_name`

### 2.getter
- 跟其他getter一样，就是个filter，本来应该拿数据到各个component再处理，如果是很多component都用的，那就放在这里。
- 组件里使用 `this.$store.getter.getter_func_name`

### 3.mutation
- 这个就很重要了，因为所有操作都是要在这里进行的，相当于入口
- 因为这个数据库是所有组件共用的，所以为了方便监控，便规定组件不可直接修改数据，而是要通过mutation（编程处处是哲学啊，真是）
- 实际上这就是个function,输入是state(也可以有payload),没有返回值，直接对state做inplace操作
- 组件里使用 `this.$store.commit('mutation_name', [value])`

### 4.action
- 哈哈,看完上面以为就这么多了吧，反正我当时是这么觉得的，怎么还有个action。
action 主要是为了异步操作而存在的。这么理解吧，将这个store object和数据库的一张表做对比。
一个state就像是一条row，getter就相当select语句，mutation就相当于update语句，那action呢。
**action相当于再往上抽象一个level，在你的code里面写sql语句**。不知道这样好不好理解，反正对我而言好理解。
ok，你有一条完整的sql语句能进行某个操作，但是现在你只能让他立马运行，如果你想让他动态运行，那就要写到code里面了，action就是这个作用。
- 组件里使用 `this.$store.dispatch('action_name')`

# Reference
- [Vuex Official](https://vuex.vuejs.org/en/)
