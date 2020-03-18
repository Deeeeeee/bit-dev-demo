# Bit.dev

## 安装

[官方文档](https://docs.bit.dev/docs/installation)

使用npm安装无法正常使用bit命令（原因未知）

建议使用brew安装 ```brew install bit```



brew 更新缓慢问题 参考：[解决Homebrew下载更新极慢的问题](https://www.raydbg.com/2019/Homebrew-Update-Slow/) 


## 应用

#### 初始化bit

``` bash
cd project-directory
bit init
```

#### 使用Bit跟踪组件

``` bash
bit add src/components/*
```

#### 定义编译器


#### 定义测试框架


#### 设置组件版本

``` bash
bit tag --all 1.0.0
```

#### 导出组件

将组件发布到远端 （需先[注册](https://bit.dev/)一个账户, 并创建一个Collection）

``` bash
bit login 
```
> bit 会自动打开浏览器验证身份

``` bash
bit export user-name.collection-name
```
> 使用 bit export 命令将工作区中的组件发布到 bit.dev

#### 在其他项目中使用组件

安装
```
npm install @bit/owner.collection.namespace.namespace.comp-id
or
yarn add @bit/owner.collection.namespace.namespace.comp-id
```
使用
```
import { something } from '@bit/owner.collection.namespace.namespace.comp-id';
```
#### 在其他项目中更改&发布组件
在适当位置引入组件（bit 会按package.json 中的bit配置在当前目录下引入组件），引入后可以直接对组件进行更改
```
bit import mui-org.material-ui/button
```


更改完成后发布更新（新项目中需先进入对应文件夹初始化bit工作空间 ```bit init```）

```
# 标记版本
bit tag --all 1.0.3 
# 发布
bit export user-name.collection-name
```

#### 在其他项目中更新组件 [参考](https://docs.bit.dev/docs/sourcing-components#importing-new-versions)

```
# 更新所有引入的组件
bit import

# 查看当前版本状态
bit status

# 切换组件到指定版本
bit checkout 1.0.3 button
bit checkout 1.0.3 --all
```
> 切换后会重新确认依赖关系，运行中的server可能会报错，断掉重启可以解决

## 组件开发规范

1. 同一集合中的组件应以统一前缀命名 eg. base、app、ece...
1. 组件应与业务完全解耦，保证组件的通用性
1. 组件应有明确的参数说明、全面的demo
1. 组件升级<b>必须</b>保证兼容之前版本

## Bit 使用规范

1. 建议更新版本时使用 --all 统一集合内所有版本 方便其他项目更新


## 参考文档

- [bit.dev docs](https://docs.bit.dev/docs/quick-start)
- [Bit.dev初体验(这可能是第一篇Bit中文文章)](http://dict.youdao.com/?keyfrom=cidian)