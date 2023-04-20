function introduction(name = "Aubrey") {
    return(`Hi, my name is ${name}.`);
  }
  introduction("Aubrey");

function introductionWithLanguage(name = "Aubrey", language = JavaScript) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage("Aubrey", "JavaScript")

function introductionWithLanguageOptional(name = "Aubrey", language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguageOptional("Aubrey", "JavaScript")

