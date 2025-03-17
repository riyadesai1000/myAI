export interface FrameImage {
  frame: string;
  url: string;
  cdnUrl?: string; // optional
  alt: string;
  price: string;
  dimensions: string; // e.g. "Medium x Wide" or actual measurements
}

const links: Record<string, FrameImage> = {
  "Gillian": {
    frame: "Gillian",
    url: "https://www.warbyparker.com/eyeglasses/gillian/teal-tortoise?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/2470cc7932b123528c53bf99d8cd5504b0907b3a",
    alt: "Gillian frame",
    price: "$95",
    dimensions: "135mm x 142mm"
  },
  "Daisy": {
    frame: "Daisy",
    url: "https://www.warbyparker.com/eyeglasses/daisy/tea-rose-fade?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/248b305a0b6dc20907b1aa6aef0ec8d152c52928", 
    alt: "Daisy frame",
    price: "$95",
    dimensions: "133mm x 138mm"
  },
  "Wilkie": {
    frame: "Wilkie",
    url: "https://www.warbyparker.com/eyeglasses/wilkie/greystone?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/581810b94033b85f58b7503a63691feffb89ebc4", 
    alt: "Wilkie frame",
    price: "$95",
    dimensions: "134mm x 148mm"
  },
  "Durand": {
    frame: "Durand",
    url: "https://www.warbyparker.com/eyeglasses/durand/whiskey-tortoise?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/a887449139879eba6dff54020045d76f403db961", 
    alt: "Durand frame",
    price: "$95",
    dimensions: "133mm x 139mm"
  },
  "Bodie": {
    frame: "Bodie",
    url: "https://www.warbyparker.com/eyeglasses/bodie/crystal-with-english-oak?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/fce2e03de9697ed86c79a02425da8267f48b00ca", 
    alt: "Bodie frame",
    price: "$95",
    dimensions: "135mm x 140mm"
  },
  "Crane": {
    frame: "Crane",
    url: "https://www.warbyparker.com/eyeglasses/crane/black-matte-eclipse?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/1ecd711a770a9e679b893bff397c32d1563f92cc", 
    alt: "Crane frame",
    price: "$95",
    dimensions: "130mm x 140mm"
  },
  "Percey": {
    frame: "Percey",
    url: "https://www.warbyparker.com/eyeglasses/percey/chestnut-crystal?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/25ded50d3632204e905fb201c4158bfa88849087", 
    alt: "Percey frame",
    price: "$95",
    dimensions: "132mm x 138mm"
  },
  "Esme": {
    frame: "Esme",
    url: "https://www.warbyparker.com/eyeglasses/esme/sesame-tortoise?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/efe414ba72658169f24be4c27efdd9731bfd1860", 
    alt: "Esme frame",
    price: "$95",
    dimensions: "137mm x 142mm"
  },
  "Chamberlain": {
    frame: "Chamberlain",
    url: "https://www.warbyparker.com/eyeglasses/chamberlain/olive-matte?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/96c33048cb20e7a54ea757be1ca3f6e63e0564f5", 
    alt: "Chamberlain frame",
    price: "$95",
    dimensions: "134mm x 140mm"
  },
  "Hayden": {
    frame: "Hayden",
    url: "https://www.warbyparker.com/eyeglasses/hayden/striped-pacific?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/8f6034ae2c30e603a4941f2be8f7c001adaac11d", 
    alt: "Hayden frame",
    price: "$95",
    dimensions: "133mm x 140mm"
  },
  "Baker": {
    frame: "Baker",
    url: "https://www.warbyparker.com/eyeglasses/baker/striped-sassafras?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/3d757dbb1c90a02ae7fbcb1fe2aca81d3e2e4a5a", 
    alt: "Baker frame",
    price: "$95",
    dimensions: "134mm x 140mm"
  },
  "Bram": {
    frame: "Bram",
    url: "https://www.warbyparker.com/eyeglasses/bram/layered-ocean-crystal?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/d055f7aed62004759c67d0054de67a38664548a2", 
    alt: "Bram frame",
    price: "$95",
    dimensions: "137mm x 140mm"
  },
  "Brimer": {
    frame: "Brimer",
    url: "https://www.warbyparker.com/eyeglasses/brimmer/black-walnut?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/c2e67df7fddbd07c29a3f5e7650e7a9aceb88422", 
    alt: "Brimer frame",
    price: "$95",
    dimensions: "134mm x 138mm"
  },
  "Wiletta": {
    frame: "Wiletta",
    url: "https://www.warbyparker.com/eyeglasses/willetta/pink-robin-tortoise-with-polished-gold?w=extra-wide",
    cdnUrl: "https://i.warbycdn.com/s/c/87aa2d740172cb35a4c1f42eca73ac990e9f1652", 
    alt: "Wiletta frame",
    price: "$145",
    dimensions: "145mm x 140mm"
  },
  "Baird": {
    frame: "Baird",
    url: "https://www.warbyparker.com/eyeglasses/baird/oak-barrel-with-antique-silver?w=wide",
    cdnUrl: "https://i.warbycdn.com/s/c/923e3df42ca16927520a9e1d94a893ea22527d55", 
    alt: "Baird frame",
    price: "$145",
    dimensions: "142mm x 139mm"
  },
  "Keiko": {
    frame: "Keiko",
    url: "https://www.warbyparker.com/eyeglasses/keiko/brushed-ink-with-polished-gold?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/9cdc0ac5148948fcb136f01836736d9b7d8b9818", 
    alt: "Keiko frame",
    price: "$145",
    dimensions: "131mm x 140mm"
  },
  "Felix": {
    frame: "Felix",
    url: "https://www.warbyparker.com/eyeglasses/felix/jet-black?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/b94adad195054a4b0cb8c0194999dcc182adbda5", 
    alt: "Felix frame",
    price: "$95",
    dimensions: "135mm x 133mm"
  },
  "Armando": {
    frame: "Armando",
    url: "https://www.warbyparker.com/eyeglasses/armando/polished-silver?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/4cd4f87b3612be4b0a85e4326671aff2642e821b", 
    alt: "Armando frame",
    price: "$145",
    dimensions: "134mm x 140mm"
  },
  "Simon": {
    frame: "Simon",
    url: "https://www.warbyparker.com/eyeglasses/simon/antique-silver?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/990bd5447e8de031e45b7e1bf677ffbfa7b5a11f", 
    alt: "Simon frame",
    price: "$145",
    dimensions: "128mm x 136mm"
  },
  "Garrison": {
    frame: "Garrison",
    url: "https://www.warbyparker.com/eyeglasses/garrison/polished-gold-with-ivy?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/30bc42d5ab039c7e6d3f0b060a1f40f579a27d39",
    alt: "Garrison frame",
    price: "$195",
    dimensions: "135mm x 137mm"
  },
  "Whalen": {
    frame: "Whalen",
    url: "https://www.warbyparker.com/eyeglasses/whalen/pebble-shore-tortoise-with-riesling?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/a1ec7348e8e475d549afd459203e88c3b6df5ea2", 
    alt: "Whalen frame",
    price: "$145",
    dimensions: "134mm x 137mm"
  },
  "Elias": {
    frame: "Elias",
    url: "https://www.warbyparker.com/eyeglasses/elias/striped-cypress?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/2470cc7932b123528c53bf99d8cd5504b0907b3a", 
    alt: "Elias frame",
    price: "$95",
    dimensions: "136mm x 138mm"
  },
  "Mattie": {
    frame: "Mattie",
    url: "https://www.warbyparker.com/eyeglasses/mattie/mountain-blue?w=wide",
    cdnUrl: "https://i.warbycdn.com/s/c/3c7dcdaae4f8c407ff1d01122bcf9fc6ae5cbf0c", 
    alt: "Mattie frame",
    price: "$95",
    dimensions: "137mm x 138mm"
  },
  "Tobias": {
    frame: "Tobias",
    url: "https://www.warbyparker.com/eyeglasses/tobias/seaweed-crystal?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/4b53fbfc0ab8f59b47e167f3e606164ad223f452", 
    alt: "Tobias frame",
    price: "$95",
    dimensions: "136mm x 138mm"
  },
  "Santiago": {
    frame: "Santiago",
    url: "https://www.warbyparker.com/eyeglasses/santiago/crystal-with-polished-gold?w=wide",
    cdnUrl: "https://i.warbycdn.com/s/c/7dcfcde3cb18408f67ce2be8e8be1cf98f4b2650", 
    alt: "Santiago frame",
    price: "$145",
    dimensions: "137mm x 138mm"
  },
  "Waite": {
    frame: "Waite",
    url: "https://www.warbyparker.com/eyeglasses/waite/antique-silver?w=narrow",
    cdnUrl: "https://i.warbycdn.com/s/c/adad5e90128b63f4773a3eaaac47e0f4c5b30367", 
    alt: "Waite frame",
    price: "$195",
    dimensions: "130mm x 138mm"
  },
  "Carlos": {
    frame: "Carlos",
    url: "https://www.warbyparker.com/eyeglasses/carlos/crystal-with-oak-barrel?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/ff813e80c19b4faa2262b45dfd1648731befae9a", 
    alt: "Carlos frame",
    price: "$125",
    dimensions: "137mm x 140mm"
  },
  "Olin": {
    frame: "Olin",
    url: "https://www.warbyparker.com/eyeglasses/olin/antique-silver?w=wide",
    cdnUrl: "https://i.warbycdn.com/s/c/041b12b16e290d8b8ea1b8a0c4908aae7c243350", 
    alt: "Olin frame",
    price: "$195",
    dimensions: "138mm x 140mm"
  },
  "York": {
    frame: "York",
    url: "https://www.warbyparker.com/eyeglasses/york/brushed-ink-with-polished-gold?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/b299941a9f4956c5ddcbff5f66f4d50f7eef6847", 
    alt: "York frame",
    price: "$145",
    dimensions: "132mm x 136mm"
  },
  "Uma": {
    frame: "Uma",
    url: "https://www.warbyparker.com/eyeglasses/uma/antique-silver?w=narrow",
    cdnUrl: "https://i.warbycdn.com/s/c/7dc2c1ff5eb5ac388f8f830081043962de406d9b", 
    alt: "Uma frame",
    price: "$195",
    dimensions: "128mm x 130mm"
  },
  "Kemi": {
    frame: "Kemi",
    url: "https://www.warbyparker.com/eyeglasses/kemi/sunbeam-tortoise-fade?w=wide",
    cdnUrl: "https://i.warbycdn.com/s/c/9ed7ec5fd4db1f5b613b17f721efdd1dfa75dac1", 
    alt: "Kemi frame",
    price: "$95",
    dimensions: "138mm x 140mm"
  },
  "Haskell": {
    frame: "Haskell",
    url: "https://www.warbyparker.com/eyeglasses/haskell/crystal?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/c2ee6e3188fd9ec9e569c2f209cb4fc158621874", 
    alt: "Haskell frame",
    price: "$95",
    dimensions: "133mm x 138mm"
  },
  "Saul": {
    frame: "Saul",
    url: "https://www.warbyparker.com/eyeglasses/saul/brushed-ink?w=wide",
    cdnUrl: "https://i.warbycdn.com/s/c/15066589f915aff78e5c72af6391168c6328a77a", 
    alt: "Saul frame",
    price: "$195",
    dimensions: "140mm x 141mm"
  },
  "Welty": {
    frame: "Welty",
    url: "https://www.warbyparker.com/eyeglasses/welty/eastern-bluebird-fade?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/abd63ee565cf338892612bf443961a2846afc7f5", 
    alt: "Welty frame",
    price: "$95",
    dimensions: "137mm x 142mm"
  },
  "Wright": {
    frame: "Wright",
    url: "https://www.warbyparker.com/eyeglasses/wright/rosemary-crystal?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/c0d4c74f843a01d60ab36b86b3a414b9e7b3279a", 
    alt: "Wright frame",
    price: "$95",
    dimensions: "136mm x 138mm"
  },
  "Freddy": {
    frame: "Freddy",
    url: "https://www.warbyparker.com/eyeglasses/freddy/ristretto-tortoise?w=wide",
    cdnUrl: "https://i.warbycdn.com/s/c/cd31747e40767eeeda039fd979515b15427de14c", 
    alt: "Freddy frame",
    price: "$95",
    dimensions: "140mm x 138mm"
  },
  "Hughes": {
    frame: "Hughes",
    url: "https://www.warbyparker.com/eyeglasses/hughes/chestnut-crystal?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/2a70cc3b54130d15773aa4265a46d0fdd2bd7a0a", 
    alt: "Hughes frame",
    price: "$95",
    dimensions: "134mm x 142mm"
  },
  "Blakeley": {
    frame: "Blakeley",
    url: "https://www.warbyparker.com/eyeglasses/blakeley/violet-magnolia?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/ce12107b32c2821626100e463211e016c1263b3a", 
    alt: "Blakeley frame",
    price: "$95",
    dimensions: "132mm x 139mm"
  },
  "Maren": {
    frame: "Maren",
    url: "https://www.warbyparker.com/eyeglasses/maren/violet-magnolia-with-polished-gold?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/5461416be913870b69b97c097381615370bc4809", 
    alt: "Maren frame",
    price: "$145",
    dimensions: "133mm x 138mm"
  },
  "Ames": {
    frame: "Ames",
    url: "https://www.warbyparker.com/eyeglasses/ames/whiskey-tortoise-with-riesling?w=wide",
    cdnUrl: "https://i.warbycdn.com/s/c/f132121b1cd9d1fe66df7fba81e8792a0f948f24", 
    alt: "Ames frame",
    price: "$145",
    dimensions: "138mm x 145mm"
  },
  "Eloide": {
    frame: "Eloide",
    url: "https://www.warbyparker.com/eyeglasses/elodie/pink-robin-tortoise?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/7d9f20f61ee0438b35204ab4a6d4508215f22341", 
    alt: "Eloide frame",
    price: "$95",
    dimensions: "137mm x 138mm"
  },
  "Minden": {
    frame: "Minden",
    url: "https://www.warbyparker.com/eyeglasses/minden/riesling-with-eggshell?w=medium",
    cdnUrl: "https://i.warbycdn.com/s/c/6ef47e16dab2b616cb814f88ed347e4c285c0204", 
    alt: "Minden frame",
    price: "$145",
    dimensions: "133mm x 137mm"
  },
  "Hartman": {
    frame: "Hartman",
    url: "https://www.warbyparker.com/eyeglasses/hartman/striped-cypress?w=wide",
    cdnUrl: "https://i.warbycdn.com/s/c/9f82d87704c69b83abf4b3636ed0a5eb7d9c9a3d", 
    alt: "Hartman frame",
    price: "$95",
    dimensions: "139mm x 140mm"
  },
};

export function getFrameImage(frameName: string): FrameImage | undefined {
  const normalized = frameName.trim().toLowerCase();
  for (const key in links) {
    if (key.toLowerCase() === normalized) {
      return links[key];
    }
  }
  return undefined;
}

export default getFrameImage;



