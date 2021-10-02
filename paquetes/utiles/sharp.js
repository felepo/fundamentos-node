const sharp = require('sharp');

sharp('js.webp')
    .resize(80)
    .grayscale()
    .toFile('resized.webp');