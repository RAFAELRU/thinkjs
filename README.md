## 入门示例
1. 配置 
  1.1 数据库配置    `adapter.js`
  1.2 模板引擎配置   `adapter.js`
2. MVC
  2.1 Model 
    `this.page().select()` 分页查询
  2.2 Controller
    ```
    this.model('field name')  // model name也是表名
    this.assign()             // 注入数据
    this.display()            // 渲染模板
    ```
  2.3 View  
    `controller.xx` 当前页面控制器注入的属性