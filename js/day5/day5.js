// Read input and set all arrays
// Map structure [destination, source, range]
const inputText = `seeds: 1132132257 323430997 2043754183 4501055 2539071613 1059028389 1695770806 60470169 2220296232 251415938 1673679740 6063698 962820135 133182317 262615889 327780505 3602765034 194858721 2147281339 37466509

seed-to-soil map:
1280158874 0 45923291
0 1431836695 234754481
2476778759 365219074 73714061
3997869725 4152785341 16553125
3014496893 3731980396 420804945
3435301838 2667516045 60128827
2784964719 2727644872 187996890
792043155 613341484 49447658
1444573280 2476024240 74468580
2728723659 3675739336 56241060
2704677524 4236229588 24046135
2360313001 1780050354 116465758
1326082165 226504189 118491115
3495430665 3630596320 3607732
1519041860 662789142 56785021
3973462947 3383860003 24406778
1575826881 45923291 119425025
1695251906 766775600 665061095
2667516045 3323175190 6512477
4240794960 3329687667 54172336
720792676 344995304 20223770
489053726 438933135 143852141
741016446 746305099 20470501
3499038397 4169338466 66891122
761486947 582785276 30556208
3565929519 3249598798 73576392
659636803 165348316 61155873
234754481 2221724995 254299245
2674028522 4260275723 30649002
841490813 1896516112 325208883
632905867 719574163 26730936
1166699696 1666591176 113459178
2972961609 3634204052 41535284
4195000071 3408266781 45794889
4190957500 4290924725 4042571
3639505911 2915641762 333957036
4014422850 3454061670 176534650

soil-to-fertilizer map:
528009375 3804807330 65591757
3608285775 3569685636 235121694
432120564 3045118038 95888811
3843407469 1792428879 363149111
4206556580 2155577990 88410716
3441777 3141006849 428678787
1019419908 3870399087 424568209
593601132 2619299262 425818776
1443988117 3441777 1788987102
3232975219 2243988706 375310556

fertilizer-to-water map:
3768646817 2541098841 42522952
657445332 493998363 293094466
3153469588 3947073749 287697992
2513829777 3047249136 215146452
968568929 29638292 96921246
1600806946 1111339724 96961929
3880726440 2687212715 52238929
416544049 1090614661 20725063
1749924539 4274983783 15782292
1306572576 1208301653 21184719
2134505230 4234771741 40212042
1697768875 0 29638292
3811169769 2617656044 69556671
487527141 787092829 169918191
3932965369 2583621793 34034251
178562138 1471396125 237981911
2728976229 3010972799 36276337
2174717272 3262395588 176952386
3035746039 1749924539 117723549
2794475974 2764473831 241270065
437269112 443740334 50258029
2790274753 4290766075 4201221
3441167580 3767315650 179758099
3966999620 3439347974 327967676
2351669658 2236446487 162160119
1585319642 1229486372 15487304
1327757295 186177987 257562347
2765252566 2739451644 25022187
950539798 1709378036 18029131
1765706831 1867648088 368798399
1199093816 1363917365 107478760
3763417914 3005743896 5228903
1065490175 957011020 133603641
3620925679 2398606606 142492235
59618449 1244973676 118943689
0 126559538 59618449

water-to-light map:
2368177077 1928300684 68416280
3459327457 4032125413 181740227
2874128303 2996109939 93290692
40167335 1203835270 50270286
2984608918 3988581415 43543998
1295445723 891961544 129160430
232873619 72411133 344405432
4002859459 4225073350 66563582
3451555101 2874128303 4441992
3957368975 2950619455 45490484
4192270745 3148930063 6297777
1638782153 2125726715 498901151
3028152916 2912054150 38565305
577279051 1504061698 367203335
3418071246 2878570295 33483855
3897839543 3089400631 59529432
2967418995 3166056654 3449280
3641067684 3835626234 152955181
4147219041 3436688572 45051704
2436593357 1021121974 182713296
3066718221 3484273209 351353025
2647866375 1254105556 189577037
4198568522 3340289798 96398774
2619306653 39188438 21015758
2982075985 3481740276 2532933
4069423041 3155227840 10828814
2186332185 1443682593 52835141
90437621 678875874 142435998
980629741 2624627866 212815546
2239167326 1996716964 129009751
1424606153 571958210 106917664
0 1871265033 40167335
2980967789 4223965154 1108196
1619041805 450217426 19740348
1193445287 469957774 102000436
944482386 426277008 23940418
4080251855 3169505934 66967186
1548392133 821311872 70649672
1531523817 1911432368 16868316
2970868275 4213865640 10099514
3455997093 4291636932 3330364
2137683304 416816565 9460443
3794022865 3236473120 103816678
2147143747 0 39188438
2640322411 1496517734 7543964
968422804 60204196 12206937

light-to-temperature map:
224631556 2579077346 68012835
93390978 2647090181 93292258
836334842 260175809 93895333
3305235739 4175688657 119278639
2495493200 354071142 67947352
2563440552 648390650 214063090
4184988573 4065709934 109978723
930230175 2740382439 151863620
2777503642 1813071562 114742417
3424514378 3772814840 292895094
1492090043 422018494 226372156
3717409472 3176683751 126763710
3273297 2243837725 90117681
1216313119 2511603925 67473421
4104753748 3096448926 80234825
2392410003 1112358810 103083197
759707869 2434976952 76626973
2031212648 2333955406 101021546
2132234194 0 260175809
1718462199 1931087276 312750449
186683236 1682505485 37948320
1174711552 1070757243 41601567
292644391 1215442007 467063478
3844173182 3512234274 260580566
1283786540 862453740 208303503
3096448926 3303447461 208786813
1082093795 1720453805 92617757
0 1927813979 3273297

temperature-to-humidity map:
1908382071 0 48093237
1668173777 369927146 108464980
2454615458 3265918092 19222900
2948843885 2383489773 582426713
1291899323 304752282 65174864
4051886972 3793288156 243080324
2849120094 3285140992 99723791
2415628816 3186987107 38986642
724194709 716571124 379381363
1103576072 2070505932 18664072
3531270598 1602200086 102620550
4020906946 3755760878 30980026
1122240144 2285968817 97520956
2779959793 1533039785 69160301
1357074187 2089170004 196798813
1823337263 624772153 85044808
561911923 1433912547 99127238
2538151277 1095952487 222368482
1776638757 709816961 6754163
2248869517 1776958859 59989455
2760519759 48093237 3497277
3770981692 4278303020 16664276
3755760878 4263082206 15220814
2497298857 263899862 40852420
2473838358 1900103862 23460499
234010997 51590514 212309348
661039161 1836948314 63155548
0 1923564361 87630970
1219761100 1704820636 72138223
87630970 478392126 146380027
1956475308 3462247498 171643650
3787645968 3786740904 6547252
2764017036 2054563175 15942757
2171486802 3384864783 77382715
446320345 1318320969 115591578
1783392920 3225973749 39944343
2308858972 2965916486 106769844
1553873000 3072686330 114300777
3794193220 4036368480 226713726
2128118958 2011195331 43367844

humidity-to-location map:
2944942064 3820503519 61983659
3834803738 3234323053 106874653
2156211251 3962463577 28956273
483302901 3882487178 79976399
2282996952 2161034243 46548053
2629999410 1876993734 225283872
3370099006 3129013552 105309501
1029930529 620272722 135507476
3572091970 2932598747 109287331
3739626327 942443797 51739908
3311342369 2102277606 58756637
3941678391 399929037 136325691
1245368468 58880743 172279414
790057642 1189404679 239872887
1498307968 3341197706 67668316
273081010 616914814 3357908
2501095485 2803694822 128903925
3475408507 4198283833 96683463
1860675375 3456652816 219039792
245544342 2207582296 27536668
3006925723 1666468371 210525363
3791366235 3733939634 11933242
1165438005 1502653815 79930463
1691906495 231160157 168768880
1590576804 994183705 101329691
2079715167 2235118964 76496084
276438918 3991419850 206863983
563279300 2507766048 226778342
2855283282 3408866022 47786794
1565976284 2311615048 24600520
3217451086 1095513396 93891283
3803299477 1429277566 31504261
4161888175 2757743175 45951647
2903070076 1460781827 41871988
3681379301 3675692608 58247026
4207839822 3041886078 87127474
2185167524 2734544390 23198785
2329545005 2336215568 171550480
4078004082 1582584278 83884093
1417647882 536254728 80660086
58880743 755780198 186663599
2208366309 3745872876 74630643`;

