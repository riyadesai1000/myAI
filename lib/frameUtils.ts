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
    alt: "Wilkie frame",
    price: "$95",
    dimensions: "134mm x 148mm"
  },
  "Durand": {
    frame: "Durand",
    url: "https://www.warbyparker.com/eyeglasses/durand/whiskey-tortoise?w=medium",
    alt: "Durand frame",
    price: "$95",
    dimensions: "133mm x 139mm"
  },
  "Bodie": {
    frame: "Bodie",
    url: "https://www.warbyparker.com/eyeglasses/bodie/crystal-with-english-oak?w=medium",
    alt: "Bodie frame",
    price: "$95",
    dimensions: "135mm x 140mm"
  },
  "Crane": {
    frame: "Crane",
    url: "https://www.warbyparker.com/eyeglasses/crane/black-matte-eclipse?w=medium",
    alt: "Crane frame",
    price: "$95",
    dimensions: "130mm x 140mm"
  },
  "Percey": {
    frame: "Percey",
    url: "https://www.warbyparker.com/eyeglasses/percey/chestnut-crystal?w=medium",
    alt: "Percey frame",
    price: "$95",
    dimensions: "132mm x 138mm"
  },
  "Esme": {
    frame: "Esme",
    url: "https://www.warbyparker.com/eyeglasses/esme/sesame-tortoise?w=medium",
    alt: "Esme frame",
    price: "$95",
    dimensions: "137mm x 142mm"
  },
  "Chamberlain": {
    frame: "Chamberlain",
    url: "https://www.warbyparker.com/eyeglasses/chamberlain/olive-matte?w=medium",
    alt: "Chamberlain frame",
    price: "$95",
    dimensions: "134mm x 140mm"
  },
  "Hayden": {
    frame: "Hayden",
    url: "https://www.warbyparker.com/eyeglasses/hayden/striped-pacific?w=medium",
    alt: "Hayden frame",
    price: "$95",
    dimensions: "133mm x 140mm"
  },
  "Baker": {
    frame: "Baker",
    url: "https://www.warbyparker.com/eyeglasses/baker/striped-sassafras?w=medium",
    alt: "Baker frame",
    price: "$95",
    dimensions: "134mm x 140mm"
  },
  "Bram": {
    frame: "Bram",
    url: "https://www.warbyparker.com/eyeglasses/bram/layered-ocean-crystal?w=medium",
    alt: "Bram frame",
    price: "$95",
    dimensions: "137mm x 140mm"
  },
  "Brimer": {
    frame: "Brimer",
    url: "https://www.warbyparker.com/eyeglasses/brimmer/black-walnut?w=medium",
    alt: "Brimer frame",
    price: "$95",
    dimensions: "134mm x 138mm"
  },
  "Wiletta": {
    frame: "Wiletta",
    url: "https://www.warbyparker.com/eyeglasses/willetta/pink-robin-tortoise-with-polished-gold?w=extra-wide",
    alt: "Wiletta frame",
    price: "$145",
    dimensions: "145mm x 140mm"
  },
  "Baird": {
    frame: "Baird",
    url: "https://www.warbyparker.com/eyeglasses/baird/oak-barrel-with-antique-silver?w=wide",
    alt: "Baird frame",
    price: "$145",
    dimensions: "142mm x 139mm"
  },
  "Keiko": {
    frame: "Keiko",
    url: "https://www.warbyparker.com/eyeglasses/keiko/brushed-ink-with-polished-gold?w=medium",
    alt: "Keiko frame",
    price: "$145",
    dimensions: "131mm x 140mm"
  },
  "Felix": {
    frame: "Felix",
    url: "https://www.warbyparker.com/eyeglasses/felix/jet-black?w=medium",
    alt: "Felix frame",
    price: "$95",
    dimensions: "135mm x 133mm"
  },
  "Armando": {
    frame: "Armando",
    url: "https://www.warbyparker.com/eyeglasses/armando/polished-silver?w=medium",
    alt: "Armando frame",
    price: "$145",
    dimensions: "134mm x 140mm"
  },
  "Simon": {
    frame: "Simon",
    url: "https://www.warbyparker.com/eyeglasses/simon/antique-silver?w=medium",
    alt: "Simon frame",
    price: "$145",
    dimensions: "128mm x 136mm"
  },
  "Garrison": {
    frame: "Garrison",
    url: "https://www.warbyparker.com/eyeglasses/garrison/polished-gold-with-ivy?w=medium",
    alt: "Garrison frame",
    price: "$195",
    dimensions: "135mm x 137mm"
  },
  "Whalen": {
    frame: "Whalen",
    url: "https://www.warbyparker.com/eyeglasses/whalen/pebble-shore-tortoise-with-riesling?w=medium",
    alt: "Whalen frame",
    price: "$145",
    dimensions: "134mm x 137mm"
  },
  "Elias": {
    frame: "Elias",
    url: "https://www.warbyparker.com/eyeglasses/elias/striped-cypress?w=medium",
    alt: "Elias frame",
    price: "$95",
    dimensions: "136mm x 138mm"
  },
  "Mattie": {
    frame: "Mattie",
    url: "https://www.warbyparker.com/eyeglasses/mattie/mountain-blue?w=wide",
    alt: "Mattie frame",
    price: "$95",
    dimensions: "137mm x 138mm"
  },
  "Tobias": {
    frame: "Tobias",
    url: "https://www.warbyparker.com/eyeglasses/tobias/seaweed-crystal?w=medium",
    alt: "Tobias frame",
    price: "$95",
    dimensions: "136mm x 138mm"
  },
  "Santiago": {
    frame: "Santiago",
    url: "https://www.warbyparker.com/eyeglasses/santiago/crystal-with-polished-gold?w=wide",
    alt: "Santiago frame",
    price: "$145",
    dimensions: "137mm x 138mm"
  },
  "Waite": {
    frame: "Waite",
    url: "https://www.warbyparker.com/eyeglasses/waite/antique-silver?w=narrow",
    alt: "Waite frame",
    price: "$195",
    dimensions: "130mm x 138mm"
  },
  "Carlos": {
    frame: "Carlos",
    url: "https://www.warbyparker.com/eyeglasses/carlos/crystal-with-oak-barrel?w=medium",
    alt: "Carlos frame",
    price: "$125",
    dimensions: "137mm x 140mm"
  },
  "Olin": {
    frame: "Olin",
    url: "https://www.warbyparker.com/eyeglasses/olin/antique-silver?w=wide",
    alt: "Olin frame",
    price: "$195",
    dimensions: "138mm x 140mm"
  },
  "York": {
    frame: "York",
    url: "https://www.warbyparker.com/eyeglasses/york/brushed-ink-with-polished-gold?w=medium",
    alt: "York frame",
    price: "$145",
    dimensions: "132mm x 136mm"
  },
  "Uma": {
    frame: "Uma",
    url: "https://www.warbyparker.com/eyeglasses/uma/antique-silver?w=narrow",
    alt: "Uma frame",
    price: "$195",
    dimensions: "128mm x 130mm"
  },
  "Kemi": {
    frame: "Kemi",
    url: "https://www.warbyparker.com/eyeglasses/kemi/sunbeam-tortoise-fade?w=wide",
    alt: "Kemi frame",
    price: "$95",
    dimensions: "138mm x 140mm"
  },
  "Haskell": {
    frame: "Haskell",
    url: "https://www.warbyparker.com/eyeglasses/haskell/crystal?w=medium",
    alt: "Haskell frame",
    price: "$95",
    dimensions: "133mm x 138mm"
  },
  "Saul": {
    frame: "Saul",
    url: "https://www.warbyparker.com/eyeglasses/saul/brushed-ink?w=wide",
    alt: "Saul frame",
    price: "$195",
    dimensions: "140mm x 141mm"
  },
  "Welty": {
    frame: "Welty",
    url: "https://www.warbyparker.com/eyeglasses/welty/eastern-bluebird-fade?w=medium",
    alt: "Welty frame",
    price: "$95",
    dimensions: "137mm x 142mm"
  },
  "Wright": {
    frame: "Wright",
    url: "https://www.warbyparker.com/eyeglasses/wright/rosemary-crystal?w=medium",
    alt: "Wright frame",
    price: "$95",
    dimensions: "136mm x 138mm"
  },
  "Freddy": {
    frame: "Freddy",
    url: "https://www.warbyparker.com/eyeglasses/freddy/ristretto-tortoise?w=wide",
    alt: "Freddy frame",
    price: "$95",
    dimensions: "140mm x 138mm"
  },
  "Hughes": {
    frame: "Hughes",
    url: "https://www.warbyparker.com/eyeglasses/hughes/chestnut-crystal?w=medium",
    alt: "Hughes frame",
    price: "$95",
    dimensions: "134mm x 142mm"
  },
  "Blakeley": {
    frame: "Blakeley",
    url: "https://www.warbyparker.com/eyeglasses/blakeley/violet-magnolia?w=medium",
    alt: "Blakeley frame",
    price: "$95",
    dimensions: "132mm x 139mm"
  },
  "Maren": {
    frame: "Maren",
    url: "https://www.warbyparker.com/eyeglasses/maren/violet-magnolia-with-polished-gold?w=medium",
    alt: "Maren frame",
    price: "$145",
    dimensions: "133mm x 138mm"
  },
  "Ames": {
    frame: "Ames",
    url: "https://www.warbyparker.com/eyeglasses/ames/whiskey-tortoise-with-riesling?w=wide",
    alt: "Ames frame",
    price: "$145",
    dimensions: "138mm x 145mm"
  },
  "Eloide": {
    frame: "Eloide",
    url: "https://www.warbyparker.com/eyeglasses/elodie/pink-robin-tortoise?w=medium",
    alt: "Eloide frame",
    price: "$95",
    dimensions: "137mm x 138mm"
  },
  "Minden": {
    frame: "Minden",
    url: "https://www.warbyparker.com/eyeglasses/minden/riesling-with-eggshell?w=medium",
    alt: "Minden frame",
    price: "$145",
    dimensions: "133mm x 137mm"
  },
  "Hartman": {
    frame: "Hartman",
    url: "https://www.warbyparker.com/eyeglasses/hartman/striped-cypress?w=wide",
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



