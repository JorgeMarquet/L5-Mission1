import { carValueCalculator } from "../carValueCalculator";

describe ('Car value tests', () => {

    it('when model is a and year is 1 return 101', async () => {
      // Arrange
      const model = "a";
        const year = 1; 
        const expected = 101
      // Act
  
      const actual = carValueCalculator(model,year);
      // Assert
      expect(actual).toBe(expected);
    });
    it('when model is toyota and year is 1998 return 11598', async () => {
        // Arrange
        const model = "toyota";
          const year = 1998; 
          const expected = 11598
        // Act
        const actual = carValueCalculator(model,year);
        // Assert
        expect(actual).toBe(expected);
      });
      it('when model is Axela and year is 2015 return 6315', async () => {
        // Arrange
        const model = "Axela";
          const year = 2015; 
          const expected = 6315
        // Act
        const actual = carValueCalculator(model,year);
        // Assert
        expect(actual).toBe(expected);
      });
      it('when model is Camry and year is 2003 return 7998', async () => {
        // Arrange
        const model = "Camry";
          const year = 2003; 
          const expected = 7998
        // Act
        const actual = carValueCalculator(model,year);
        // Assert
        expect(actual).toBe(expected);
      });
  });