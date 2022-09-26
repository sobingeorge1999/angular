interface Editor{
    edit();
    save();
    modify();
    run();
}

class Vscode implements Editor{
    edit() {
        console.log("inside vscode edit");
    }
    save() {
        console.log("inside save");

        
    }
    modify() {
        console.log("modify");
        
    }
    run() {
        console.log("inside run");
        
    }
}

var vsc=new Vscode()
vsc.run()
vsc.edit()


