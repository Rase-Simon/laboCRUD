export class Link {
    public title : string = ""
    public url : string
    public isAdminFunction : boolean
    public queryParams?: any

    constructor(
        title: string,
        url : string,
        isAdminFunction : boolean,
        queryParams? : any)
        {
            this.title = title,
            this.url = url,
            this.isAdminFunction = isAdminFunction,
            this.queryParams = queryParams
        }

}
