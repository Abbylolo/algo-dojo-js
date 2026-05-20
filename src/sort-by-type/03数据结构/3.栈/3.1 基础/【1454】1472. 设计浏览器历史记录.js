/**
 * @description 1472. 设计浏览器历史记录
 * @link https://leetcode.cn/problems/design-browser-history/description/
 */
var BrowserHistory = function (homepage) {
    this.history = [homepage];
    this.cur = 0; // 当前页面是 history[cur]
};

BrowserHistory.prototype.visit = function (url) {
    this.cur++;
    this.history.length = this.cur; // 把浏览历史前进的记录全部删除
    this.history.push(url); // 从当前页跳转访问 url 对应的页面
};

BrowserHistory.prototype.back = function (steps) {
    this.cur = Math.max(this.cur - steps, 0); // 后退 steps 步
    return this.history[this.cur];
};

BrowserHistory.prototype.forward = function (steps) {
    this.cur = Math.min(this.cur + steps, this.history.length - 1); // 前进 steps 步
    return this.history[this.cur];
};