export class Serie {
  numero : number;
  name: string;
  channel: string;
  seasons: number;

  public constructor(numero: number,name: string, channel: string, seasons: number) {
    this.numero= numero;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
  }
}
