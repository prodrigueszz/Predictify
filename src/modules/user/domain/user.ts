export class User {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly id?: number

  public constructor(name: string, email: string, password: string, id?: number){
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = id;
  }
}