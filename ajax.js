// XMLHttpRequest
function sendAjax(options) {
    var request = new XMLHttpRequest();
    request.open(options.method, options.url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(options.data);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                var data = JSON.parse(request.response);
                options.success && options.success(data);
            } else if (request.status >= 400) {
                options.fail && options.fail(request);
            }
        }
    };
}

/**
 * ajax请求
 * @param {Object} options
 * options: {
 *      url: 业务接口
 *      method: 请求方法
 *      data: 请求参数
 *      success: 页面渲染成功回调
 *      fail: 页面渲染失败回调
 * }
 */
function h5Request(options) {
    sendAjax({
        url: options.url,
        method: options.method,
        data: options.data,
        success: function (response) {
            try {
                options.success && options.success(response);
            } catch (error) {
                options.fail && options.fail(error);
            }
        },
        fail: function (err) {
            options.fail && options.fail(err);
        }
    })
}