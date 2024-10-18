class Project {
    constructor(title, date, rate, country, about, inProcess = false) {
        this.title = title;
        this.date = date;
        this.rate = rate;
        this.country = country;
        this.about = about;
        this.inProcess = inProcess;
    }

    getValues() {
        return this.title, this.date, this.rate, this.country, this.about, this.inProcess;
    }
}