export type userProperties = {
  id: string,
  username: string,
  email: string,
  password: string
}

export class User {
  public constructor(private readonly props: userProperties){}
  
  get id(){
    return this.props.id;
  }
  get username(){
    return this.props.username;
  }
  get email(){
    return this.props.email;
  }
  get password(){
    return this.props.password;
  }
}