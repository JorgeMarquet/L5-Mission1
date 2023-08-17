import { calculateCarValue } from "../carValueCalculator";

describe ('Car value tests', () => {

    it('when model is a and year is 1 return 101', async () => {
  
      // Arrange
  
      const model = "a";
        const year = 1; 
        const expected = 101
  
      // Act
  
      const actual = calculateCarValue(model,year);
  
   
  
      // Assert
  
      expect(actual).toBe(expected);
  
    });
  
    it('when model is toyota and year is 1998 return 1009', async () => {
  
        // Arrange
    
        const model = "toyota";
          const year = 1998; 
          const expected = 1009
    
        // Act
    
        const actual = calculateCarValue(model,year);
    
     
    
        // Assert
    
        expect(actual).toBe(expected);
    
      });

    
  });