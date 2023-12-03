const { start } = require('repl');

let puzzleInput = `....573.613.........965............691......892..948.......964........439.375..................320......273...........352.284...............
.......*.............*.....814...............$....*........../..94......*....=.............103............/..882*...........+...............
...........328....598.....*........................819...................199........60*132..@....................685..........6.........493.
777....763...*.........510...614..................................439..............................216......925.......748....*....540.......
...=...-....710.............../...273.....933.............%...753...=......33......@........213$.....*..408...*......*.......514....*...130.
.................283...............%........*...........541..............&..........129...........873..@....884...897.......................
......#....=............................984..225.167..........303.....144..391....%......292................................909.............
.....915...580.................+...688.....%.......*.*........*...........*......47....-.............................586...........78.......
......................467.514.267...=................317......942........170..........658..669.....942...347..201........=658........*401...
....626.........549.....*..................845..............%.......925.......932............./.%...........*.....247...........#...........
......*...620%..#.......797.....+.615.....*..................568.......+...-....................612.........959...*...407........631........
...499.......................153..../....51...........&.569-................463.102..477..685...........715.....794..=.....353..............
..............17..........&........................351...........&...............%....*..=.....811.....................87.=....7....656.....
..887........*............804................801................727..52.............599....771../.....*567....................*.............
..............423.114..........+....177..934....*854..927............%.....607*.............*......940......................342......610....
.......592.........&.........298..........*..........*........*........613.....422.......897..................116...993..........328........
.........*........................&930..630...205....371.......631.......*.....................................*.....&.............-..%.....
..........526..................................*...........................&...126..............112...151..988..960....................271..
..............830..............976...........560..&.....843.....8.....+....985.%............390*.....*.......+......308.....725..*..........
...422..205..#....97......228...*.......719........695...-..574*....131...........522..............%....................195*....608.....923.
......+...*.......*.........*.610.........&.......................................*....349........854..506.793..............................
..782...176....711..823..804.........426.......................................441......*.............+....&.....................354*.......
.....*.................*................*......280..............&.461*.............*.........961..&............351*136..521*584......575....
.....688.965....../...661........../...60..314*........758.11.394.....507..#942.336.263..545.......485......................................
...........*..151.4................739............954.....*..................................285.....................618.4...........*......
.....47..266..............169.................109...*...........992*616.................818..=......659..........%......*.........270.427...
.......*.....@151.*872....-.......8....754..........846.....................764.514.416...*....526....*...295.....155...........*...........
........524............./.........+.......&........................=...........*........20...@........416....*...............947.640........
............&....%.......672.................................732.988.......846...&...31.....437..............697..370...655...........634...
......188.753.....34...........342*415....792............744..&........#....*....584.+..........*208...$...............*.....754.......*....
..570.#.....................................*....989*695..*..........338...940.........$865..950........892............751.....%...378.493..
..........702........290....*277.............689..............787..............53@...............%879................................*......
....80.....*.............126............519........809..781.....*..353$.876........43......................%.........484.........=...538....
...*.......816.......128.....397..242.........240.........-....902.......*...............896............988...499......-...544...616........
..218..568......774..*......*....*.....502...*.....161...............442...733...........@...41...-516........*...360.....*..........708....
..........*199.......936.776...151.......@..695.............................*..................-.......851.581........632..125......*.......
................................................453.414...602.............141....958.572.....#....*............369.......*.......838........
.......211...809...820..............+....335......*....*.....*................35*.......*....291.380.356........*..451*..443.308.......*444.
........@......*...+...........*....639..*.....246............29.........473............662...............652.382..............*....299.....
..........*....245...........344..........867.........460........738*608...$......+..........934..68.....+.........@653.145.992.............
..79$.69+..361........-.................................-.........................397........*...*.........&582..........=......./311..987..
.....................756.........452....504..655.886................617$...363.............953.210................#....................*....
.........#......291.............*......&.....*............416................*..........................529........560.....100...309..430...
..........173......*......=......322........573..............*140.............806.../817.....405..854......*................*.../...........
..383............633.....219.-76.....975........734.....47@..........457.108..................&.....*.......746...769.......279....*.....157
....*................................*..................................*....@.442....850*.........577..$............&..........286.430.....
...330..226...........740........552.294.%250........695..........484.....708....+........439.246.......432.762&.......$277.................
.......*.......293.....*...331...*.....................*..19........*..........................*.................-172.........-905.....706..
......996........*..795.....*....747...*995..964.....53..*.....823.774..#...........135........794......&../74..............................
.995..........557............623.................%........151..&.........478....*...=..................634.........918..487.................
....................150*861........864.......676..710...........................781.....272.......782@........492....*..............-...=...
....575.......#304............./....*.......*................*464.......................$.................461..-......709......#..908..875..
.......*..............859.26.243.931.....889...........................306..................861$.........*........280.........383...........
428...404...*42..........*.............%............917....127............*.............&........863..599.....120*.......221............*...
...*................840....=.303.......69.../......-.........*.............990...........157.............................*...........209.100
.723....638....578.....*..70.................120.....106...267.....................112=......#736..974..................103..632............
.........*....*.......803......815.....*...............$........../74..........#....................*........#......274.....................
......295...432.$812.............#...864.143...................@............515...................376.....208.......*............%832...702.
..............................&....+........*.........619......443.............../73.455..............685............287.....=..............
.....859.......893......85..509..111...@.686.....572..*...415...............$.........*..76...../....*.....$189..128.......817.....796#.....
..........360...*...193..#...........506.....545.$...........%...325..186...820....846..*....590.....96..........*..........................
..........$....613.........141................*.....................*....$...............428..................497...892.....................
............87.............*........../.%709.772..$.....358..406.355...........833.....#..........997.....*..........*....562...24....316...
..............*......615...236.....519.............255../......+...........617*.........855..............34........313......#....*..........
.........-...388......*........547.................................381..............118.....400.71+............550.............750.685......
.......722.......932.793...470..%..164...647*............467...468*......838.........*........*.................*........37...........*646..
..................*...........&...*..........730..492...@.................*....957..598..55.924.584&............42.........%....*...........
......346..141....583................705*629.....................18........713......................................../......284............
..984..+....$............*..957.141..........*380...748.999........$.....#.......292....788*284.....................124...............737...
.....*...........%527.639......*....546...789........*..................757.....$.............................395.......367..554..738..*....
..560....594..........................*............409..319...#....738...........................................+.........=....+..-..422...
........*...............$.....996.....496....596........*....502................*947..362..+.....804.......18...............................
....=...476..417.........740....*.725........*.....479+.645........602.......847........=.976....................*........147...........192.
..912.......*......768.......375....*........613..................*...............................788....#....296.315.......*...............
............28.......=..............648...&......501#.832......106..-101./.....907..................@....278.............@...814..722...526.
.........................................721.314......*...................960...*.......218............%...............229...........*......
........1..........849........947.880...........*......591........483..........544.......@..........656......................100......716...
.........*..*........*....74.%..........773..813...........607.......................*........775................294....*.....=..876........
.......491.69..-.....344..*..........................................897..........429.762...........915..169.....*...732.927....@...........
..493..........545.......128.......*......427*....+343......146......................................*.....#....281.........................
....*..............+.-.......%..477.508.......443.............*.878*393...689...#..........282&...810.........................588.....*.....
....41..278@.....69..706...389...........................804.................*...249..................*889....................*....959.462..
.............495..................................994.......*71..102.........286...........@........74.....302.457....*633..118.............
................*386...388.........217.368....-..................*.......997........555.$...350............*.....*.389................#.....
....192..................*...850...*...*...991.............+.....345..........&568...-..884........528...364..284..........393.......238....
....*......63......559...9...$...897...788.....297.......687...........650*...........................*..............988..*.................
.....213..*..........*........................*............................881....165.....457.339..388........#950..*......60.....440.......
...........700..103..693.636#..................841..*................424..........*.....%.......*......................................@736.
....897......../...................................946...@13.....70..*......$..135......764......693..210...866.....531/.454.......=........
....+....................%..........61.201.195.....................%.108...735......305..............*.....*.............*.......435...$....
......366....738.......963....421......*........293...............................................924.....724...........410.............943.
.........@......*...................865.....633..*................................721........................................537............
.....&.........569.............831.........*......482...609.............398*........*..........222..............557............*......412...
......684...........111....@...*.....35.....689...........-.................415..161..=109.....*........+.............942.....921....-......
..........%.................73..616.*.........................861............................146.436.219....811.........*...................
...........811...682.................395.....266.97....-949..$.....567...476.......721............+.................816..866.268.534........
....................#........................*.................492..*......*..944...*..................................*......*....%........
..878..447*197..414...............491...905.610....=...260........*.......790...*...494.....226+........679.125..&...394.....721............
...*..............%...592........*........*......148...*........162.749..........67......................*....#..637........................
391...@.................@.584...942......912.465......324..546........=......109....831..........897#.469................100...338..........
....191..669.....264............................&.........*......700.....219*.....#...&...................762....501.....*........*.274.....
...........-...................985.....#....369.....639..204....*.................972....+................*......*.....381.#463.96.....*....
....*................*...............*..7...*......$.........806....104...350...........970............197......801...................931...
.194.166...117....846.803..........487.....913.....................*.....$..........852....................913........156........491........
............................260................946....248...752..400...........................=810.....15*.....70...*.......910......200...
...-...............455......$.........*833...........*................959...@.............778...................*.....256.......@.......*...
....306............@...41..........352......490#......249...+683.......+..140......827+...*.......241%..-...151..916......@...+......218....
........608...........*...533..382.....108*..............................................734...........396../........802.448..613...........
......................243....*....*........287.........711......930............177..805.........756..................................#......
......386.....................252.114............#.............#.....786.916....$.....*....*.....*..866..............+................379...
..............655...*...735..............626......538..25.131.......*......*........744.535.612.977.*....208..+...314........467..648.......
.50............*...922...*...267..........*..............*........721...160....@64...................3.....*..774.........../....*..........
......./.....189.........56....*.....953.108..242..383.......237......+............*344...=608............542......436*........941..........
....479......................848...................-.....726........473.........376....................................814..........85......
..............120.157....-94.......766.....................-....419.....%134..............739...187....369.641..............................
........&........*....%...........*.....735.....274.$................52...................-.......*.......*.........603*713....317..........
.....384.............186.......587.......*......*...529.......310.....*..865..................................980................*..........
..........809...&960..................713.....546.........940.......326..........524.480.........237.....122..+.........868...824...........
.............@.............477*........................26....*..726........541.....*....*...........*....*.........-...*....................
...%803........355.376.81......172....286-.490.......-...%..313...*.......*......246.799............718...922....189.402.......869..........
..........983....*.*.....*...................#......458.........426....192...966..............710..............................*.........480
...891....*....251..268..782.......52..-........889........................./.................*.....501.............446........927..........
......*.841.........................&..159.@606..*.................*456.........792......905...535.....*.482......../..................425..
....952......533.......446....731...............732.....*234....846......................*..........325......140......328.........359.+.....
.........89.*.....455.*.........*..337*802...........411.............921.................87.......................&.........376...-.........
............882.......545....959.............................432....*.........521............................*.266..646....@................
................................................@.......378.....*..377.......-.....546..441-...............559.....*.....-.........&....594.
.......*719..293....531..513.330..-...209...920.813.981...*....61........403...845*.............506......@.......33...894........992...*....
.....................*..........+..83........#..........296..&......*887.*............-........*........620.................342.......39....
....89*579..+638...704.......*.................192./438.....797..480.....585.......690......@.100..............................*622.........
..........................146.910........................................................474......................828.401...................
......740....606....................994....-...................%.....%....373...............................#434.....*..............%609....
.660..%....%....................&....*..889........../..246....870.87..@............*..........696..+601....................................
.........335.843*646.....423..111.929.........114..393..*..............908...-.....965.....113..-..........853*459.267...&.....397......356.
........................+................................824....../.........965.............%.......................*..651.......=..42+.....
.....764............809....@815...973....907.......261@..........590....+./............@646....713..918......341..396.......................
.....*..............*.....................-...........................678.371.701................*....*.......-..........548................
938..69.......92...521.....*390.....=237....287.......182....70..51...........*................773..914..747.....415.....*.....94..680..738.
...*...........*........713..................*.........*......*./......503...118..........@643............*..316*........199.....&....*.....
.341...........122.730.............890......20..570....64...22..........................................146............................479..`;

const puzzleArray = puzzleInput.split('\n');
let rowNo = 0;
const regexp = /\d+/g;
let sumOfParts = 0;

for (x in puzzleArray) {
  const matches = puzzleArray[x].matchAll(regexp);
  for (const match of matches) {
    console.log(
      'Row:',
      x,
      'StartIndex:',
      match.index,
      'Length:',
      match[0].length,
      'Value',
      match[0]
    );
  }
}

console.log(sumOfParts);
