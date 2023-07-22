  // かな->ローマ変換
  function kanaToRoman(kana) {
    const romanMap = {
      'あ':['a'], 'い':['i', 'yi'], 'う':['u', 'wu'], 'え':['e'], 'お':['o'],
      'か':['ka', 'ca'], 'き':['ki'], 'く':['ku', 'cu', 'qu'], 'け':['ke'], 'こ':['ko', 'co'],
      'さ':['sa'], 'し':['si', 'shi', 'ci'], 'す':['su'], 'せ':['se', 'ce'], 'そ':['so'],
      'た':['ta'], 'ち':['ti', 'chi'], 'つ':['tu', 'tsu'], 'て':['te'], 'と':['to'],
      'な':['na'], 'に':['ni'], 'ぬ':['nu'], 'ね':['ne'], 'の':['no'],
      'は':['ha'], 'ひ':['hi'], 'ふ':['fu', 'hu'], 'へ':['he'], 'ほ':['ho'],
      'ま':['ma'], 'み':['mi'], 'む':['mu'], 'め':['me'], 'も':['mo'],
      'や':['ya'], 'ゆ':['yu'], 'よ':['yo'],
      'ら':['ra'], 'り':['ri'], 'る':['ru'], 'れ':['re'], 'ろ':['ro'],
      'わ':['wa'], 'ゐ':['wyi'], 'ゑ':['wye'], 'を':['wo'], 'ん':['nn', 'xn', 'n'],
      'が':['ga'], 'ぎ':['gi'], 'ぐ':['gu'], 'げ':['ge'], 'ご':['go'],
      'ざ':['za'], 'じ':['ji', 'zi'], 'ず':['zu'], 'ぜ':['ze'], 'ぞ':['zo'],
      'だ':['da'], 'ぢ':['di'], 'づ':['du'], 'で':['de'], 'ど':['do'],
      'ば':['ba'], 'び':['bi'], 'ぶ':['bu'], 'べ':['be'], 'ぼ':['bo'],
      'ぱ':['pa'], 'ぴ':['pi'], 'ぷ':['pu'], 'ぺ':['pe'], 'ぽ':['po'],
      'うぁ':['wha'], 'うぃ':['whi'], 'うぇ':['whe'], 'うぉ':['who'],
      'きゃ':['kya'], 'きぃ':['kyi'], 'きゅ':['kyu'], 'きぇ':['kye'], 'きょ':['kyo'],
      'くぁ':['qa', 'qwa'], 'くぃ':['qi', 'qwi'], 'くぇ':['qe', 'qwe'], 'くぉ':['qo', 'qwo'], 'くゃ':['qya'], 'くゅ':['qyu'], 'くょ':['qyo'],
      'しゃ':['sya', 'sha'], 'しぃ':['syi'], 'しゅ':['syu', 'shu'], 'しぇ':['sye', 'she'], 'しょ':['syo', 'sho'],
      'つぁ':['tsa'], 'つぃ':['tsi'], 'つぇ':['tse'], 'つぉ':['tso'],
      'ちゃ':['tya', 'cha'], 'ちぃ':['tyi'], 'ちゅ':['tyu', 'chu'], 'ちぇ':['tye', 'che'], 'ちょ':['tyo', 'cho'],
      'てゃ':['tha'], 'てぃ':['thi'], 'てゅ':['thu'], 'てぇ':['the'], 'てょ':['tho'],
      'とぁ':['twa'], 'とぃ':['twi'], 'とぅ':['twu'], 'とぇ':['twe'], 'とぉ':['two'],
      'ひゃ':['hya'], 'ひぃ':['hyi'], 'ひゅ':['hyu'], 'ひぇ':['hye'], 'ひょ':['hyo'],
      'ふぁ':['fa'], 'ふぃ':['fi'], 'ふぇ':['fe'], 'ふぉ':['fo'],
      'にゃ':['nya'], 'にぃ':['nyi'], 'にゅ':['nyu'], 'にぇ':['nye'], 'にょ':['nyo'],
      'みゃ':['mya'], 'みぃ':['myi'], 'みゅ':['myu'], 'みぇ':['mye'], 'みょ':['myo'],
      'りゃ':['rya'], 'りぃ':['ryi'], 'りゅ':['ryu'], 'りぇ':['rye'], 'りょ':['ryo'],
      'ヴぁ':['va'], 'ヴぃ':['vi'], 'ヴ':['vu'], 'ヴぇ':['ve'], 'ヴぉ':['vo'],
      'ぎゃ':['gya'], 'ぎぃ':['gyi'], 'ぎゅ':['gyu'], 'ぎぇ':['gye'], 'ぎょ':['gyo'],
      'ぐぁ':['gwa'], 'ぐぃ':['gwi'], 'ぐぅ':['gwu'], 'ぐぇ':['gwe'], 'ぐぉ':['gwo'],
      'じゃ':['ja', 'zya'], 'じぃ':['jyi', 'zyi'], 'じゅ':['ju', 'zyu'], 'じぇ':['je', 'zye'], 'じょ':['jo', 'zyo'],
      'でゃ':['dha'], 'でぃ':['dhi'], 'でゅ':['dhu'], 'でぇ':['dhe'], 'でょ':['dho'],
      'ぢゃ':['dya'], 'ぢぃ':['dyi'], 'ぢゅ':['dyu'], 'ぢぇ':['dye'], 'ぢょ':['dyo'],
      'びゃ':['bya'], 'びぃ':['byi'], 'びゅ':['byu'], 'びぇ':['bye'], 'びょ':['byo'],
      'ぴゃ':['pya'], 'ぴぃ':['pyi'], 'ぴゅ':['pyu'], 'ぴぇ':['pye'], 'ぴょ':['pyo'],
      'ぁ':['la', 'xa'], 'ぃ':['li', 'xi'], 'ぅ':['lu', 'xu'], 'ぇ':['le', 'xe'], 'ぉ':['lo', 'xo'],
      'ゃ':['lya', 'xya'], 'ゅ':['lyu', 'xyu'], 'ょ':['lyo', 'xyo'], 'っ':['ltu', 'xtu'],
      'ー':['-'], ',':[','], '.':['.'], '、':[','], '。':['.'],
      '・':['/'], '、':[','], '。':['.'], '・':['/']
    };

    let remStr = String(kana), slStr, roman, next;
    let result = [];

    function splice() {
      let oneChar = remStr.slice(0, 1);
      remStr = remStr.slice(1);
      return oneChar;
    }

    function isSmallChar() {
      return !!remStr.slice(0, 1).match(/^[ぁぃぅぇぉゃゅょ]$/);
    }

    while (remStr) {
      slStr = splice();
      next = romanMap[remStr.slice(0, 1)];
      if (slStr == 'っ') {
        if (!remStr || remStr.match(/^[,.]/) || !next || next[0].match(/^[aiueon]/)) {
          roman = [...romanMap[slStr]];
          result.push(roman);
        } else {
          slStr = splice();
          if (isSmallChar()) slStr += splice();
          roman = [...romanMap[slStr].map(str => str.slice(0, 1) + str)];
          result.push(roman);
        }
      } else {
        if (isSmallChar()) slStr += splice();
        if (slStr == '&') {
          slStr += remStr.slice(0, 7);
          remStr = remStr.slice(7);
        }
        roman = romanMap[slStr] ? [...romanMap[slStr]] : [...slStr];
        if (slStr == 'ん') {
          if (!remStr) {
            roman.pop();
          } else {
            if (next[0].match(/^[aiueony]/)) roman.pop();
          }
        }
        result.push(roman);
      }
    }
    return result;
  }
