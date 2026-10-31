// One entry per shipped APK. `release` points at the GitHub Release that holds the asset;
// every app here is arm64-v8a only, because all of them are native cross-compiles.
window.APPS = [
  {
    id: "freecad", name: "FreeCAD", cat: "pro", tag: "CAD",
    desc: "参数化 3D 建模，完整 Qt 界面：草图、Part、Mesh、Draft 等工作台，Python 控制台可用。",
    size: "406 MB", version: "0.2.0",
    release: "https://github.com/tzhazuma/freecad-android/releases/tag/android-v1"
  },
  {
    id: "blender", name: "Blender", cat: "pro", tag: "3D",
    desc: "Blender 5.3 alpha 原生运行：3D 视口、大纲、属性、时间线全部渲染，支持打开与保存 .blend。",
    size: "307 MB", version: "5.3.0-alpha",
    release: "https://github.com/tzhazuma/blender-android/releases/tag/android-v2"
  },
  {
    id: "octave", name: "GNU Octave", cat: "pro", tag: "科学计算",
    desc: "GNU Octave 11.3.0 的完整 Qt 图形界面：Command Window、File Browser、Workspace、Command History、Documentation、**编辑器**全部可用。编辑器支持行号、语法高亮、UTF-8 编码与行列状态栏，打开/保存走 Android 系统文件选择器。支持屏幕旋转与返回键退出确认",
    size: "191 MB", version: "0.2.0",
    release: "https://github.com/tzhazuma/octave-android/releases/tag/v0.2.0"
  },
  {
    id: "vscode", name: "VS Code", cat: "dev", tag: "编辑器",
    desc: "VS Code 4.141.0 原生运行：完整工作台、真 PTY 终端、Open VSX 扩展市场。自带 proot + Ubuntu 26.04 rootfs 与完整工具链（python / clang / go / rust / java / git / ssh / adb）。终端配置：菜单 → Terminal → Select Default Profile，可选 ubuntu / termux / android",
    size: "198 MB", version: "4.141.0",
    release: "https://github.com/tzhazuma/vscode-android/releases/tag/android-v1"
  },
  {
    id: "dsh", name: "DeepSeek Harness", cat: "dev", tag: "AI 终端",
    desc: "DeepSeek Harness 原生 Android 客户端：完整 agent 会话与工具系统。自带 Termux 用户态与 proot + Ubuntu 26.04，无需外部 Termux；工具链含 python / clang / go / rust / java / git / ssh / adb",
    size: "136 MB", version: "0.1.0",
    release: "https://github.com/tzhazuma/dsh-android/releases/tag/android-v2"
  },

  {
    id: "solidcraft", name: "SolidCraft", cat: "art", tag: "参数化 CAD",
    desc: "社区应用：参数化实体建模。草图约束、拉伸/旋转/抽壳/圆角、特征树与时间线，STEP / IGES / 3MF / STL / OBJ 导入导出，3D 视口带视图立方体。",
    size: "122 MB", version: "0.27.1",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "artcraftlauncher", name: "ArtCraft Launcher", cat: "art", tag: "启动器",
    desc: "13 个 Craft 应用的统一入口：扫描已安装的应用、直接启动，未安装的跳转到下载页。它本身不做创作，是把这一套串起来的那一层。",
    size: "24 MB", version: "0.10.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "vectorcraft", name: "VectorCraft", cat: "art", tag: "矢量",
    desc: "桌面级矢量编辑器：贝塞尔与节点编辑、图层、渐变、路径效果、PDF/SVG 导出。",
    size: "92 MB", version: "0.18.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "figcraft", name: "FigCraft", cat: "art", tag: "界面设计",
    desc: "界面与图标设计：画板、组件、约束布局，适合做 App 稿与设计系统。",
    size: "57 MB", version: "0.12.1",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "designcraft", name: "DesignCraft", cat: "art", tag: "排版设计",
    desc: "多画板排版与印刷设计，支持出血、色彩配置与 PDF 输出。",
    size: "77 MB", version: "0.14.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "deckcraft", name: "DeckCraft", cat: "art", tag: "演示",
    desc: "演示文稿编辑：主题模板、母版、逐页排版，可导出与放映。",
    size: "47 MB", version: "0.12.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "cadcraft", name: "CADCraft", cat: "art", tag: "CAD",
    desc: "二维工程制图：精确捕捉、尺寸标注、图层与线型，输出 DXF。",
    size: "36 MB", version: "0.14.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "wordcraft", name: "WordCraft", cat: "art", tag: "文档",
    desc: "富文本与长文档写作：样式、目录、脚注，支持导出 DOCX / PDF。",
    size: "61 MB", version: "0.12.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "gridcraft", name: "GridCraft", cat: "art", tag: "表格",
    desc: "电子表格：公式引擎、单元格格式、图表与 CSV 互导。",
    size: "34 MB", version: "0.13.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "soundcraft", name: "SoundCraft", cat: "art", tag: "音频",
    desc: "多轨音频编辑：波形剪辑、淡入淡出、混音导出。",
    size: "31 MB", version: "0.14.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "filmcraft", name: "FilmCraft", cat: "art", tag: "视频",
    desc: "视频剪辑：时间线、片段裁剪、转场与字幕。",
    size: "48 MB", version: "0.12.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "lightcraft", name: "LightCraft", cat: "art", tag: "修图",
    desc: "照片调色：曲线、色阶、HSL、局部调整，支持 RAW 流程。",
    size: "50 MB", version: "0.13.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "photocraft", name: "PhotoCraft", cat: "art", tag: "照片",
    desc: "图层式图像处理：选区、蒙版、混合模式与滤镜。",
    size: "63 MB", version: "0.15.1",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "effectcraft", name: "EffectCraft", cat: "art", tag: "特效",
    desc: "节点式合成与特效：图层树、关键帧动画、粒子与光效。",
    size: "71 MB", version: "0.16.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "printcraft", name: "PrintCraft", cat: "art", tag: "PDF",
    desc: "PDF 阅读与编辑：页面组织、注释、表单与导出。",
    size: "59 MB", version: "0.13.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  }
];
