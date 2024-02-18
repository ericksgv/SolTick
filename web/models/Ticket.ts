
export class Ticket {
  constructor(
    public id: string,
    public name: string,
    public location: string,
    public price: number,
    public date: string
  ) {}
}