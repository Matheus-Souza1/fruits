import { Entity } from "typeorm";
@Entity()
export class Fruits {
    Id: string;
    Name: string;
    PictureUrl: string;
}