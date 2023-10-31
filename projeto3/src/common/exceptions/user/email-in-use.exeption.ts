import { BadRequestException } from "@nestjs/common";

export class UserExistException extends BadRequestException {
    constructor(){
        super('E-mail already exists!');
    }
}