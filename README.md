# Moring Labs

> **Crafting pure native experiences with craftsmanship.**

Moring Labs 是一家专注于 macOS 平台的独立应用实验室。我们崇尚极致的性能、坚如磐石的隐私保护以及像素级的克制设计。

[🌐 访问官网](https://moringlabs.com)

---

## 🛠 Our Philosophy | 我们的理念

- **Native First**: 坚持使用 Swift 与 SwiftUI 构建纯生应用，拒绝套壳，追求零延迟的响应速度。
- **Privacy Centric**: 所有的核心逻辑均在本地运行，100% 离线处理，你的数据永远属于你。
- **Minimalist Design**: 遵循 Apple 设计准则，不增加任何多余的干扰，让工具回归工具本身。

---

## 🚀 Product Matrix | 产品矩阵

### 1. PDF Merge & Split Assistant (已上线)
- **定位**: 极速、安全的 macOS 原生 PDF 效率工具。
- **核心**: 离线无缝合并、精准拆分、实时视觉预览。
- **[App Store 传送门](https://apps.apple.com/app/id6758044607)**

### 2. AppSubmitter (Testing)
- **定位**: 独立开发者的 App Store Connect 自动化管理神器。
- **核心**: AI 自动多语言本地化、素材资产管理、发布流程加速。

### 3. FormatRocket (Testing)
- **定位**: 纯原生多媒体格式转换器。
- **核心**: 基于 AVFoundation 底层压榨性能，支持视频/音频/图片极速离线转换。

---

## 🤖 Open Source Models | 开源 AI 模型

除了精心打磨的 Mac 应用程序，Moring Labs 也积极拥抱并回馈开源 AI 社区。为了让超大参数模型在 Apple Silicon (M1~M5) 上流畅运行，我们提供了精心设计的 MLX 混合精度量化大模型：

- **聚焦端侧极致优化**: 显著改善 96GB Apple Silicon 的端侧长上下文体验。常规超过 100B大参数量的 4-bit 量化模型加载后在处理短上下文时运行良好，但随着上下文的增加，KV Cache 会导致内存突破 96GB 极限并发生严重 Swap 从而极大影响推理速度。通过推出 3.7-bit 等混合精度版本，可为您省出大量宝贵内存，在确保模型能力的的同时，使长上下文推理舒适地控制在 96GB 内存以内；同时也为 128GB+ 的设备保留了极大的动态运行余量。
- **[🤗 访问我们的 Hugging Face 主页](https://huggingface.co/MoringLabs)**

---

## 📬 Contact | 联系我们

- **Email**: [strivemoring@gmail.com](mailto:strivemoring@gmail.com)
- **Website**: [moringlabs.com](https://moringlabs.com)

---

自豪地由 Moring Labs 驱动。  © 2026 Moring Labs.
