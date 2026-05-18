const PptxGenJS = require('pptxgenjs');

const pptx = new PptxGenJS();

// ========== 全局样式 ==========
pptx.layout = 'LAYOUT_WIDE'; // 16:9
pptx.author = 'algo-dojo-js';
pptx.title = 'algo-dojo-js 算法刷题笔记';

const COLORS = {
  primary: '2B579A',
  accent: 'D24726',
  dark: '333333',
  light: 'F5F5F5',
  white: 'FFFFFF',
  green: '217346',
  orange: 'E8850C',
  blue: '4472C4',
  gray: '808080',
};

function addTitle(slide, text) {
  slide.addText(text, {
    x: 0.5, y: 0.3, w: 12.5, h: 0.8,
    fontSize: 28, fontFace: 'Microsoft YaHei',
    color: COLORS.primary, bold: true,
  });
  // 分割线
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 2.5, h: 0.04,
    fill: { color: COLORS.accent },
  });
}

function addBullets(slide, items, opts = {}) {
  const { x = 0.7, y = 1.4, w = 11.8, h = 5.5, fontSize = 16 } = opts;
  slide.addText(
    items.map(item => ({
      text: item,
      options: { bullet: true, indentLevel: 0, paraSpaceAfter: 6 },
    })),
    {
      x, y, w, h,
      fontSize,
      fontFace: 'Microsoft YaHei',
      color: COLORS.dark,
      valign: 'top',
    }
  );
}

function addSubBullets(slide, items, opts = {}) {
  const { x = 1.0, y = 1.4, w = 11.5, h = 5.5, fontSize = 14 } = opts;
  slide.addText(
    items.map(item => ({
      text: item,
      options: { bullet: true, indentLevel: 0, paraSpaceAfter: 4 },
    })),
    {
      x, y, w, h,
      fontSize,
      fontFace: 'Microsoft YaHei',
      color: COLORS.dark,
      valign: 'top',
    }
  );
}

// ========== Slide 1: 封面 ==========
{
  const slide = pptx.addSlide();
  slide.background = { fill: COLORS.primary };
  slide.addText('algo-dojo-js', {
    x: 0, y: 2.0, w: 13.33, h: 1.2,
    fontSize: 44, fontFace: 'Microsoft YaHei',
    color: COLORS.white, bold: true, align: 'center',
  });
  slide.addText('JavaScript 算法刷题笔记', {
    x: 0, y: 3.2, w: 13.33, h: 0.8,
    fontSize: 24, fontFace: 'Microsoft YaHei',
    color: 'BDD7EE', align: 'center',
  });
  slide.addText('按解题套路分类整理 | 模板驱动 | 间隔复习', {
    x: 0, y: 4.2, w: 13.33, h: 0.6,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: '9DC3E6', align: 'center',
  });
  slide.addText('2025 - 2026', {
    x: 0, y: 5.5, w: 13.33, h: 0.5,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: '9DC3E6', align: 'center',
  });
}

// ========== Slide 2: 仓库简介 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '仓库简介');
  addBullets(slide, [
    '用 JavaScript 记录算法刷题与笔记的个人仓库',
    '核心目标：按解题套路分类整理，构建可复用的思维模板',
    '技术栈：Node.js + VS Code + PM2',
    '自动化复习系统：基于记忆曲线（1/3/7/15 天）自动生成复习时间',
    '使用方式：在 VS Code 中键入 review / rv / 复习 触发代码片段',
    '累计 135 道题解，155 次 Git 提交',
  ]);
}

