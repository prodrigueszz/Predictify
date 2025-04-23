
export type UserProps = {
  id?: number
  name: string,
  email: string,
  password: string
}

export class User {
  private constructor(private props: UserProps){}

  public static create(name: string, email: string, password: string, id?: number): User{
    return new User({
      id,
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