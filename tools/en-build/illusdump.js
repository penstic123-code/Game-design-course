// node illusdump.js <pack.js|illus.js>  -> 输出该文件新增的插图 { name: {alt, texts:[...]} }
const fs = require("fs"), vm = require("vm");
const REPO = "C:/Users/彭诗迪/Desktop/game-design-course-web/js/";
const win = { document: {}, console }; win.window = win; const ctx = vm.createContext(win);
const load = f => vm.runInContext(fs.readFileSync(REPO + f, "utf8"), ctx);
load("illus.js");
const base = new Set(Object.keys(win.ILLUS));
const target = process.argv[2];
if (target !== "illus.js") load(target);
const CJK = /[\u3400-\u9fff\uff00-\uffef\u3000-\u303f]/;
const out = {};
for (const [n, it] of Object.entries(win.ILLUS)) {
  if (target === "illus.js" ? false : base.has(n)) continue;
  const all = (it.body || "") + (it.extra || "");
  const texts = [];
  for (const m of all.matchAll(/<text\b([^>]*)>([\s\S]*?)<\/text>/g)) if (CJK.test(m[2])) texts.push(m[2]);
  // 非 text 节点里的中文
  const rest = all.replace(/<text\b[^>]*>[\s\S]*?<\/text>/g, "");
  const other = CJK.test(rest) ? "WARN-CJK-OUTSIDE-TEXT" : undefined;
  out[n] = { alt: it.alt, texts, other };
}
console.log(JSON.stringify(out));
