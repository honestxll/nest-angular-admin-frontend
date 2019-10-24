export class UserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

// tslint:disable-next-line:max-classes-per-file
export class UpdatePasswordDto {
  readonly password: string;
  readonly newPassword: string;
}
