p = "entool.py"
s = open(p, encoding="utf-8").read()
old = "t[0] not in ' ).,;:%]\\'\"!?'"
assert old in s, "not found"
s = s.replace(old, "t[0] not in ' ).,;:%]\\'\"!?”’—'")
open(p, "w", encoding="utf-8").write(s)
print("patched")
