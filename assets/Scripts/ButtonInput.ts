
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    
@property(cc.Label)
inputField:cc.Label=null;
@property(cc.Label)
submittedMessage:cc.Label=null;

@property
isFirstCharacter: boolean=true;

@property(cc.Node)
numberUI:cc.Node=null;
@property(cc.Node)
submittedUI:cc.Node=null;






    KeyPadButtons(event, customEventData)
    {  if(this.isFirstCharacter==true)
        {
            this.inputField.string =customEventData;
        }
        else
        {
            this.inputField.string =this.inputField.string+customEventData;
        }
       
        this.isFirstCharacter=false
    }


    backKey()
    {console.log("press");
       this.inputField.string= this.inputField.string.slice(0,-1);
       

    }

    submitKey()
    {
       console.log("number submited");
       this.submittedMessage.string=this.inputField.string;
       this.numberUI.active=false;
       this.submittedUI.active=true;
       

    }

    submitAgain()
    {
        this.numberUI.active=true;
        this.submittedUI.active=false;
        this.inputField.string="";
 
    }

  
}
