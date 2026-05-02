import { UsersService } from './users.service';
export declare class UsersController {
    private users;
    constructor(users: UsersService);
    me(req: any): Promise<import("./users.entity").UserEntity>;
    update(req: any, body: any): Promise<import("./users.entity").UserEntity>;
}
