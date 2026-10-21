import re
NEW = {
"02": {
"c02_designers": "alt: Game designers gather around a whiteboard covered in “drop rates,” one holding a treasure chest, borrowing rules from the lab to design rewards\nt: On average 1 item per 5 monsters\nt: Which one? No telling",
"c02_kamin": "alt: Kamin’s blocking experiment: first a light announces the shock, then the light and a bell sound together, and the animal still does not learn what the bell means\nt: First: light → shock\nt: Then: light + bell\nt: {y=4}Bell? Useless\nt: {y=-4}Already announced, nothing to learn",
"c02_stampcard": "alt: Loyalty cards: two cards, one blank and one with two squares already stamped, and the stick figure holds the stamped one\nt: Blank, 8 squares\nt: 10 squares, 2 free",
},
"03": {
"c03_explorer": "alt: Explorer: a stick figure holding a magnifying glass lies in front of a wall at the edge of the map, with a hidden room behind the wall\nt: Hidden room\nt: Magnifier",
"c03_tour": "alt: The same tour group: four stick figures each doing their own thing, one with a phone taking a landmark photo, one ducking into an alley, one chatting as they walk, one rushing toward a good spot marked by a flag\nt: chat chat chat",
"c03_context": "alt: Counterexample: the same stick figure in three scenes holding different things: a magnifying glass while studying the map, a trophy while climbing ranks, and talking while playing with friends\nt: Newly hooked\nt: At max level\nt: With friends",
},
"04": {
"c04_pickone": "alt: In the same blocky world, one person builds a house, one explores a cave with a torch, and one high-fives a friend, so it can’t be given just one label\nt: Expression\nt: Discovery\nt: Fellowship\nt: One game, three ways to play",
},
"05": {
"c05_monsters": "alt: A level full of monsters, each walking its own patrol line with no connection to the others\nt: 50 monsters (only some drawn)\nt: Just a lot, not emergence",
"c05_kart": "alt: A racing game: a trailing pink car picks up a glowing power-up box and is catching up with the blue car ahead\nt: Behind → strong item\nt: ?\nt: Behind\nt: Ahead",
"c05_adriatic": "alt: In wartime there are few fishing boats at sea, and the share of predatory big fish goes up instead\nt: Less fishing in war, higher share of predators",
"c05_isolated": "alt: Thirty items each shut in their own little box, with no use for what is in another box\nt: 30 items that never meet\nt: (illustrative: only 6 drawn)",
},
"07": {
"c07_cup": "alt: A stick figure thinks the cup is full of water and lifts hard, but it is empty, and their hand flies up high\nt: Huh? Lighter than I thought\nt: Hand flew too high\nt: Expected position",
"c07_shake3": "alt: Three squares shaking at small, medium and large tiers: the amplitude grows as 1 : 4 : 8, and the bars below measure the amplitude with the same ruler, clear at a glance\nt: Basic 2\nt: Heavy 8\nt: Critical 16\nt: Bar = shake amplitude (1 : 4 : 8)",
},
"08": {
"c08_road": "alt: Two roads lead to a castle: the short road has a guard standing on it, with a treasure chest behind the guard; the long road loops far around, safe but bypassing the chest\nt: Short: guard and chest\nt: Long: safe",
},
"10": {
"c10_spine": "alt: Diegetic interface: the glowing spine bar on the character’s back is the health, the camera follows behind, and the player reads it at a glance\nt: Glowing bar on the back\nt: The shorter the bar\nt: the lower the health\nt: Zoom in",
},
"11": {
"c11_expert": "alt: A veteran packs “move plus jump” into one whole at a glance, taking up just one slot in their head; a newcomer’s slots are split into two\nt: Move + jump\nt: Move\nt: Jump\nt: Veteran\nt: Newcomer",
"c11_dashagain": "alt: Four level cards in a row, with a dash-jump icon on levels 2, 4, 8 and 15, the gaps growing wider\nt: Gaps keep growing: +2, +4, +7",
},
"13": {
"c13_tl_berk": "alt: On a city map, all four corners of an intersection are marked with small orange dots, showing that these corners have been rebuilt as gentle ramps\nt: Corner ramps",
},
"15": {
"c15_rps": "alt: Two stick figures play rock-paper-scissors, one showing rock and one paper, with a triangle cycle between them: rock beats scissors, scissors beat paper, paper beats rock\nt: Rock\nt: Paper\nt: Scissors\nt: Nobody is strongest",
},
"16": {
"c16_coffee": "alt: Two car-wash punch cards: one with eight blank spaces and one with ten of which two are already stamped, and the latter fills up faster\nt: All blank\nt: Two stamps free\nt: Visible progress gives a push",
},
"20": {
"c20_planeback": "alt: Comparison: on the left three returning planes covered in bullet holes, on the right two dashed outlines of planes that never came back, with the bullet holes clustered at the engines\nt: Made it back\nt: Didn’t return\nt: Holes at the engine",
},
"21": {
"c21_f2p": "alt: Free plus in-app purchases: many players pour free into a funnel, and only a very few (the gold dots) drop coins in at the bottom\nt: Everyone enters free\nt: A few pay, everyone is looked after\nt: Gold dot = paying",
"c21_ads": "alt: Watching ads voluntarily: a stick figure points at a fifteen-second ad on a phone, and after watching, a heart pops out of the phone reading “Revive”\nt: Ad 15s\nt: Revive!\nt: Watch an ad by choice, get a revive",
"c21_p2w": "alt: Pay to get strong: the rich stick figure is big and burly waving a giant sword, and the non-paying little stick figure with a small sword is suppressed into a sparring partner\nt: Payment decides who wins\nt: +9999 paid stat",
},
"22": {
"c22_pretend": "alt: Inside a dashed circle a stick figure in a green monster mask (with horns) pretends to be a monster chasing another screaming stick figure, while a real little dog outside the circle walks toward it: the chase inside is pretend\nt: Right now, we’re playing\nt: Real dog",
"c22_leak": "alt: A dashed magic circle with four arrows passing out from it, labeled money, identity, social consequences, irreversibility, showing that the circle leaks\nt: Circle\nt: Money\nt: Identity\nt: Social consequences\nt: Irreversible",
"c22_certificate": "alt: A child draws while staring at a certificate board beside them, and an arrow pulls the original interest in drawing toward the certificate, until it is only for the certificate and the interest is replaced\nt: Replaces interest\nt: Certificate\nt: Interest\nt: For the certificate",
},
"23": {
"c23_knob": "alt: A stick figure grips a big knob marked speed, turning it from “slow” to “fast,” and the blocks beside it fall faster and faster as it turns\nt: Knob: speed\nt: Slow\nt: Fast",
"c23_e_react": "alt: A stick figure sweats, staring at lights on a screen that flash faster and faster, with only hand speed left\nt: Flashing faster,\nt: same play",
"c23_peakend": "alt: An undulating curve of feeling intensity with the highest point marked peak and the last moment marked end (a bit lower than the peak), and a stick figure looking back at the curve\nt: Peak\nt: End\nt: Feeling ↑\nt: Time →",
},
"24": {
"c24_ramp": "alt: Three pipes, short, medium and tall, a stick figure jumps over them one by one, steadier each time\nt: One notch higher each step",
},
"25": {
"c25_ants": "alt: On the left a single ant can only walk and leave a scent; on the right a colony of ants, with no one in command, lines up into a winding route to food\nt: One:\nt: Simple rules\nt: A colony: a whole route\nt: No one in command",
},
"27": {
"c27_faulkner": "alt: Two groups of five testers each, one finding just over half the problems and the other almost all, with bars of very different heights\nt: Same 5 people, very different results",
},
"28": {
"c28_pretty2": "alt: Comparison: on the left cards drawn and laminated over three evenings that the stick figure can’t bear to change; on the right a sticky note written in pencil that takes ten seconds to tear up and rewrite\nt: Laminated, can’t change\nt: Tear up, rewrite\nt: Rough enough to tear up without regret",
},
"29": {
"c29_dtwalk": "alt: Two stick figures both walk at 1.4 meters a second: on the left big steps and sparse footprints, on the right small steps and dense footprints, the same speed, so comparing “how far per second” is the fair way\nt: Big steps, slow pace\nt: Small steps, fast pace\nt: 1.4 m per second\nt: 1.4 m per second",
},
}
for n, d in NEW.items():
    p = "work/illus-ch%s.en.txt" % n
    s = open(p, encoding="utf-8").read()
    for name, body in d.items():
        pat = re.compile(r"(?ms)^## %s\n.*?(?=^## |\Z)" % re.escape(name))
        blk = "## %s\n%s\n\n" % (name, body)
        if pat.search(s):
            s = pat.sub(lambda m: blk, s, count=1)
        else:
            s = s.rstrip("\n") + "\n\n" + blk
    open(p, "w", encoding="utf-8").write(s)
print("done")
