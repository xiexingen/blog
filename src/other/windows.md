---
title: windows技巧
nav:
  title: 其他
  path: /other
---

# window 技巧-长期更新

## 技巧篇

- 查看占用端口
  netstat -aon [|findstr "1005"] 查找 1005 端口被那个占用
- windows 下删除多层级文件夹：
  安装 rimraf 包：npm install -g rimraf
  然后通过：rimraf <目录名称> 来删除
- 如何下载到本地，而不是边下载边更新：
  创建一个快捷方式，在快捷方式的后面加 "-layout" 双击后就是下载到本地 而不是安装
- 打开本地连接：ncpa.cpl
- 查看系统支持的最大内存：wmic memphysical get maxcapacity
- 修改 hosts 文件后刷新 ipconfig -flushdns

## 快捷键

- comexp.msc:打开 window 组件服务，可以查看事务
- netplwiz :修改用户组相关
- inetmgr:打开 IIS
- ssms:SQLServer 数据库
- SQLServerManager11.msc 数据库管理工具
- devenv:VS
- mstsc:远程
- Alt+Enter 显示所选项的属性
- Alt+Esc 以项目打开的顺序循环切换项目
- Alt+向上键 在 Windows 资源管理器中查看上一级文件夹
- Win + M：最小化所有窗口
- Windows 徽标键 + 加号或减号 放大或缩小
- Windows 徽标键 输入 mspaint 打开画图
- Windows 徽标键 输入 psr 打开系统视频录制
- Windows 徽标键 snippingtool win7 自带截图工具
- notepad 打开记事本
- write----------写字板
- perfmon.msc----计算机性能监测程序
- services.msc 服务
- f10 或 alt 键 激活当前程序的菜单栏
- osk------------打开屏幕键盘
- 结束进程：cmd---taskkill /im`notepad.exe /t
- cdm 常用命令：具体参考（http://www.51xue8.com/e/DownSys/play/?classid=31&id=1001&pathid=4&jishu=26）
- ver====显示系统版本······ver/? =帮助
- dir====显示驱动版本 · ·······dir/? =帮助
- copy（用法 4，全部复制）如：copy c:\新建文件夹\*.\* ()d:\txt
- chkdsk/?=====查看磁盘文件报告
- chkdsk===检查磁盘
- dir====C 盘文件夹目录（详细，时间，大小··）
- dir/w =====显示 C 盘文件夹 （不显示时间，大小）
- dir/l 显示子文件夹
- dir/p======屏幕显示不完时加 p
- format====格式化磁盘（慎用）如：format g:
- format/?====格式化帮助
- del=====删除文件 如：del c:\···
- del/?===删除帮助
- md====创建文件夹
- ipconfig ====查看 ip 等信息
- ren=====文件重命名
- nslookup======ip 地址查询
- exit=====退出
- rd======删除目录
- tasklist =====显示进程
- type=======显示文本内容
- tree=======显示所有文件名····显示 D 盘则 tree d:\
- ping=======检测网络···如 ping（必须空格）-f
- net user=========更改用户
- net share====== 查看共享文件
- help==============显示所有命令
- gpedit.msc-----组策略
- sndrec32-------录音机
- Nslookup-------IP 地址侦测器
- explorer-------打开资源管理器
- logoff---------注销命令
- tsshutdn-------60 秒倒计时关机命令
- lusrmgr.msc----本机用户和组
- services.msc---本地服务设置
- oobe/msoobe /a----检查 XP 是否激活
- cleanmgr-------垃圾整理
- net start messenger----开始信使服务
- compmgmt.msc---计算机管理
- net stop messenger-----停止信使服务
- conf-----------启动 netmeeting
- dvdplay--------DVD 播放器
- charmap--------启动字符映射表
- diskmgmt.msc---磁盘管理实用程序
- calc-----------启动计算器
- dfrg.msc-------磁盘碎片整理程序
- chkdsk.exe-----Chkdsk 磁盘检查
- devmgmt.msc--- 设备管理器
- drwtsn32------ 系统医生
- rononce -p ----15 秒关机
- dxdiag---------检查 DirectX 信息
- regedt32-------注册表编辑器
- Msconfig.exe---系统配置实用程序
- rsop.msc-------组策略结果集
- mem.exe--------显示内存使用情况
- regedit.exe----注册表
- winchat--------XP 自带局域网聊天
- progman--------程序管理器
- winmsd---------系统信息
- perfmon.msc----计算机性能监测程序
- winver---------检查 Windows 版本
- sfc /scannow-----扫描错误并复原
- taskmgr-----任务管理器（2000／xp／2003
- winver---------检查 Windows 版本
- wmimgmt.msc----打开 windows 管理体系结构(WMI)
- wupdmgr--------windows 更新程序
- wscript--------windows 脚本宿主设置
- write----------写字板
- winmsd---------系统信息
- wiaacmgr-------扫描仪和照相机向导
- winchat--------XP 自带局域网聊天
- mem.exe--------显示内存使用情况
- Msconfig.exe---系统配置实用程序
- mplayer2-------简易 widnows media player
- mspaint--------画图板
- mstsc----------远程桌面连接
- mplayer2-------媒体播放机
- magnify--------放大镜实用程序
- mmc------------打开控制台
- mobsync--------同步命令
- dxdiag---------检查 DirectX 信息
- drwtsn32------ 系统医生
- devmgmt.msc--- 设备管理器
- dfrg.msc-------磁盘碎片整理程序
- diskmgmt.msc---磁盘管理实用程序
- dcomcnfg-------打开系统组件服务
- ddeshare-------打开 DDE 共享设置
- dvdplay--------DVD 播放器
- net stop messenger-----停止信使服务
- net start messenger----开始信使服务
- notepad--------打开记事本
- nslookup-------网络管理的工具向导
- ntbackup-------系统备份和还原
- narrator-------屏幕“讲述人”
- ntmsmgr.msc----移动存储管理器
- ntmsoprq.msc---移动存储管理员操作请求
- netstat -an----(TC)命令检查接口
- syncapp--------创建一个公文包
- sysedit--------系统配置编辑器
- sigverif-------文件签名验证程序
- sndrec32-------录音机
- shrpubw--------创建共享文件夹
- secpol.msc-----本地安全策略
- syskey---------系统加密，一旦加密就不能解开，保护 windows xp 系统的双重密码
- services.msc---本地服务设置
- Sndvol32-------音量控制程序
- sfc.exe--------系统文件检查器
- sfc /scannow---windows 文件保护
- tsshutdn-------60 秒倒计时关机命令
- tourstart------xp 简介（安装完成后出现的漫游 xp 程序）
- taskmgr--------任务管理器
- eventvwr-------事件查看器
- eudcedit-------造字程序
- explorer-------打开资源管理器
- packager-------对象包装程序
- perfmon.msc----计算机性能监测程序
- progman--------程序管理器
- regedit.exe----注册表
- rsop.msc-------组策略结果集
- regedt32-------注册表编辑器
- rononce -p ----15 秒关机
- regsvr32 /u zipfldr.dll------取消 ZIP 支持
- cmd.exe--------CMD 命令提示符
- chkdsk.exe-----Chkdsk 磁盘检查
- certmgr.msc----证书管理实用程序
- calc-----------启动计算器
- charmap--------启动字符映射表
- cliconfg-------SQL SERVER 客户端网络实用程序
- Clipbrd--------剪贴板查看器
- conf-----------启动 netmeeting
- compmgmt.msc---计算机管理
- cleanmgr-------垃圾整理
- ciadv.msc------索引服务程序
- osk------------打开屏幕键盘
- odbcad32-------ODBC 数据源管理器
- oobe/msoobe /a----检查 XP 是否激活
- lusrmgr.msc----本机用户和组
- logoff---------注销命令
- iexpress-------木马捆绑工具，系统自带
- Nslookup-------IP 地址侦测器
- fsmgmt.msc-----共享文件夹管理器
- utilman--------辅助工具管理器
- 系统查看=========systeminfo

- 轻松访问键盘快捷方式
  　　按住右 Shift 八秒钟： 启用和关闭筛选键
  　　按左 Alt+左 Shift+PrtScn(或 PrtScn)：启用或关闭高对比度
  　　按左 Alt+左 Shift+Num Lock ：启用或关闭鼠标键
  　　按 Shift 五次： 启用或关闭粘滞键
  　　按住 Num Lock 五秒钟：启用或关闭切换键
  　　 Windows 徽标键 + U ： 打开轻松访问中心
- 常规键盘快捷方式
  　　 F1 显示帮助
  　　 Ctrl+C 复制选择的项目
  　　 Ctrl+X 剪切选择的项目
  　　 Ctrl+V 粘贴选择的项目
  　　 Ctrl+Z 撤消操作
  　　 Ctrl+Y 重新执行某项操作
  　　 F2 重命名选定项目
  　　 Ctrl+向右键 将光标移动到下一个字词的起始处
  　　 Ctrl+向左键 将光标移动到上一个字词的起始处
  　　 Ctrl+向下键 将光标移动到下一个段落的起始处
  　　 Ctrl+向上键 将光标移动到上一个段落的起始处
  　　 Ctrl+Shift 加某个箭头键 选择一块文本
  　　 Shift 加任意箭头键 在窗口中或桌面上选择多个项目，或者在文档中选择文本
  　　 Ctrl 加任意箭头键+空格键 选择窗口中或桌面上的多个单个项目
  　　 Ctrl+A 选择文档或窗口中的所有项目
  　　 F3 搜索文件或文件夹
  　　 Alt+Enter 显示所选项的属性
  　　 Alt+F4 关闭活动项目或者退出活动程序
  　　 Alt+空格键 为活动窗口打开快捷方式菜单
  　　 Ctrl+F4 关闭活动文档(在允许同时打开多个文档的程序中)
  　　 Alt+Tab 在打开的项目之间切换
  　　 Ctrl+Alt+Tab 使用箭头键在打开的项目之间切换
  　　 Ctrl+鼠标滚轮 更改桌面上的图标大小
  　　 Windows 徽标键 + Tab 使用 Aero Flip 3-D 循环切换任务栏上的程序
  　　 Ctrl + Windows 徽标键 + Tab 通过 Aero Flip 3-D 使用箭头键循环切换任务栏上的程序
  　　 Alt+Esc 以项目打开的顺序循环切换项目
  　　 F6 在窗口中或桌面上循环切换屏幕元素
  　　 F4 在 Windows 资源管理器中显示地址栏列表
  　　 Shift+F10 显示选定项目的快捷菜单
  　　 Ctrl+Esc 打开「开始」菜单
  　　 Alt+加下划线的字母 显示相应的菜单
  　　 Alt+加下划线的字母 执行菜单命令(或其他有下划线的命令)
  　　 F10 激活活动程序中的菜单栏
  　　向右键 打开右侧的下一个菜单或者打开子菜单
  　　向左键 打开左侧的下一个菜单或者关闭子菜单
  　　 F5 刷新活动窗口
  　　 Alt+向上键 在 Windows 资源管理器中查看上一级文件夹
  　　 Esc 取消当前任务
  　　 Ctrl+Shift+Esc 打开任务管理器
  　　插入 CD 时按住 Shift 阻止 CD 自动播放
- 对话框键盘快捷方式
  　　 Ctrl+Tab 在选项卡上向前移动
  　　 Ctrl+Shift+Tab 在选项卡上向后移动
  　　 Tab 在选项上向前移动
  　　 Shift+Tab 在选项上向后移动
  　　 Alt+加下划线的字母 执行与该字母匹配的命令(或选择选项)
  　　 Enter 对于许多选定命令代替单击鼠标
  　　空格键 如果活动选项是复选框，则选中或清除该复选框
  　　箭头键 如果活动选项是一组选项按钮，则选择某个按钮
  　　 F1 显示帮助
  　　 F4 显示活动列表中的项目
  　　 Backspace 如果在“另存为”或“打开”对话框中选中了某个文件夹，则打开上一级文件夹
- Windows 徽标键相关的快捷键
  　　 Windows 徽标键就是显示为 Windows 旗帜，或标有文字 Win 或 Windows 的按键，以下简称 Win 键。XP 时代有 4 个经典的 Win 键组合：R/E/F/L。到了 Win7，花样更多了。
  　　 Win：打开或关闭开始菜单
  　　 Win + Pause：显示系统属性对话框
  　　 Win + D：显示桌面
  　　 Win + M：最小化所有窗口
  　　 Win + SHIFT + M：还原最小化窗口到桌面上
  　　 Win + E：打开我的电脑
  　　 Win + F：搜索文件或文件夹
  　　 Ctrl + Win + F：搜索计算机(如果您在网络上)
  　　 Win + L：锁定您的计算机或切换用户
  　　 Win + R：打开运行对话框
  　　 Win + T：切换任务栏上的程序(感觉是和 alt+ESC 一样 )
  　　 Win + 数字：让位于任务栏指定位置(按下的数字作为序号)的程序，新开一个实例。(感觉这个比较新颖，貌似快速启动。) Shift + Windows logo key +number：Start a new instance of the program pinned to the taskbar in the position indicated by the number
  　　 Ctrl + Win + 数字：让位于任务栏指定位置(按下的数字作为序号)的程序，切换到上一次的活动窗口。 Ctrl+Windows logo key +number：Switch to the last active window of the program pinned to the taskbar in the position indicated by the number
  　　 ALT + Win + 数字：让位于任务栏指定位置(按下的数字作为序号)的程序，显示跳转清单。 Alt+Windows logo key +number： Open the Jump List for the program pinned to the taskbar in the position indicated by the number
  　　 Win + TAB：循环切换任务栏上的程序并使用的 Aero 三维效果
  　　 Ctrl + Win + TAB：使用方向键来循环循环切换任务栏上的程序，并使用的 Aero 三维效果
  　　按 Ctrl + Win + B：切换到在通知区域中显示信息的程序
  　　 Win + 空格：预览桌面
  　　 Win + ↑：最大化窗口
  　　 Win + ↓：最小化窗口
  　　 Win + ←：最大化到窗口左侧的屏幕上
  　　 Win + →：最大化窗口到右侧的屏幕上
  　　 Win + Home：最小化所有窗口，除了当前激活窗口
  　　 Win+ SHIFT + ↑：拉伸窗口的到屏幕的顶部和底部
  　　 Win+ SHIFT + →/←：移动一个窗口，从一个显示器到另一个
  　　 Win + P：选择一个演示文稿显示模式
  　　 Win + G：循环切换侧边栏的小工具
  　　 Win + U：打开轻松访问中心
  　　 Win + x：打开 Windows 移动中心
- Windows Explorer 相关快捷键
  　　 Ctrl+N 打开新窗口
  　　 Ctrl+Shift+N 新建文件夹