// ========== Slide 3: 目录结构总览 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '目录结构总览');

  slide.addText([
    { text: 'src/easy/', options: { bold: true, color: COLORS.green } },
    { text: '         12 道简单难度题解（纯英文函数命名）', options: { color: COLORS.dark } },
  ], { x: 0.7, y: 1.5, w: 12, h: 0.5, fontSize: 16, fontFace: 'Microsoft YaHei' });

  slide.addText([
    { text: 'src/middle/', options: { bold: true, color: COLORS.orange } },
    { text: '       6 道中等难度题解（纯英文函数命名）', options: { color: COLORS.dark } },
  ], { x: 0.7, y: 2.1, w: 12, h: 0.5, fontSize: 16, fontFace: 'Microsoft YaHei' });

  slide.addText([
    { text: 'src/sort-by-type/', options: { bold: true, color: COLORS.primary } },
    { text: '  117 道题解，按算法类型分类整理（核心知识库）', options: { color: COLORS.dark } },
  ], { x: 0.7, y: 2.7, w: 12, h: 0.5, fontSize: 16, fontFace: 'Microsoft YaHei' });

  slide.addText([
    { text: 'scripts/', options: { bold: true, color: COLORS.gray } },
    { text: '             自动化脚本（复习 snippet 生成器）', options: { color: COLORS.dark } },
  ], { x: 0.7, y: 3.3, w: 12, h: 0.5, fontSize: 16, fontFace: 'Microsoft YaHei' });

  slide.addText([
    { text: '.vscode/', options: { bold: true, color: COLORS.gray } },
    { text: '            VS Code 配置（调试、snippet、任务）', options: { color: COLORS.dark } },
  ], { x: 0.7, y: 3.9, w: 12, h: 0.5, fontSize: 16, fontFace: 'Microsoft YaHei' });

  // 文件命名规范
  slide.addText('文件命名规范', {
    x: 0.7, y: 4.8, w: 12, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: COLORS.primary, bold: true,
  });
  addSubBullets(slide, [
    'easy/middle：纯英文 camelCase（如 twoSum.js、maxSubArray.js）',
    'sort-by-type：【难度】题号. 题目名.js（如【1591】3355. 零数组变换 I.js）',
    '模版标记：【--模版】表示模板题，🌟 前缀表示重点收藏',
  ], { y: 5.2 });
}

// ========== Slide 4: 题量统计 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '题量统计');

  // 表格
  const tableRows = [
    [
      { text: '分类', options: { bold: true, fill: { color: COLORS.primary }, color: COLORS.white } },
      { text: '子分类', options: { bold: true, fill: { color: COLORS.primary }, color: COLORS.white } },
      { text: '题数', options: { bold: true, fill: { color: COLORS.primary }, color: COLORS.white } },
    ],
    [
      { text: '01 滑动窗口与双指针', options: { rowspan: 4, bold: true, fill: { color: 'E8F0FE' } } },
      { text: '定长滑动窗口' },
      { text: '8' },
    ],
    [{ text: '不定长：越短越合法（求最长）' }, { text: '10' }],
    [{ text: '不定长：越长越合法（求最短）' }, { text: '6' }],
    [{ text: '不定长：求子数组个数' }, { text: '10' }],
    [
      { text: '02 二分算法', options: { rowspan: 4, bold: true, fill: { color: 'FFF2CC' } } },
      { text: '二分查找（基础）' },
      { text: '6' },
    ],
    [{ text: '二分查找（进阶）' }, { text: '8' }],
    [{ text: '二分答案：求最小' }, { text: '3' }],
    [{ text: '二分答案：求最大' }, { text: '2' }],
    [
      { text: '03 数据结构', options: { rowspan: 7, bold: true, fill: { color: 'E2EFDA' } } },
      { text: '枚举技巧：枚举右维护左' },
      { text: '24' },
    ],
    [{ text: '枚举技巧：枚举中间' }, { text: '5' }],
    [{ text: '枚举技巧：遍历对角线' }, { text: '4' }],
    [{ text: '前缀和（基础 + 哈希表 + 二维）' }, { text: '19' }],
    [{ text: '差分（一维）' }, { text: '8' }],
    [{ text: '栈' }, { text: '2' }],
    [{ text: 'easy / middle', options: { bold: true, fill: { color: 'FCE4EC' } } }, { text: '按难度分类' }, { text: '18' }],
  ];

  slide.addTable(tableRows, {
    x: 0.5, y: 1.4, w: 12,
    fontSize: 13, fontFace: 'Microsoft YaHei',
    border: { pt: 0.5, color: 'CCCCCC' },
    colW: [3.5, 5.5, 1.5],
    align: 'left',
    valign: 'middle',
    rowH: 0.35,
  });

  slide.addText('总计：135 道题解', {
    x: 0.5, y: 6.5, w: 12, h: 0.5,
    fontSize: 20, fontFace: 'Microsoft YaHei',
    color: COLORS.accent, bold: true, align: 'center',
  });
}

