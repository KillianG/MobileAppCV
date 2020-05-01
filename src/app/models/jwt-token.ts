export class JwtToken {
    public access_token : string;
    public refresh_token : string;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
}
