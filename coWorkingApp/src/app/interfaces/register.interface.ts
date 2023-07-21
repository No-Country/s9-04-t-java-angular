import { Credentials } from "./credentials.interface";

export interface Register extends Credentials {
  firstName: string;
  lastName: string;
}
