/**
 *  PM2（Process Manager 2）的配置文件，PM2 是一个用于 Node.js 应用程序的进程管理器，可以帮助管理和维护应用程序的运行
 */
module.exports = {
  apps: [
    {
      name: "snippet-updater", // 应用程序的名称
      script: "./scripts/updateReviewSnippet.js", // 要运行的脚本
      watch: false, // 是否监视文件变化
      autorestart: true, // 是否自动重启
      instances: 1, // 启动的实例数
      max_memory_restart: "50M", // 最大内存重启
      log_date_format: "YYYY-MM-DD HH:mm:ss", // 日志日期格式
      env: {
        NODE_ENV: "development",
      },
    },
  ],
}; 