// ========== Slide 5: 学习路径 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '学习路径');

  const boxes = [
    { label: '01\n滑动窗口与双指针', sub: '34 题', color: '4472C4', x: 1.5 },
    { label: '02\n二分算法', sub: '19 题', color: 'ED7D31', x: 5.0 },
    { label: '03\n数据结构', sub: '64 题', color: '70AD47', x: 8.5 },
  ];

  boxes.forEach(b => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: b.x, y: 2.5, w: 3.0, h: 1.8,
      fill: { color: b.color },
      rectRadius: 0.15,
      shadow: { type: 'outer', blur: 6, offset: 3, color: '888888' },
    });
    slide.addText(b.label, {
      x: b.x, y: 2.5, w: 3.0, h: 1.3,
      fontSize: 16, fontFace: 'Microsoft YaHei',
      color: COLORS.white, bold: true, align: 'center', valign: 'middle',
    });
    slide.addText(b.sub, {
      x: b.x, y: 3.7, w: 3.0, h: 0.5,
      fontSize: 13, fontFace: 'Microsoft YaHei',
      color: 'E8E8E8', align: 'center',
    });
  });

  // 箭头
  [4.5, 8.0].forEach(x => {
    slide.addText('\u27A4', {
      x, y: 2.9, w: 0.5, h: 0.8,
      fontSize: 28, color: COLORS.gray, align: 'center', valign: 'middle',
    });
  });

  // easy/middle
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 4.0, y: 5.0, w: 5.3, h: 1.0,
    fill: { color: 'E8E8E8' },
    rectRadius: 0.1,
  });
  slide.addText('src/easy + src/middle：18 道基础题（入门热身）', {
    x: 4.0, y: 5.0, w: 5.3, h: 1.0,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: COLORS.dark, align: 'center', valign: 'middle',
  });

  slide.addText('渐进式学习：基础 \u2192 进阶 \u2192 思维扩展', {
    x: 0, y: 6.5, w: 13.33, h: 0.5,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: COLORS.gray, align: 'center', italic: true,
  });
}

// ========== Slide 6: 提交规范 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '文件命名与提交规范');

  slide.addText('文件命名格式', {
    x: 0.7, y: 1.5, w: 5, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: COLORS.primary, bold: true,
  });
  addSubBullets(slide, [
    '【难度】题号. 题目名.js',
    '例：【1591】3355. 零数组变换 I.js',
    '【--】表示难度未评级',
    '【--模版】表示模板/经典题',
    '🌟 前缀表示重点收藏',
  ], { y: 1.9, x: 0.7, w: 5.5 });

  slide.addText('Git 提交格式', {
    x: 6.5, y: 1.5, w: 6, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: COLORS.primary, bold: true,
  });
  addSubBullets(slide, [
    '【类型】XX 【题目】XX 【难度】XX',
    '例：【类型】栈 【题目】1441. 用栈操作构建数组 【难度】1180',
    '类型即算法分类（滑动窗口、二分、前缀和等）',
    '结构化提交便于回溯学习进度',
  ], { y: 1.9, x: 6.5, w: 6.3 });

  slide.addText('模板驱动的学习方式', {
    x: 0.7, y: 4.5, w: 12, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: COLORS.primary, bold: true,
  });
  addSubBullets(slide, [
    '每种算法类型都配有 JS 伪代码模板（如滑动窗口的 入-更新-出 模式）',
    '模板题标记为【模版】，是理解该套路的关键入口',
    '同类型题目共享相同的解题框架，仅在统计量和判断条件上有差异',
  ], { y: 4.9 });
}

// ========== Slide 7: 01 滑动窗口总览 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '01 滑动窗口与双指针');

  slide.addText('34 道题解', {
    x: 10.5, y: 0.35, w: 2.5, h: 0.7,
    fontSize: 20, fontFace: 'Microsoft YaHei',
    color: COLORS.accent, bold: true, align: 'right',
  });

  addBullets(slide, [
    '属于双指针的一种，常用于数组/字符串的子数组/子串问题',
    '适用条件：数据结构为数组或字符串 + 求满足条件的子数组/子串 + 具有单调性',
    '',
    '分类：',
    '  定长滑动窗口（8 题）— 窗口大小固定为 k',
    '  不定长滑动窗口（26 题）：',
    '    越短越合法，求最长/最大（10 题）',
    '    越长越合法，求最短/最小（6 题）',
    '    求子数组个数（10 题）— 含恰好型滑动窗口',
  ], { fontSize: 15 });
}

