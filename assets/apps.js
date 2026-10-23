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
    desc: "GNU Octave 11.3.0 的完整 Qt 图形界面：Command Window、File Browser、Workspace、Command History、Documentation 全部可用，octave:1> 提示符下可直接求值。",
    size: "191 MB", version: "0.2.0",
    release: "https://github.com/tzhazuma/octave-android/releases/tag/v0.2.0"
  },
  {
    id: "vscode", name: "VS Code", cat: "dev", tag: "编辑器",
    desc: "VS Code 4.141.0 原生运行：完整工作台、扩展、真 PTY 的集成终端。内置 Termux 引导环境（真 bash + coreutils + apt），另有 Android sh 与 ELF shim 可选；已内置 openssh 与 adb；还能 ssh 进安卓上单独的 Termux 应用，拿到它自己的完整环境。",
    size: "198 MB", version: "4.141.0",
    release: "https://github.com/tzhazuma/vscode-android/releases/tag/android-v1"
  },
  {
    id: "dsh", name: "DeepSeek Harness", cat: "dev", tag: "AI 终端",
    desc: "把 dsh 的 Node 运行时整个塞进 APK：前台服务托管，内置模型配置，命令行与 SAF 文件读写齐备。",
    size: "136 MB", version: "0.1.0",
    release: "https://github.com/tzhazuma/dsh-android/releases/tag/android-v2"
  },

  {
    id: "vectorcraft", name: "VectorCraft", cat: "art", tag: "矢量",
    desc: "桌面级矢量编辑器：贝塞尔与节点编辑、图层、渐变、路径效果、PDF/SVG 导出。",
    size: "80 MB", version: "0.12",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "figcraft", name: "FigCraft", cat: "art", tag: "界面设计",
    desc: "界面与图标设计：画板、组件、约束布局，适合做 App 稿与设计系统。",
    size: "48 MB", version: "0.9",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "designcraft", name: "DesignCraft", cat: "art", tag: "排版设计",
    desc: "多画板排版与印刷设计，支持出血、色彩配置与 PDF 输出。",
    size: "65 MB", version: "0.8",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "deckcraft", name: "DeckCraft", cat: "art", tag: "演示",
    desc: "演示文稿编辑：主题模板、母版、逐页排版，可导出与放映。",
    size: "44 MB", version: "0.7",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "cadcraft", name: "CADCraft", cat: "art", tag: "CAD",
    desc: "二维工程制图：精确捕捉、尺寸标注、图层与线型，输出 DXF。",
    size: "31 MB", version: "0.6",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "wordcraft", name: "WordCraft", cat: "art", tag: "文档",
    desc: "富文本与长文档写作：样式、目录、脚注，支持导出 DOCX / PDF。",
    size: "55 MB", version: "0.7",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "gridcraft", name: "GridCraft", cat: "art", tag: "表格",
    desc: "电子表格：公式引擎、单元格格式、图表与 CSV 互导。",
    size: "30 MB", version: "0.7",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "soundcraft", name: "SoundCraft", cat: "art", tag: "音频",
    desc: "多轨音频编辑：波形剪辑、淡入淡出、混音导出。",
    size: "27 MB", version: "0.6",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "filmcraft", name: "FilmCraft", cat: "art", tag: "视频",
    desc: "视频剪辑：时间线、片段裁剪、转场与字幕。",
    size: "37 MB", version: "0.2.1",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "lightcraft", name: "LightCraft", cat: "art", tag: "修图",
    desc: "照片调色：曲线、色阶、HSL、局部调整，支持 RAW 流程。",
    size: "34 MB", version: "0.2.1",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "photocraft", name: "PhotoCraft", cat: "art", tag: "照片",
    desc: "图层式图像处理：选区、蒙版、混合模式与滤镜。",
    size: "45 MB", version: "0.3.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "effectcraft", name: "EffectCraft", cat: "art", tag: "特效",
    desc: "节点式合成与特效：图层树、关键帧动画、粒子与光效。",
    size: "65 MB", version: "0.4.0",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  },
  {
    id: "printcraft", name: "PrintCraft", cat: "art", tag: "PDF",
    desc: "PDF 阅读与编辑：页面组织、注释、表单与导出。",
    size: "47 MB", version: "0.2.1",
    release: "https://github.com/tzhazuma/artcraft-android/releases/tag/android-v1"
  }
];
