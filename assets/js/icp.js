(function () {
  var h = location.hostname;
  if (!(h === "moringlabs.cn" || h.endsWith(".moringlabs.cn"))) return;

  var container = document.getElementById("icp-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "icp-container";
    container.className = "inline-flex items-center gap-2 text-xs text-gray-400 mt-2";
    var footer = document.querySelector("footer");
    (footer || document.body).appendChild(container);
  } else {
    container.className = "inline-flex items-center gap-2 text-xs text-gray-400";
  }

  var a = document.createElement("a");
  a.href = "https://beian.miit.gov.cn/";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "hover:text-gray-500 transition-colors";
  a.textContent = "苏ICP备2026018086号";
  container.appendChild(a);

  var sep = document.createElement("span");
  sep.className = "text-gray-200";
  sep.textContent = "·";
  container.appendChild(sep);

  var b = document.createElement("a");
  b.href = "https://beian.mps.gov.cn/#/query/webSearch?code=32010502011411";
  b.target = "_blank";
  b.rel = "noreferrer";
  b.className = "inline-flex items-center gap-1 hover:text-gray-500 transition-colors";

  var img = document.createElement("img");
  img.src = "/assets/beian.png";
  img.alt = "公安备案";
  img.className = "w-[14px] h-[14px]";
  b.appendChild(img);

  var txt = document.createElement("span");
  txt.textContent = "苏公网安备32010502011411号";
  b.appendChild(txt);

  container.appendChild(b);
})();