// ========== Slide 8: 定长滑动窗口 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '定长滑动窗口 — 入·更新·出');

  slide.addText('模板', {
    x: 0.7, y: 1.4, w: 5, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.primary, bold: true,
  });

  slide.addText(
    'let ans, win\nfor (let i = 0; i < n; i++) {\n  updateIn(win, a[i])       // 入\n  if (i < k - 1) continue   // 未形成窗口\n  ans = updateAns(ans, win)  // 更新\n  updateOut(win, a[i-k+1])   // 出\n}',
    {
      x: 0.7, y: 1.8, w: 5.5, h: 3.2,
      fontSize: 12, fontFace: 'Consolas',
      color: COLORS.dark,
      fill: { color: 'F5F5F5' },
      valign: 'top',
      paraSpaceAfter: 2,
    }
  );

  slide.addText('核心思路', {
    x: 6.5, y: 1.4, w: 6, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.primary, bold: true,
  });
  addSubBullets(slide, [
    '入：a[i] 进入窗口，更新统计量',
    '判断：窗口是否已满（i >= k-1）',
    '更新：窗口已满时更新答案',
    '出：a[i-k+1] 离开窗口，为下轮准备',
  ], { x: 6.5, y: 1.8, w: 6, fontSize: 14 });

  slide.addText('8 道题目', {
    x: 0.7, y: 5.2, w: 12, h: 0.35,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: COLORS.accent, bold: true,
  });
  addSubBullets(slide, [
    '643. 子数组最大平均数I | 1456. 定长子串中元音的最大数目',
    '1343. 大小为K且平均值大于等于阈值 | 2090. 半径为k的子数组平均值',
    '2379. 得到K个黑块的最少涂色次数 | 2841. 几乎唯一子数组的最大和',
    '2461. 长度为K子数组中的最大和 | 1423. 可获得的最大点数',
  ], { y: 5.5, fontSize: 12 });
}

// ========== Slide 9: 不定长滑动窗口 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '不定长滑动窗口');

  slide.addText('越短越合法 — 求最长/最大（10 题）', {
    x: 0.7, y: 1.4, w: 12, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.blue, bold: true,
  });
  addSubBullets(slide, [
    '右扩，违法则左缩：while (!valid) { left++ }',
    '典型题：3. 无重复字符的最长子串、904. 水果成篮、1004. 最大连续1的个数III',
  ], { y: 1.8, fontSize: 13 });

  slide.addText('越长越合法 — 求最短/最小（6 题）', {
    x: 0.7, y: 2.9, w: 12, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.green, bold: true,
  });
  addSubBullets(slide, [
    '右扩到合法，尽量左缩：while (valid) { 更新答案; left++ }',
    '典型题：209. 长度最小的子数组、76. 最小覆盖子串',
  ], { y: 3.3, fontSize: 13 });

  slide.addText('求子数组个数（10 题）', {
    x: 0.7, y: 4.3, w: 12, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.orange, bold: true,
  });
  addSubBullets(slide, [
    '越短越合法：ans += right - left + 1',
    '越长越合法：ans += left',
    '恰好型：atMost(K) - atMost(K-1)',
    '典型题：930. 和相同的二元子数组、1248. 统计「优美子数组」',
  ], { y: 4.7, fontSize: 13 });
}

// ========== Slide 10: 02 二分算法总览 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '02 二分算法');

  slide.addText('19 道题解', {
    x: 10.5, y: 0.35, w: 2.5, h: 0.7,
    fontSize: 20, fontFace: 'Microsoft YaHei',
    color: COLORS.accent, bold: true, align: 'right',
  });

  addBullets(slide, [
    '核心思想：利用有序性，每次将查找范围减半，O(n) \u2192 O(log n)',
    '关键概念：循环不变量 — 区间外的元素性质是确定的',
    '',
    '分类：',
    '  二分查找（14 题）：在有序数组中查找目标值',
    '    基础（6 题）：lowerBound 模板 + 基本变式',
    '    进阶（8 题）：思维扩展，结合其他数据结构',
    '  二分答案（5 题）：对答案空间进行二分',
    '    求最小（3 题）/ 求最大（2 题）',
  ], { fontSize: 15 });
}

