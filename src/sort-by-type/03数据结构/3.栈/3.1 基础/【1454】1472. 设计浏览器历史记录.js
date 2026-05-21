/**
 * @description 1472. 设计浏览器历史记录
 * @link https://leetcode.cn/problems/design-browser-history/description/
 * 你有一个只支持单个标签页的 浏览器 ，最开始你浏览的网页是 homepage ，你可以访问其他的网站 url ，也可以在浏览历史中后退 steps 步或前进 steps 步。
 * 请你实现 BrowserHistory 类：
 *      BrowserHistory(string homepage) ，用 homepage 初始化浏览器类。
 *      void visit(string url) 从当前页跳转访问 url 对应的页面  。执行此操作会把浏览历史前进的记录全部删除。
 *      string back(int steps) 在浏览历史中后退 steps 步。如果你只能在浏览历史中后退至多 x 步且 steps > x ，那么你只后退 x 步。请返回后退 至多 steps 步以后的 url 。
 *      string forward(int steps) 在浏览历史中前进 steps 步。如果你只能在浏览历史中前进至多 x 步且 steps > x ，那么你只前进 x 步。请返回前进 至多 steps步以后的 url 。   
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

// TEST
const browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");
browserHistory.visit("facebook.com");
browserHistory.visit("youtube.com");
console.log(browserHistory.back(1));
console.log(browserHistory.back(1));
console.log(browserHistory.forward(1));
console.log(browserHistory.back(2));
console.log(browserHistory.back(7));
console.log(browserHistory.forward(1));
