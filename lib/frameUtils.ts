// lib/utils.ts
export function getFrameImage(frameName: string): string {
  const images: Record<string, string> = {
    "Gillian":     "https://www.warbyparker.com/eyeglasses/gillian/teal-tortoise?w=medium",
    "Daisy":       "https://www.warbyparker.com/eyeglasses/daisy/tea-rose-fade?w=medium",
    "Durand":      "https://www.warbyparker.com/eyeglasses/durand/rose-water-front?w=medium",
    "Bodie":       "https://www.warbyparker.com/eyeglasses/bodie/crystal-with-english-oak?w=medium",
    "Crane":       "https://www.warbyparker.com/eyeglasses/crane/black-matte-eclipse?w=medium",
    "Percey":      "https://www.warbyparker.com/eyeglasses/percey/chestnut-crystal?w=medium",
    "Esme":        "https://www.warbyparker.com/eyeglasses/esme/sesame-tortoise?w=medium",
    "Chamberlain": "https:s//www.warbyparker.com/eyeglasses/chamberlain/olive-matte?w=medium",
    "Hayden":      "https://www.warbyparker.com/eyeglasses/hayden/matte-tortoise?w=medium",
  };

  return images[frameName] ?? "https://www.warbyparker.com/eyeglasses/default-frame?w=medium";
}
