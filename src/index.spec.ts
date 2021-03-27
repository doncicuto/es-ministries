import ministries from ".";

describe("ministries array", () => {
  it("contain all Government ministries of Spain", () => {
    expect(ministries.length).toBe(23);
  });

  it("check for ministries code duplicates", () => {
    const seen = new Set();
    const hasDuplicates = ministries.some((currentObject) => {
      return seen.size === seen.add(currentObject.code).size;
    });
    expect(hasDuplicates).toBe(false);
  });

  it("check for ministries name duplicates", () => {
    const seen = new Set();
    const hasDuplicates = ministries.some((currentObject) => {
      return seen.size === seen.add(currentObject.name).size;
    });
    expect(hasDuplicates).toBe(false);
  });

  it("check Ministerio de Defensa object", () => {
    expect(ministries[7]).toStrictEqual({
      code: "E00003301",
      name: "Ministerio de Defensa",
    });
  });

  it("check Ministerio para la Transición Ecológica y el Reto Demográfico object", () => {
    expect(ministries[22]).toStrictEqual({
      code: "E05068001",
      name: "Ministerio para la Transición Ecológica y el Reto Demográfico",
    });
  });

  it("check Ministerio de Agricultura, Pesca y Alimentación object", () => {
    expect(ministries[1]).toStrictEqual({
      code: "E05024401",
      name: "Ministerio de Agricultura, Pesca y Alimentación",
    });
  });
});