// ========== Slide 11: 二分查找 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '二分查找 — 循环不变量');

  slide.addText('常用转化表', {
    x: 0.7, y: 1.4, w: 5, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.primary, bold: true,
  });

  const tableRows = [
    [
      { text: '需求', options: { bold: true, fill: { color: COLORS.primary }, color: COLORS.white } },
      { text: '写法', options: { bold: true, fill: { color: COLORS.primary }, color: COLORS.white } },
    ],
    [{ text: '>=x 的第一个元素' }, { text: 'lowerBound(nums, x)' }],
    [{ text: '>x 的第一个元素' }, { text: 'lowerBound(nums, x+1)' }],
    [{ text: '<x 的最后一个元素' }, { text: 'lowerBound(nums, x) - 1' }],
    [{ text: '<=x 的最后一个元素' }, { text: 'lowerBound(nums, x+1) - 1' }],
  ];

  slide.addTable(tableRows, {
    x: 0.7, y: 1.8, w: 5.5,
    fontSize: 12, fontFace: 'Consolas',
    border: { pt: 0.5, color: 'CCCCCC' },
    colW: [2.8, 2.7],
    rowH: 0.35,
  });

  slide.addText('循环不变量', {
    x: 6.5, y: 1.4, w: 6, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.primary, bold: true,
  });
  addSubBullets(slide, [
    'left 的左边：都 < x（确定）',
    'right 的右边：都 >= x（确定）',
    '区间内：尚未确定与 target 的关系',
    '区间为空时循环结束',
    '',
    '典型题：704. 二分查找、35. 搜索插入位置',
    '34. 查找元素的第一个和最后一个位置',
  ], { x: 6.5, y: 1.8, w: 6, fontSize: 13 });
}

// ========== Slide 12: 二分答案 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '二分答案 — 对答案空间二分');

  addBullets(slide, [
    '题目类型：给定一个范围，查找满足条件的答案',
    '前提：目标函数关于答案单调',
    '核心思路：题目求什么，就二分什么',
    '',
    '与数组二分查找的联系：',
    '  假设答案在 [2,5]，相当于在虚拟数组 [check(2), check(3), check(4), check(5)] 中二分',
    '  check(i) 的单调性 = 有序数组的单调性',
    '',
    '求最小（3 题）：',
    '  1283. 使结果不超过阈值的最小除数 | 2187. 完成旅途的最少时间',
    '  3824. 减小数组使其满足条件的最小K值',
    '',
    '求最大（2 题）：',
    '  275. H 指数 II | 2226. 每个小孩最多能分到多少糖果',
  ], { fontSize: 15 });
}

// ========== Slide 13: 03 数据结构总览 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '03 数据结构');

  slide.addText('64 道题解', {
    x: 10.5, y: 0.35, w: 2.5, h: 0.7,
    fontSize: 20, fontFace: 'Microsoft YaHei',
    color: COLORS.accent, bold: true, align: 'right',
  });

  addBullets(slide, [
    '最大的分类模块，涵盖多种常用数据结构与技巧',
    '',
    '子分类：',
    '  常用枚举技巧（33 题）',
    '    枚举右，维护左（24 题）— 哈希表 + 遍历',
    '    枚举中间（5 题）— 前后缀分解',
    '    遍历对角线（4 题）— 矩阵技巧',
    '  前缀和（19 题）',
    '    基础 + 思维扩展（11 题）/ 前缀和与哈希表（7 题）/ 二维前缀和（3 题）',
    '  差分（8 题）— 一维差分',
    '  栈（2 题）— 基础',
  ], { fontSize: 15 });
}

