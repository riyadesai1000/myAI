export interface FrameImage {
  frame: string;
  url: string;
  alt: string;
  price: string;
  dimensions: string; // e.g. "Medium x Wide" or actual measurements
}

const links: Record<string, FrameImage> = {
  "Gillian": {
    frame: "Gillian",
    url: "https://www.warbyparker.com/eyeglasses/gillian/teal-tortoise?w=medium",
    alt: "Gillian frame",
    price: "$95",
    dimensions: "135mm x 142mm"
  },
  "Daisy": {
    frame: "Daisy",
    url: "https://www.warbyparker.com/eyeglasses/daisy/tea-rose-fade?w=medium",
    alt: "Daisy frame",
    price: "$95",
    dimensions: "133mm x 138mm"
  },
  "Durand": {
    frame: "Durand",
    url: "https://www.warbyparker.com/eyeglasses/durand/whiskey-tortoise?w=medium",
    alt: "Durand frame",
    price: "$115",
    dimensions: "142mm x 20mm x 148mm"
  },
  "Bodie": {
    frame: "Bodie",
    url: "https://www.warbyparker.com/eyeglasses/bodie/crystal-with-english-oak?w=medium",
    alt: "Bodie frame",
    price: "$95",
    dimensions: "138mm x 18mm x 142mm"
  },
  "Crane": {
    frame: "Crane",
    url: "https://www.warbyparker.com/eyeglasses/crane/black-matte-eclipse?w=medium",
    alt: "Crane frame",
    price: "$145",
    dimensions: "140mm x 20mm x 146mm"
  },
  "Percey": {
    frame: "Percey",
    url: "https://www.warbyparker.com/eyeglasses/percey/chestnut-crystal?w=medium",
    alt: "Percey frame",
    price: "$145",
    dimensions: "142mm x 19mm x 148mm"
  },
  "Esme": {
    frame: "Esme",
    url: "https://www.warbyparker.com/eyeglasses/esme/sesame-tortoise?w=medium",
    alt: "Esme frame",
    price: "$145",
    dimensions: "140mm x 18mm x 144mm"
  },
  "Chamberlain": {
    frame: "Chamberlain",
    url: "https://www.warbyparker.com/eyeglasses/chamberlain/olive-matte?w=medium",
    alt: "Chamberlain frame",
    price: "$135",
    dimensions: "144mm x 20mm x 150mm"
  },
  "Hayden": {
    frame: "Hayden",
    url: "https://www.warbyparker.com/eyeglasses/hayden/striped-pacific?w=medium",
    alt: "Hayden frame",
    price: "$135",
    dimensions: "142mm x 19mm x 148mm"
  },
  "Baker": {
    frame: "Baker",
    url: "https://www.warbyparker.com/eyeglasses/baker/striped-sassafras?w=medium",
    alt: "Baker frame",
    price: "$125",
    dimensions: "139mm x 18mm x 143mm"
  },
  "Bram": {
    frame: "Bram",
    url: "https://www.warbyparker.com/eyeglasses/bram/layered-ocean-crystal?w=medium",
    alt: "Bram frame",
    price: "$125",
    dimensions: "140mm x 19mm x 145mm"
  },
  "Brimer": {
    frame: "Brimer",
    url: "https://www.warbyparker.com/eyeglasses/brimmer/black-walnut?w=medium",
    alt: "Brimer frame",
    price: "$125",
    dimensions: "141mm x 18mm x 147mm"
  },
  "Wiletta": {
    frame: "Wiletta",
    url: "https://www.warbyparker.com/eyeglasses/willetta/pink-robin-tortoise-with-polished-gold?w=extra-wide",
    alt: "Wiletta frame",
    price: "$135",
    dimensions: "137mm x 17mm x 142mm"
  },
  "Baird": {
    frame: "Baird",
    url: "https://www.warbyparker.com/eyeglasses/baird/oak-barrel-with-antique-silver?w=wide",
    alt: "Baird frame",
    price: "$135",
    dimensions: "143mm x 20mm x 148mm"
  },
  "Keiko": {
    frame: "Keiko",
    url: "https://www.warbyparker.com/eyeglasses/keiko/brushed-ink-with-polished-gold?w=medium",
    alt: "Keiko frame",
    price: "$145",
    dimensions: "144mm x 19mm x 150mm"
  },
  "Felix": {
    frame: "Felix",
    url: "https://www.warbyparker.com/eyeglasses/felix/jet-black?w=medium",
    alt: "Felix frame",
    price: "$145",
    dimensions: "140mm x 18mm x 145mm"
  },
  "Armando": {
    frame: "Armando",
    url: "https://www.warbyparker.com/eyeglasses/armando/polished-silver?w=medium",
    alt: "Armando frame",
    price: "$145",
    dimensions: "142mm x 20mm x 148mm"
  },
  "Simon": {
    frame: "Simon",
    url: "https://www.warbyparker.com/eyeglasses/simon/antique-silver?w=medium",
    alt: "Simon frame",
    price: "$145",
    dimensions: "141mm x 19mm x 147mm"
  },
  "Garrison": {
    frame: "Garrison",
    url: "https://www.warbyparker.com/eyeglasses/garrison/polished-gold-with-ivy?w=medium",
    alt: "Garrison frame",
    price: "$155",
    dimensions: "145mm x 20mm x 150mm"
  },
  "Whalen": {
    frame: "Whalen",
    url: "https://www.warbyparker.com/eyeglasses/whalen/pebble-shore-tortoise-with-riesling?w=medium",
    alt: "Whalen frame",
    price: "$155",
    dimensions: "143mm x 19mm x 148mm"
  },
  "Elias": {
    frame: "Elias",
    url: "https://www.warbyparker.com/eyeglasses/elias/striped-cypress?w=medium",
    alt: "Elias frame",
    price: "$155",
    dimensions: "142mm x 18mm x 147mm"
  },
  "Mattie": {
    frame: "Mattie",
    url: "https://www.warbyparker.com/eyeglasses/mattie/mountain-blue?w=wide",
    alt: "Mattie frame",
    price: "$155",
    dimensions: "144mm x 20mm x 150mm"
  },
  "Tobias": {
    frame: "Tobias",
    url: "https://www.warbyparker.com/eyeglasses/tobias/seaweed-crystal?w=medium",
    alt: "Tobias frame",
    price: "$155",
    dimensions: "141mm x 18mm x 146mm"
  },
  "Santiago": {
    frame: "Santiago",
    url: "https://www.warbyparker.com/eyeglasses/santiago/crystal-with-polished-gold?w=wide",
    alt: "Santiago frame",
    price: "$165",
    dimensions: "145mm x 20mm x 150mm"
  },
  "Waite": {
    frame: "Waite",
    url: "https://www.warbyparker.com/eyeglasses/waite/antique-silver?w=narrow",
    alt: "Waite frame",
    price: "$165",
    dimensions: "142mm x 19mm x 147mm"
  },
  "Carlos": {
    frame: "Carlos",
    url: "https://www.warbyparker.com/eyeglasses/carlos/crystal-with-oak-barrel?w=medium",
    alt: "Carlos frame",
    price: "$165",
    dimensions: "141mm x 18mm x 146mm"
  },
  "Olin": {
    frame: "Olin",
    url: "https://www.warbyparker.com/eyeglasses/olin/antique-silver?w=wide",
    alt: "Olin frame",
    price: "$165",
    dimensions: "143mm x 19mm x 148mm"
  },
  "York": {
    frame: "York",
    url: "https://www.warbyparker.com/eyeglasses/york/brushed-ink-with-polished-gold?w=medium",
    alt: "York frame",
    price: "$165",
    dimensions: "144mm x 20mm x 149mm"
  },
  "Uma": {
    frame: "Uma",
    url: "https://www.warbyparker.com/eyeglasses/uma/antique-silver?w=narrow",
    alt: "Uma frame",
    price: "$165",
    dimensions: "142mm x 19mm x 147mm"
  },
  "Kemi": {
    frame: "Kemi",
    url: "https://www.warbyparker.com/eyeglasses/kemi/sunbeam-tortoise-fade?w=wide",
    alt: "Kemi frame",
    price: "$175",
    dimensions: "143mm x 20mm x 148mm"
  },
  "Haskell": {
    frame: "Haskell",
    url: "https://www.warbyparker.com/eyeglasses/haskell/crystal?w=medium",
    alt: "Haskell frame",
    price: "$175",
    dimensions: "141mm x 18mm x 146mm"
  },
  "Saul": {
    frame: "Saul",
    url: "https://www.warbyparker.com/eyeglasses/saul/brushed-ink?w=wide",
    alt: "Saul frame",
    price: "$175",
    dimensions: "142mm x 19mm x 147mm"
  },
  "Welty": {
    frame: "Welty",
    url: "https://www.warbyparker.com/eyeglasses/welty/eastern-bluebird-fade?w=medium",
    alt: "Welty frame",
    price: "$175",
    dimensions: "144mm x 20mm x 150mm"
  },
  "Wright": {
    frame: "Wright",
    url: "https://www.warbyparker.com/eyeglasses/wright/rosemary-crystal?w=medium",
    alt: "Wright frame",
    price: "$175",
    dimensions: "145mm x 20mm x 150mm"
  },
  "Freddy": {
    frame: "Freddy",
    url: "https://www.warbyparker.com/eyeglasses/freddy/ristretto-tortoise?w=wide",
    alt: "Freddy frame",
    price: "$175",
    dimensions: "142mm x 19mm x 147mm"
  },
  "Hughes": {
    frame: "Hughes",
    url: "https://www.warbyparker.com/eyeglasses/hughes/chestnut-crystal?w=medium",
    alt: "Hughes frame",
    price: "$175",
    dimensions: "143mm x 18mm x 148mm"
  },
  "Blakeley": {
    frame: "Blakeley",
    url: "https://www.warbyparker.com/eyeglasses/blakeley/violet-magnolia?w=medium",
    alt: "Blakeley frame",
    price: "$175",
    dimensions: "144mm x 20mm x 150mm"
  },
  "Maren": {
    frame: "Maren",
    url: "https://www.warbyparker.com/eyeglasses/ember/fiery-amber?w=medium",
    alt: "Maren frame",
    price: "$175",
    dimensions: "141mm x 18mm x 146mm"
  },
  "Ames": {
    frame: "Ames",
    url: "https://www.warbyparker.com/eyeglasses/ames/whiskey-tortoise-with-riesling?w=wide",
    alt: "Ames frame",
    price: "$185",
    dimensions: "142mm x 19mm x 147mm"
  },
  "Eloide": {
    frame: "Eloide",
    url: "https://www.warbyparker.com/eyeglasses/elodie/pink-robin-tortoise?w=medium",
    alt: "Eloide frame",
    price: "$185",
    dimensions: "144mm x 20mm x 150mm"
  },
  "Minden": {
    frame: "Minden",
    url: "https://www.warbyparker.com/eyeglasses/minden/riesling-with-eggshell?w=medium",
    alt: "Minden frame",
    price: "$185",
    dimensions: "145mm x 20mm x 150mm"
  },
  "Hartman": {
    frame: "Hartman",
    url: "https://www.warbyparker.com/eyeglasses/hartman/striped-cypress?w=wide",
    alt: "Hartman frame",
    price: "$185",
    dimensions: "142mm x 19mm x 147mm"
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



