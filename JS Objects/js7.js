//JavaScript Object Accessors | (Getters and Setters)

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    // setLang: function(lang){
    //     this.language = lang;
    // },
    // getLang: function(){
    //     return this.language;
    // }
    set setLang(lang){
      this.language = lang;
    },
    get getLang(){
      return this.language;
    },
    get fullName(){
      return this.firstName + " " + this.lastName;
    }
  };

  // console.log(person.getLang());
  // person.setLang("Dari");
  // console.log(person.getLang());

  console.log(person.getLang);
  person.setLang = "Dari";
  console.log(person.getLang);
  console.log(person.fullName);