// ========== Slide 14: 枚举技巧 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '常用枚举技巧');

  slide.addText('枚举右，维护左（24 题）', {
    x: 0.7, y: 1.4, w: 12, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.blue, bold: true,
  });
  addSubBullets(slide, [
    '双变量问题 \u2192 枚举右边，用哈希表维护左边',
    '经典应用：两数之和 a[i] + a[j] = t',
    '典型题：1. 两数之和、121. 买卖股票的最佳时机、1679. K和数对的最大数目',
  ], { y: 1.8, fontSize: 13 });

  slide.addText('枚举中间（5 题）', {
    x: 0.7, y: 2.9, w: 12, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.green, bold: true,
  });
  addSubBullets(slide, [
    '三/四变量问题 \u2192 枚举中间变量，i 和 k 自动被 j 隔开，互相独立',
    '思路：前后缀分解',
    '典型题：1930. 长度为3的不同回文子序列、3128. 直角三角形',
  ], { y: 3.3, fontSize: 13 });

  slide.addText('遍历对角线（4 题）', {
    x: 0.7, y: 4.3, w: 12, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.orange, bold: true,
  });
  addSubBullets(slide, [
    '矩阵对角线遍历：k = i+j+1，范围 [1, m+n-1]',
    '典型题：498. 对角线遍历、1329. 将矩阵按对角线排序',
  ], { y: 4.7, fontSize: 13 });
}

// ========== Slide 15: 前缀和 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '前缀和');

  slide.addText('基础前缀和（11 题）', {
    x: 0.7, y: 1.4, w: 5.5, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.blue, bold: true,
  });
  addSubBullets(slide, [
    '预处理：s[i+1] = s[i] + nums[i]',
    '区间和：nums[left..right] = s[right+1] - s[left]',
    '时间复杂度：查询 O(1)',
    '典型题：303. 区域和检索（模板）、53. 最大子数组和',
  ], { y: 1.8, w: 5.5, fontSize: 13 });

  slide.addText('前缀和 + 哈希表（7 题）', {
    x: 6.5, y: 1.4, w: 6, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.green, bold: true,
  });
  addSubBullets(slide, [
    '统计子数组和 = k 的个数',
    '枚举右 s[j]，在哈希表找 s[j]-k',
    '初始化 {0: 1}',
    '典型题：560. 和为K的子数组（模板）',
  ], { x: 6.5, y: 1.8, w: 6, fontSize: 13 });

  slide.addText('二维前缀和（3 题）', {
    x: 0.7, y: 4.2, w: 12, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.orange, bold: true,
  });
  addSubBullets(slide, [
    '预处理：s[i+1][j+1] = s[i][j+1] + s[i+1][j] - s[i][j] + matrix[i][j]',
    '子矩形和：sum = s[r2+1][c2+1] - s[r2+1][c1] - s[r1][c2+1] + s[r1][c1]',
    '容斥原理的应用',
  ], { y: 4.6, fontSize: 13 });
}

// ========== Slide 16: 差分 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '差分');

  slide.addText('一维差分（8 题）', {
    x: 0.7, y: 1.4, w: 12, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.blue, bold: true,
  });

  addBullets(slide, [
    '核心思想：区间更新操作的高效实现',
    '操作：对区间 [left, right] 加 val',
    '  diff[left] += val',
    '  diff[right+1] -= val',
    '最后对 diff 求前缀和得到结果数组',
    '时间复杂度：O(1) 区间更新 + O(n) 还原',
    '',
    '典型题目：',
    '  1109. 航班预订统计 | 3355. 零数组变换 I',
    '  2960. 统计已测试设备 | 1094. 拼车（模板）',
    '  253. 会议室II | 2406. 将区间分为最少组数',
  ], { fontSize: 15 });
}

// ========== Slide 17: 栈 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '栈');

  slide.addText('2 道基础题解', {
    x: 10.5, y: 0.35, w: 2.5, h: 0.7,
    fontSize: 20, fontFace: 'Microsoft YaHei',
    color: COLORS.accent, bold: true, align: 'right',
  });

  addBullets(slide, [
    '栈是一种后进先出（LIFO）的数据结构',
    '当前进度：基础阶段',
    '',
    '已完成题目：',
    '  1441. 用栈操作构建数组',
    '  844. 比较含退格的字符串',
    '',
    '后续计划：',
    '  单调栈（求下一个更大/更小元素）',
    '  括号匹配、表达式求值',
    '  栈与队列的相互实现',
  ], { fontSize: 15 });
}

