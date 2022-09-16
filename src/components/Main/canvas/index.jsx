import './canvas.scss'

const Canvas = () => {
    const canvas = document.getElementById('canvas')
    if(canvas){
        const context = canvas.getContext('2d')
    let particleArray = []

    const mouse={
        x:null,
        y:null,
        radius:150
    }

    window.addEventListener('mousemove', function(e){
        mouse.x = e.x;
        mouse.y = e.y;
        mouse.radius = 150
    })

    context.font = '30px Verdana'
    context.fillText('A',0,40)
    context.fillStyle = 'white'

    // const data = context.getImageData(0,0,100,10)
    // context.strokeStyle='white'
    // context.strokRect(0,0,100,100)

    class Particle{
        constructor(x,y){
            this.x=x
            this.y=y
            this.size= 1
            this.baseX=this.x
            this.baseY = this.y
            this.density= (Math.random()*30)+1
        }

        draw(){
            context.fillStyle = 'white';
            context.beginPath()
            context.arc(this.x, this.y, this.size, 0, Math.PI *2)
            context.fill()
        }
        update(){
            let dx = mouse.x - this.x
            let dy = mouse.y - this.y
            let distance = Math.sqrt(dx*dx +dy*dy)

            let forceDirectionX = dx /distance
            let forceDirectionY = dy /distance
            // let maxDistance = mouse.radius
            // let force= (maxDistance - distance) / maxDistance

            if (distance<50){
                this.x += forceDirectionX*3
                this.y += forceDirectionY*3
            }else{
                this.size=1
            }
        }
    }

    function init(){
        particleArray = []
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * canvas.width
            let y = Math.random() * canvas.height
            particleArray.push(new Particle(x,y))
            
        }
        particleArray.push(new Particle(15,15))
        particleArray.push(new Particle(20,30))
    }

    init()

    function animate(){
        context.clearRect(0,0,canvas.width,canvas.height)
        for(let i = 0; i < particleArray.length; i++){
            particleArray[i].draw()
            particleArray[i].update()
        }
        requestAnimationFrame(animate)
    }
    animate()
    
}
    
    return (
        <div>
            <canvas id='canvas'></canvas>
            
        </div>
    );
};

export default Canvas;