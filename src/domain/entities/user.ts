export type UserProperties = {
  id: string,
  name: string,
  email: string,
  password: string
}

export class User {
  private constructor(private props: UserProperties){}

  public static create(name: string, email: string, password: string){
    return new User({
      id: crypto.randomUUID(),
      name, 
      email,
      password
    })
  }

  public validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (email.match(re)){
      return true;
    } else {
      return false;
    }
  }

  get id(){
    return this.props.id;
  }

  get password(){
    return this.props.password;
  }

  get name(){
    return this.props.name;
  }

  get email(){
    return this.props.email;
  }
}