// lib/frameUtils.ts

export interface FrameImage {
  url: string;
  alt: string;
}

export function getFrameImage(frameName: string): FrameImage {
  const links: Record<string, string> = {
    "Gillian":     "https://www.warbyparker.com/eyeglasses/gillian/teal-tortoise?w=medium",
    "Daisy":       "https://www.warbyparker.com/eyeglasses/daisy/tea-rose-fade?w=medium",
    "Durand":      "https://www.warbyparker.com/eyeglasses/durand/whiskey-tortoise?w=medium",
    "Bodie":       "https://www.warbyparker.com/eyeglasses/bodie/crystal-with-english-oak?w=medium",
    "Crane":       "https://www.warbyparker.com/eyeglasses/crane/black-matte-eclipse?w=medium",
    "Percey":      "https://www.warbyparker.com/eyeglasses/percey/chestnut-crystal?w=medium",
    "Esme":        "https://www.warbyparker.com/eyeglasses/esme/sesame-tortoise?w=medium",
    "Chamberlain": "https://www.warbyparker.com/eyeglasses/chamberlain/olive-matte?w=medium",
    "Hayden":      "https://www.warbyparker.com/eyeglasses/hayden/striped-pacific?w=medium",
    "Baker":       "https://www.warbyparker.com/eyeglasses/baker/striped-sassafras?w=medium",
    "Bram":        "https://www.warbyparker.com/eyeglasses/bram/layered-ocean-crystal?w=medium",
    "Brimer":      "https://www.warbyparker.com/eyeglasses/brimmer/black-walnut?w=medium",
    "Wiletta":     "https://www.warbyparker.com/eyeglasses/willetta/pink-robin-tortoise-with-polished-gold?w=extra-wide",
    "Baird":       "https://www.warbyparker.com/eyeglasses/baird/oak-barrel-with-antique-silver?w=wide",
    "Keiko":       "https://www.warbyparker.com/eyeglasses/keiko/brushed-ink-with-polished-gold?w=medium",
    "Felix":       "https://www.warbyparker.com/eyeglasses/felix/jet-black?w=medium",
    "Armando":     "https://www.warbyparker.com/eyeglasses/armando/polished-silver?w=medium",
    "Simon":       "https://www.warbyparker.com/eyeglasses/simon/antique-silver?w=medium",
    "Garrison":    "https://www.warbyparker.com/eyeglasses/garrison/polished-gold-with-ivy?w=medium",
    "Whalen":      "https://www.warbyparker.com/eyeglasses/whalen/pebble-shore-tortoise-with-riesling?w=medium",
    "Elias":       "https://www.warbyparker.com/eyeglasses/elias/striped-cypress?w=medium",
    "Mattie":      "https://www.warbyparker.com/eyeglasses/mattie/mountain-blue?w=wide",
    "Tobias":      "https://www.warbyparker.com/eyeglasses/tobias/seaweed-crystal?w=medium",
    "Santiago":    "https://www.warbyparker.com/eyeglasses/santiago/crystal-with-polished-gold?w=wide",
    "Waite":       "https://www.warbyparker.com/eyeglasses/waite/antique-silver?w=narrow",
    "Carlos":      "https://www.warbyparker.com/eyeglasses/carlos/crystal-with-oak-barrel?w=medium",
    "Olin":        "https://www.warbyparker.com/eyeglasses/olin/antique-silver?w=wide",
    "York":        "https://www.warbyparker.com/eyeglasses/york/brushed-ink-with-polished-gold?w=medium",
    "Uma":         "https://www.warbyparker.com/eyeglasses/uma/antique-silver?w=narrow",
    "Kemi":        "https://www.warbyparker.com/eyeglasses/kemi/sunbeam-tortoise-fade?w=wide",
    "Haskell":     "https://www.warbyparker.com/eyeglasses/haskell/crystal?w=medium",
    "Saul":        "https://www.warbyparker.com/eyeglasses/saul/brushed-ink?w=wide",
    "Welty":       "https://www.warbyparker.com/eyeglasses/welty/eastern-bluebird-fade?w=medium",
    "Wright":      "https://www.warbyparker.com/eyeglasses/wright/rosemary-crystal?w=medium",
    "Freddy":      "https://www.warbyparker.com/eyeglasses/freddy/ristretto-tortoise?w=wide",
    "Celeste":     "https://www.warbyparker.com/eyeglasses/celeste/celestial-blue?w=medium",
    "Blakeley":    "https://www.warbyparker.com/eyeglasses/blakeley/violet-magnolia?w=medium",
    "Maren":       "https://www.warbyparker.com/eyeglasses/ember/fiery-amber?w=medium",
    "Ames":        "https://www.warbyparker.com/eyeglasses/ames/whiskey-tortoise-with-riesling?w=wide",
    "Eloide":      "https://www.warbyparker.com/eyeglasses/elodie/pink-robin-tortoise?w=medium",
    "Minden":      "https://www.warbyparker.com/eyeglasses/minden/riesling-with-eggshell?w=medium",
    "Hartman":     "https://www.warbyparker.com/eyeglasses/hartman/striped-cypress?w=wide"
  };

  return {
    url: links[frameName] || "https://www.warbyparker.com/eyeglasses/default-frame?w=medium",
    alt: `${frameName} frame`
  };
}

export default getFrameImage;

