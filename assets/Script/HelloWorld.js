cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        this.worldCamera = this.node.getChildByName("worldCamera");
        this.cubeList = this.node.getChildByName("cubeList");
        this.label = cc.find("Canvas/label").getComponent(cc.Label)
        this.offset = 0;
        this.speed = .2
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    },

    touchStart(){this.speed = 0.1},
    touchEnd(){this.speed = 0.2},

    // called every frame
    update: function (dt) {
        if(this.cubeList.children[this.offset%this.cubeList.children.length].z > this.worldCamera.z-6)
        {
            this.cubeList.children[this.offset%this.cubeList.children.length].z = (this.cubeList.children.length + this.offset )*-2
            this.offset +=1
        }
        
        this.worldCamera.z -=this.speed;
        this.label.string = "Camera Z: "+this.worldCamera.z.toFixed(2)

    },
});
