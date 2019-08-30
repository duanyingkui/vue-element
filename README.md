## 开发基本原则
1. 隔离，每个独立的功能抽象为独立的子APP（模块）；
2. 统一，保持模式、功能实现和排版格式的一致性；
3. 简洁，保持模板和样式的简练、减少第三方库的依赖，避免引入复杂；
4. 清晰，保持清晰的树形结构，保持**单向数据流**。


## 项目启动
```
npm install
```

### 开发命令（支持HMR）
```
npm run serve
```

### 编译命令
```
npm run build
```

### Lint命令
```
npm run lint
```
### node-sass 被墙解决方法
npm install node-sass --sass-binary-site=http://npm.taobao.org/mirrors/node-sass