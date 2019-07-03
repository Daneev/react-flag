export class Service {
  data = [];

  getResourse = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;flag');
    return await response.json();
  }

  country = async () => {
    const info = await this.getResourse();
    this.data.push(info);
      console.log("TCL: App -> info", this.data);
    return this.setId(this.data[0]);
    };

  setId = (list) => {
    let count = 1;
    list.forEach((element) => {
      if (element) {
      element.id = count;
      count++;
      }
    });
    return list;
  };

};
