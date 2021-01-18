export class Currency{
  public id: number;
  public name: String;
  public iso: String;


  constructor(id: number, name: String, iso: String) {
    this.id = id;
    this.name = name;
    this.iso = iso;
  }
}
