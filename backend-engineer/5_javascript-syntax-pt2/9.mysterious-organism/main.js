// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};// END returnRandBase()


// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};// END mockUpStrand()


// Creates a report of all elements in goodSpecimens[]
const createReport = array => {
  array.forEach(element => {
    // console.log(`Specimen Number: ${newSpecimen.specimenNum}`);
    console.log(`### New Specimen ###`);
    console.log(`- Specimen Number: ${element.specimenNum}`);
    console.log(`- Specimen DNA: ${element.dna}`);
    console.log(`- Specimen Like to Survive: ${element.willLikelySurvive()}`);

  });
};// END createReport()

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {

      const randomNum = Math.floor(Math.random() * this.dna.length);
      const randomBase = this.dna[randomNum];

      let mutateVar = returnRandBase();
      while (randomBase === mutateVar) {
        mutateVar = returnRandBase();
      };

      this.dna[randomNum] = mutateVar;

      return this.dna;

    },
    compareDNA(obj) {

      let compareSpecimen = obj;
      let similarDNACount = 0;

      for (let i = 0; i < this.dna.length; i++) {

        if (this.dna[i] === compareSpecimen[i]) {
          similarDNACount++
        };
      };

      const percentSimilar = ((similarDNACount / 15) * 100).toFixed(2);

      console.log(`Specimen #1 and Specimen #2 have ${percentSimilar}% DNA in common.`);

    },
    willLikelySurvive() {

      let goodBasesCount = 0;

      this.dna.forEach(element => {
        if (element === 'C' || element === 'G') {
          goodBasesCount++;
        }
      });

      const goodBasesPercent = ((goodBasesCount / 15) * 100);
      if (goodBasesPercent < 60) {
        return false;
      } else return true;
    },
  }
};// END pAequorFactory()

/* Create 30 'good' specimens: */
const goodSpecimens = [];

for (let specimenNum = 1; specimenNum <= 30; specimenNum++) {
  const dna = mockUpStrand();
  const newSpecimen = pAequorFactory(specimenNum, dna);

  while (!newSpecimen.willLikelySurvive()) {
    newSpecimen.mutate(dna);
  };

  goodSpecimens.push(newSpecimen);

};

createReport(goodSpecimens);