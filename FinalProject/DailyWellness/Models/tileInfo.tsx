class Tile {
  id: string;
  name: string;
  color: string;
  link1: string;
  link2: string;
  link3: string;

  constructor(
    id: string, 
    name: string, 
    color: string,
    link1: string,
      link2: string,
      link3: string,
  ) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.link1 = link1;
    this.link2 = link2;
    this.link3 = link3;
  }

  toString(): string {
    return `Link 1: ${this.link1} 
            Link 2: $${this.link2} 
            Link3: ${this.link3}`;
  }
}

export default Tile;