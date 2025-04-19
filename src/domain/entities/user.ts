export type UserProperties = {
  name: string,
  email: string,
  password: string
}

export class User {
  private constructor(private props: UserProperties, private id: string){}

  public static create(props: UserProperties){
    const id = crypto.randomUUID().toString();

    return new User(props, id);
  }

  public validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (email.match(re)){
      return true;
    } else {
      return false;
    }
  }

  get name(){
    return this.props.name;
  }

  get email(){
    return this.props.email;
  }
}