// const inputText = `seeds: 79 14 55 13

// seed-to-soil map:
// 50 98 2
// 52 50 48

// soil-to-fertilizer map:
// 0 15 37
// 37 52 2
// 39 0 15

// fertilizer-to-water map:
// 49 53 8
// 0 11 42
// 42 0 7
// 57 7 4

// water-to-light map:
// 88 18 7
// 18 25 70

// light-to-temperature map:
// 45 77 23
// 81 45 19
// 68 64 13

// temperature-to-humidity map:
// 0 69 1
// 1 0 69

// humidity-to-location map:
// 60 56 37
// 56 93 4`;

const inputArray = inputText.split('\n\n');
//Set seedarray
const seedArray = inputArray[0]
  .replace(/\D/g, '-')
  .replace(/\D+/g, ' ')
  .trim()
  .split(' ');

// Set All Maps
const seedToSoilMap = setMap(1);
const soilToFertilizerMap = setMap(2);
const fertilizerToWaterMap = setMap(3);
const waterToLightMap = setMap(4);
const lightToTemperatureMap = setMap(5);
const temperatureToHumidityMap = setMap(6);
const humidityToLocationMap = setMap(7);

part2();

function part1() {
  let nextLocationArray = getNextLocations(seedArray, seedToSoilMap);
  nextLocationArray = getNextLocations(nextLocationArray, soilToFertilizerMap);
  nextLocationArray = getNextLocations(nextLocationArray, fertilizerToWaterMap);
  nextLocationArray = getNextLocations(nextLocationArray, waterToLightMap);
  nextLocationArray = getNextLocations(
    nextLocationArray,
    lightToTemperatureMap
  );
  nextLocationArray = getNextLocations(
    nextLocationArray,
    temperatureToHumidityMap
  );
  nextLocationArray = getNextLocations(
    nextLocationArray,
    humidityToLocationMap
  );
  console.log(Math.min(...nextLocationArray));
}

