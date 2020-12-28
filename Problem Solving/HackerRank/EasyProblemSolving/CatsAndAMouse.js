function catAndMouse(x, y, z) {
    const AandCDistance = Math.abs(x - z);
    const BandCDistance = Math.abs(y - z);
    if (AandCDistance < BandCDistance) {return 'Cat A'}
    if (AandCDistance > BandCDistance) {return 'Cat B'}
    if (AandCDistance == BandCDistance) {return 'Mouse C'}

}
