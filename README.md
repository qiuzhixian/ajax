# ajax
> ajax请求库

# Usage

```javascript
h5Request({
  url: 'url', // 请求接口
  method: 'get', // get、post等
  data: 'data', // 请求参数
  success: function() {
    // 成功回调
  },
  fail: function() {
    // 失败回调
  }
});
```