//Map structure [destination, source, range]
function part2() {
  //-----------------NEW APPROACH----------------------
  const newSeedArray = [...newInitialSeedArray(seedArray)];
  const sortedSeedToSoilMap = arraySort(seedToSoilMap);
  const sortedSoilToFertilizerMap = arraySort(soilToFertilizerMap);
  const sortedFertilizerToWaterMap = arraySort(fertilizerToWaterMap);
  const sortedWaterToLightMap = arraySort(waterToLightMap);
  const sortedLightToTemperatureMap = arraySort(lightToTemperatureMap);
  const sortedTemperatureToHumidityMap = arraySort(temperatureToHumidityMap);
  const sortedHumidityToLocationMap = arraySort(humidityToLocationMap);

  let x = 0;
  let found = false;
  while (x < humidityToLocationMap.length && !found) {
    let y = parseInt(humidityToLocationMap[x][1]);
    let max =
      parseInt(humidityToLocationMap[x][1]) +
      parseInt(humidityToLocationMap[x][2]) -
      1;
    z = 0;
    while (z < temperatureToHumidityMap.length && !found) {
      z++;
    }
    x++;
  }

  function arraySort(givenArray) {
    array = [...givenArray];

    c = 0;

    array.sort(function (a, b) {
      if (a[c] === b[c]) {
        return 0;
      } else {
        return a[c] < b[c] ? -1 : 1;
      }
    });
    return array;
  }

  //--------------OLD APPROACH-------------------------------------------
  // let nextLocationArray = getNewLocation(newSeedArray, seedToSoilMap);
  // nextLocationArray = getNewLocation(nextLocationArray, soilToFertilizerMap);
  // nextLocationArray = getNewLocation(nextLocationArray, fertilizerToWaterMap);
  // nextLocationArray = getNewLocation(nextLocationArray, waterToLightMap);
  // nextLocationArray = getNewLocation(nextLocationArray, lightToTemperatureMap);
  // nextLocationArray = getNewLocation(
  //   nextLocationArray,
  //   temperatureToHumidityMap
  // );
  // nextLocationArray = getNewLocation(nextLocationArray, humidityToLocationMap);

  // let x = 0;
  // let answer = Number.MAX_SAFE_INTEGER;

  // while (x < nextLocationArray.length) {
  //   answer =
  //     nextLocationArray[x][0] < answer ? nextLocationArray[x][0] : answer;
  //   x++;
  // }

  // console.log(answer);

  // function getNewLocation(searchArray, searchMap) {
  //   let nextLocationArray = [];
  //   searchArray.forEach((arrayElement) => {
  //     searchMap.forEach((mapElement) => {
  //       let startArray = arrayElement[0];
  //       let endArray = arrayElement[0] + arrayElement[1] - 1;
  //       let startMap = parseInt(mapElement[1]);
  //       let endMap = parseInt(mapElement[1]) + parseInt(mapElement[2]) - 1;
  //       let difference = parseInt(mapElement[0]) - parseInt(mapElement[1]);

  //       //Array---[***]---------------------------------------------------
  //       //Map------------[******]-----------------------------------------
  //       if (endArray < startMap) {
  //         nextLocationArray.push(arrayElement);
  //       }
  //       //Array--------[***]----------------
  //       //Map-------[*********}-------------
  //       else if (startArray >= startMap && endArray <= endMap) {
  //         nextLocationArray.push([startArray + difference, arrayElement[1]]);
  //       }
  //       //Array-----------------[***]--------------
  //       //Map-------[******]-----------------------
  //       else if (startArray > endMap) {
  //         nextLocationArray.push(arrayElement);
  //       }
  //       //Array-----[******]-----------------------
  //       //Map-----------[*******]------------------
  //       else if (startArray <= startMap && endArray >= startMap) {
  //         nextLocationArray.push([startArray, startMap - startArray]);
  //         nextLocationArray.push([
  //           startMap + difference,
  //           endArray - startMap + 1,
  //         ]);
  //       }
  //       //Array----------------[*******]---------------
  //       //Map---------------[*******]------------------
  //       else if (startArray <= endMap && endArray >= endMap) {
  //         nextLocationArray.push([
  //           startArray + difference,
  //           endMap - startArray + 1,
  //         ]);
  //         nextLocationArray.push([endMap + 1, endArray - endMap + 1]);
  //       }
  //       //Array-----[*****************]-------------------
  //       //Map------------[*******]------------------------
  //       else if (startArray <= startMap && endArray >= endMap) {
  //         nextLocationArray.push([startArray, startMap - startArray]);
  //         nextLocationArray.push([
  //           startMap + difference,
  //           endMap - startMap + 1,
  //         ]);
  //         nextLocationArray.push([endMap + 1, endArray - endMap]);
  //       }
  //     });
  //   });
  //   return nextLocationArray;
  // }

  function newInitialSeedArray(seedArray) {
    let tempArray = [];
    let x = 0;
    while (x < seedArray.length) {
      let start = parseInt(seedArray[x]);
      let end = parseInt(seedArray[x]) + parseInt(seedArray[x + 1]);
      tempArray.push([start, end - start]);
      x += 2;
    }
    return tempArray;
  }
}

function getNextLocations(searchArray, searchMap) {
  let nextLocationArray = [];
  let tempArray = [...searchArray];
  let tempMap = [...searchMap];
  tempArray.forEach((element) => {
    let found = false;
    let x = 0;

    while (!found && x < tempMap.length) {
      let start = parseInt(tempMap[x][1]);
      let end = parseInt(tempMap[x][1]) + parseInt(tempMap[x][2]);
      found =
        start <= parseInt(element) && parseInt(element) <= end ? true : false;

      if (found) {
        let nextLocation = parseInt(element) + parseInt(tempMap[x][0]) - start;
        nextLocationArray.push('' + nextLocation + '');
      }
      x++;
    }
  });
  return nextLocationArray;
}

function setMap(index) {
  temp = [];
  tempArray = [];
  for (let x = 1; x < inputArray[index].split('\n').length; x++) {
    temp = inputArray[index].split('\n')[x].split(' ');
    tempArray.push(temp);
  }
  return tempArray;
}
