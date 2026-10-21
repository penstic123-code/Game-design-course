import re
p = "work/illus-ch00.en.txt"
s = open(p, encoding="utf-8").read()
NEW = {
"mountain": "alt: A stick figure climbing a mountain by hand, with a stamina ring over their head\nt: Stamina",
"forced": "alt: A company approval process: three dejected stick figures queue up, waiting for a pile of documents to be stamped\nt: Must! No choice",
"simcity": "alt: A management sim: a stick figure looks at the little city they built, with two contradictory thoughts floating above their head\nt: Playing\nt: mayor?\nt: Fighting\nt: myself?",
}
for name, body in NEW.items():
    pat = re.compile(r"(?ms)^## %s\n.*?(?=^## |\Z)" % re.escape(name))
    blk = "## %s\n%s\n\n" % (name, body)
    assert pat.search(s), name
    s = pat.sub(lambda m: blk, s, count=1)
open(p, "w", encoding="utf-8").write(s)
print("ok")
