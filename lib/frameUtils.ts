export interface FrameImage {
  frame: string; // canonical frame name
  url: string;
  alt: string;
}

const links: Record<string, FrameImage> = {
  "Gillian":     { frame: "Gillian", url: "https://www.warbyparker.com/eyeglasses/gillian/teal-tortoise?w=medium", alt: "Gillian frame" },
  "Daisy":       { frame: "Daisy", url: "https://www.warbyparker.com/eyeglasses/daisy/tea-rose-fade?w=medium", alt: "Daisy frame" },
  "Durand":      { frame: "Durand", url: "https://www.warbyparker.com/eyeglasses/durand/whiskey-tortoise?w=medium", alt: "Durand frame" },
  "Bodie":       { frame: "Bodie", url: "https://www.warbyparker.com/eyeglasses/bodie/crystal-with-english-oak?w=medium", alt: "Bodie frame" },
  "Crane":       { frame: "Crane", url: "https://www.warbyparker.com/eyeglasses/crane/black-matte-eclipse?w=medium", alt: "Crane frame" },
  "Percey":      { frame: "Percey", url: "https://www.warbyparker.com/eyeglasses/percey/chestnut-crystal?w=medium", alt: "Percey frame" },
  "Esme":        { frame: "Esme", url: "https://www.warbyparker.com/eyeglasses/esme/sesame-tortoise?w=medium", alt: "Esme frame" },
  "Chamberlain": { frame: "Chamberlain", url: "https://www.warbyparker.com/eyeglasses/chamberlain/olive-matte?w=medium", alt: "Chamberlain frame" },
  "Hayden":      { frame: "Hayden", url: "https://www.warbyparker.com/eyeglasses/hayden/striped-pacific?w=medium", alt: "Hayden frame" },
  "Baker":       { frame: "Baker", url: "https://www.warbyparker.com/eyeglasses/baker/striped-sassafras?w=medium", alt: "Baker frame" },
  "Bram":        { frame: "Bram", url: "https://www.warbyparker.com/eyeglasses/bram/layered-ocean-crystal?w=medium", alt: "Bram frame" },
  "Brimer":      { frame: "Brimer", url: "https://www.warbyparker.com/eyeglasses/brimmer/black-walnut?w=medium", alt: "Brimer frame" },
  "Wiletta":     { frame: "Wiletta", url: "https://www.warbyparker.com/eyeglasses/willetta/pink-robin-tortoise-with-polished-gold?w=extra-wide", alt: "Wiletta frame" },
  "Baird":       { frame: "Baird", url: "https://www.warbyparker.com/eyeglasses/baird/oak-barrel-with-antique-silver?w=wide", alt: "Baird frame" },
  "Keiko":       { frame: "Keiko", url: "https://www.warbyparker.com/eyeglasses/keiko/brushed-ink-with-polished-gold?w=medium", alt: "Keiko frame" },
  "Felix":       { frame: "Felix", url: "https://www.warbyparker.com/eyeglasses/felix/jet-black?w=medium", alt: "Felix frame" },
  "Armando":     { frame: "Armando", url: "https://www.warbyparker.com/eyeglasses/armando/polished-silver?w=medium", alt: "Armando frame" },
  "Simon":       { frame: "Simon", url: "https://www.warbyparker.com/eyeglasses/simon/antique-silver?w=medium", alt: "Simon frame" },
  "Garrison":    { frame: "Garrison", url: "https://www.warbyparker.com/eyeglasses/garrison/polished-gold-with-ivy?w=medium", alt: "Garrison frame" },
  "Whalen":      { frame: "Whalen", url: "https://www.warbyparker.com/eyeglasses/whalen/pebble-shore-tortoise-with-riesling?w=medium", alt: "Whalen frame" },
  "Elias":       { frame: "Elias", url: "https://www.warbyparker.com/eyeglasses/elias/striped-cypress?w=medium", alt: "Elias frame" },
  "Mattie":      { frame: "Mattie", url: "https://www.warbyparker.com/eyeglasses/mattie/mountain-blue?w=wide", alt: "Mattie frame" },
  "Tobias":      { frame: "Tobias", url: "https://www.warbyparker.com/eyeglasses/tobias/seaweed-crystal?w=medium", alt: "Tobias frame" },
  "Santiago":    { frame: "Santiago", url: "https://www.warbyparker.com/eyeglasses/santiago/crystal-with-polished-gold?w=wide", alt: "Santiago frame" },
  "Waite":       { frame: "Waite", url: "https://www.warbyparker.com/eyeglasses/waite/antique-silver?w=narrow", alt: "Waite frame" },
  "Carlos":      { frame: "Carlos", url: "https://www.warbyparker.com/eyeglasses/carlos/crystal-with-oak-barrel?w=medium", alt: "Carlos frame" },
  "Olin":        { frame: "Olin", url: "https://www.warbyparker.com/eyeglasses/olin/antique-silver?w=wide", alt: "Olin frame" },
  "York":        { frame: "York", url: "https://www.warbyparker.com/eyeglasses/york/brushed-ink-with-polished-gold?w=medium", alt: "York frame" },
  "Uma":         { frame: "Uma", url: "https://www.warbyparker.com/eyeglasses/uma/antique-silver?w=narrow", alt: "Uma frame" },
  "Kemi":        { frame: "Kemi", url: "https://www.warbyparker.com/eyeglasses/kemi/sunbeam-tortoise-fade?w=wide", alt: "Kemi frame" },
  "Haskell":     { frame: "Haskell", url: "https://www.warbyparker.com/eyeglasses/haskell/crystal?w=medium", alt: "Haskell frame" },
  "Saul":        { frame: "Saul", url: "https://www.warbyparker.com/eyeglasses/saul/brushed-ink?w=wide", alt: "Saul frame" },
  "Welty":       { frame: "Welty", url: "https://www.warbyparker.com/eyeglasses/welty/eastern-bluebird-fade?w=medium", alt: "Welty frame" },
  "Wright":      { frame: "Wright", url: "https://www.warbyparker.com/eyeglasses/wright/rosemary-crystal?w=medium", alt: "Wright frame" },
  "Freddy":      { frame: "Freddy", url: "https://www.warbyparker.com/eyeglasses/freddy/ristretto-tortoise?w=wide", alt: "Freddy frame" },
  "Hughes":      { frame: "Hughes", url: "https://www.warbyparker.com/eyeglasses/hughes/chestnut-crystal?w=medium", alt: "Hughes frame" },
  "Blakeley":    { frame: "Blakeley", url: "https://www.warbyparker.com/eyeglasses/blakeley/violet-magnolia?w=medium", alt: "Blakeley frame" },
  "Maren":       { frame: "Maren", url: "https://www.warbyparker.com/eyeglasses/ember/fiery-amber?w=medium", alt: "Maren frame" },
  "Ames":        { frame: "Ames", url: "https://www.warbyparker.com/eyeglasses/ames/whiskey-tortoise-with-riesling?w=wide", alt: "Ames frame" },
  "Eloide":      { frame: "Eloide", url: "https://www.warbyparker.com/eyeglasses/elodie/pink-robin-tortoise?w=medium", alt: "Eloide frame" },
  "Minden":      { frame: "Minden", url: "https://www.warbyparker.com/eyeglasses/minden/riesling-with-eggshell?w=medium", alt: "Minden frame" },
  "Hartman":     { frame: "Hartman", url: "https://www.warbyparker.com/eyeglasses/hartman/striped-cypress?w=wide", alt: "Hartman frame" },
};

export function getFrameImage(frameName: string): FrameImage {
  const normalized = frameName.trim().toLowerCase();
  for (const key in links) {
    if (key.toLowerCase() === normalized) {
      return links[key];
    }
  }
  // If frame not found, return a default FrameImage.
  return {
    frame: frameName,
    url: "https://www.warbyparker.com/eyeglasses/default-frame?w=medium",
    alt: `${frameName} frame`,
  };
}

export default getFrameImage;