// ========== Slide 18: easy/middle 题目 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '按难度分类 — easy / middle');

  slide.addText('Easy（12 题）', {
    x: 0.7, y: 1.4, w: 5.5, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.green, bold: true,
  });
  addSubBullets(slide, [
    'twoSum — 两数之和',
    'isValid — 有效的括号（栈）',
    'merge — 合并两个有序数组',
    'reverseList — 反转链表',
    'hasCycle — 环形链表',
    'maxProfit — 买卖股票的最佳时机',
    'maxScore — 最大得分',
    'addStrings — 字符串相加',
    'transpose — 转置矩阵',
    'isPowerOfTwo / isPowerOfThree / isUgly',
  ], { y: 1.8, w: 5.5, fontSize: 12 });

  slide.addText('Middle（6 题）', {
    x: 6.5, y: 1.4, w: 6, h: 0.35,
    fontSize: 15, fontFace: 'Microsoft YaHei',
    color: COLORS.orange, bold: true,
  });
  addSubBullets(slide, [
    'threeSum — 三数之和',
    'maxSubArray — 最大子数组和',
    'lengthOfLongestSubstring — 无重复字符的最长子串',
    'permute — 全排列',
    'levelOrder — 二叉树的层序遍历',
    'compareVersion — 比较版本号',
  ], { x: 6.5, y: 1.8, w: 6, fontSize: 12 });

  slide.addText('这些题目是算法入门的基础练习，部分已被分类到 sort-by-type 中对应的知识点下', {
    x: 0.7, y: 5.5, w: 12, h: 0.5,
    fontSize: 13, fontFace: 'Microsoft YaHei',
    color: COLORS.gray, italic: true,
  });
}

// ========== Slide 19: 自动化工具 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '自动化复习系统');

  addBullets(slide, [
    '基于艾宾浩斯记忆曲线的间隔复习机制',
    '复习间隔：+1 天、+3 天、+7 天、+15 天',
    '',
    '工作流程：',
    '  1. 解完一道题后，在文件中键入 review / rv / 复习',
    '  2. 自动生成一行带未来复习日期的记录',
    '  3. 每天打开 VS Code 时自动更新日期',
    '',
    '技术实现：',
    '  scripts/updateReviewSnippet.js — 计算日期并写入 snippet 文件',
    '  ecosystem.config.js — PM2 进程管理，开机自启',
    '  .vscode/tasks.json — VS Code 任务配置，打开/关闭文件夹时管理 PM2',
    '',
    '依赖：lodash + pm2',
  ], { fontSize: 15 });
}

// ========== Slide 20: 总结 ==========
{
  const slide = pptx.addSlide();
  addTitle(slide, '总结与下一步');

  slide.addText('当前成果', {
    x: 0.7, y: 1.4, w: 5.5, h: 0.35,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: COLORS.primary, bold: true,
  });
  addSubBullets(slide, [
    '135 道题解，覆盖 3 大算法分类',
    '完整的 JS 模板体系（滑动窗口、二分、前缀和等）',
    '间隔复习自动化系统',
    '结构化的 Git 提交历史',
  ], { y: 1.8, w: 5.5, fontSize: 14 });

  slide.addText('下一步计划', {
    x: 6.5, y: 1.4, w: 6, h: 0.35,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: COLORS.accent, bold: true,
  });
  addSubBullets(slide, [
    '栈：单调栈、括号匹配',
    '队列：优先队列、单调队列',
    '链表：快慢指针、反转',
    '树：遍历、构造、BST',
    '图：BFS/DFS、拓扑排序',
    '动态规划：背包、区间DP',
    '贪心算法',
  ], { x: 6.5, y: 1.8, w: 6, fontSize: 14 });

  slide.addText([
    { text: '持续刷题，持续积累，模板驱动，分类记忆', options: { italic: true, color: COLORS.gray } },
  ], {
    x: 0, y: 5.5, w: 13.33, h: 0.5,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    align: 'center',
  });
}

// ========== 生成文件 ==========
const outputPath = require('path').join(__dirname, '..', 'algo-dojo-js-仓库概览.pptx');
pptx.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`PPT 已生成：${outputPath}`);
  })
  .catch(err => {
    console.error('生成失败：', err);
    process.exit(1);
  });
