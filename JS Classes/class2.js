//JavaScript Class Inheritance
class Button{
    constructor(id, text, color){
        this.id = id;
        this.text = text;
        this.color = color;
    }

    info(){
        console.log(this.text +" : " + this.color);
    }
    draw(){
        console.log(this.text + " is drawn.");
    }
    onClick(){
        console.log(this.text + " is clicked.");
    }
}

class RoundedButton extends Button{
    constructor(id, text, color, radius){
        super(id,text,color);
        this.radius = radius;
    }
}

let rb = new RoundedButton(1000, "Cancel", "Blue");
// rb.color = 'Red';
// console.log(rb.color);
// rb.text = "OK";
rb.draw();
rb.info();

