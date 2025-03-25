class Destination {
    id: string;
    countryId: string;
    name: string;
    avgCost: number;
    foundedYear: number;
    rating: number;
    imageUrl: string;
  
    constructor(
      id: string,
      countryId: string,
      name: string,
      avgCost: number,
      foundedYear: number,
      rating: number,
      imageUrl: string
    ) {
      this.id = id;
      this.countryId = countryId;
      this.name = name;
      this.avgCost = avgCost;
      this.foundedYear = foundedYear;
      this.rating = rating;
      this.imageUrl = imageUrl;
    }
  
    toString(): string {
      return `${this.name} costs, on average, $${this.avgCost} and was founded in ${this.foundedYear}. Rating: ${this.rating}`;
    }
  }
  
  export default Destination;