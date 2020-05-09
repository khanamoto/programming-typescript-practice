// CrowはBirdのサブタイプ、BirdはAnimalのサブタイプ
class Animal {}
class Bird extends Animal {
  chirp() {}
}
class Crow extends Bird {
  caw() {}
}

function chirp(bird: Bird): Bird {
  bird.chirp()
  return bird
}

// chirp(new Animal())
// chirp(new Bird())
// chirp(new Crow())

function clone(f: (b: Bird) => Bird): void {}

function birdToBird(b: Bird): Bird {}
clone(birdToBird)

function birdToCrow(b: Bird): Crow {}
clone(birdToCrow)

function birdToAnimal(b: Bird): Animal {}
clone(birdToAnimal)

function animalToBird(a: Animal): Bird {}
clone(animalToBird)

function crowToBird(c: Crow): Bird {}
clone(crowToBird)
