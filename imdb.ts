export class Professional 
{
    constructor(public name:string,public age:number,public genre:string,public weight:number,public height:number,public haircolor:string,public eyecolor:string,public race:string,public isRetire:boolean,public nationality:string,public oscarsNumber:number,public profession:string)
    {
        this.name=name;
        this.age=age;
        this.genre=genre;
        this.weight=weight;
        this.height=height;
        this.haircolor=haircolor;
        this.race=race;
        this.isRetire=isRetire;
        this.nationality=nationality;
        this.oscarsNumber=oscarsNumber;
        this.profession=profession;
    }
    public printProfessional ()
    {
        console.log(this.name+ "\n"+this.age+ "\n"+this.genre+ "\n"+ this.weight+ "\n"+this.height+ "\n"+this.haircolor+ "\n"+this.eyecolor+ "\n"+this.race+ "\n"+this.isRetire+ "\n"+this.nationality+ "\n"+this.oscarsNumber+ "\n"+this.profession+ "\n")
    }
}
export class Movie
{
    constructor(public title:string,
    public releaseYear:number,
    public actors:string,
    public nationality:string,    
    public director:string,
    public writer:string,
    public language:string,
    public plataform:string,
    public isMCU:boolean,
    public mainCharacterName:string,
    public producer:string,
    public distributor:string,
    public genre:string)
    {
        this.title=title;
        this.releaseYear=releaseYear;
        this.nationality=nationality;
        this.genre=genre;
    }
    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }
    public getActors(): string {
        return this.actors;
    }

    public setActors(actors: string): void {
        this.actors = actors;
    }
    public getReleaseYear(): number {
        return this.releaseYear;
    }

    public setReleaseYear(releaseYear: number): void {
        this.releaseYear = releaseYear;
    }
    public getNationality(): string {
        return this.nationality;
    }

    public setNationality(nationality: string): void {
        this.nationality = nationality;
    }
    public getDirector(): string {
        return this.director;
    }

    public setDirector(director: string): void {
        this.director = director;
    }
    public getWriter(): string {
        return this.writer;
    }

    public setWriter(writer: string): void {
        this.writer = writer;
    }
    public getLanguage(): string {
        return this.language;
    }

    public setLanguage(language: string): void {
        this.language = language;
    }
    public getPlataform(): string {
        return this.plataform;
    }

    public setPlataform(plataform: string): void {
        this.plataform = plataform;
    }
    public isIsMCU(): boolean {
        return this.isMCU;
    }

    public setIsMCU(isMCU: boolean): void {
        this.isMCU = isMCU;
    }
    public getMainCharacterName(): string {
        return this.mainCharacterName;
    }

    public setMainCharacterName(mainCharacterName: string): void {
        this.mainCharacterName = mainCharacterName;
    }
    public getProducer(): string {
        return this.producer;
    }

    public setProducer(producer: string): void {
        this.producer = producer;
    }
    public getDistributor(): string {
        return this.distributor;
    }

    public setDistributor(distributor: string): void {
        this.distributor = distributor;
    }
    public getGenre(): string {
        return this.genre;
    }

    public setGenre(genre: string): void {
        this.genre = genre;
    }
    public printMovie()
    {
        console.log (this.title+ "\n"+ this.releaseYear+"\n"+this.getActors()+"\n"+this.nationality+"\n"+this.getDirector()+"\n"+this.getWriter()+ "\n"+this.getLanguage()+"\n"+this.getPlataform()+"\n"+this.isIsMCU()+"\n"+this.getMainCharacterName()+"\n"+this.getProducer()+"\n"+this.getDistributor()+"\n"+this.genre);
    }
    
}
