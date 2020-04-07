export default class Chat{
    constructor(id_user, message, datetime=Date.now()){
        this.id_user = id_user,
        this.message = message,
        this.datetime = datetime
    }
}