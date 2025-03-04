// lib/frameUtils.ts

export function getFrameLink(frameName: string): string {
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
  };

  return links[frameName] ?? "https://www.warbyparker.com/eyeglasses/default-frame?w=medium";
}
