
const app = new PIXI.Application();

document.body.appendChild(app.view);

app.loader.add('space', 'assets/background.png').load((loader, resources)=>{

    const space = new PIXI.Sprite(resources.space.texture);

    space.x = 0;
    space.y = 0;

    app.stage.addChild(space);
})