class Drone {
    constructor(){
        this.x=null;
        this.y=null;
        this.facing=null;
        this.surface=[[0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0]];
    }
    place(x,y,f){
        if (x >= 0 && x <= 9 && y >= 0 && y <= 9){
            this.x = x;
            this.y = y;
            this.facing = f;
        }
    }

    move(){
        switch(this.facing){
            case 'NORTH':
                if(this.y < 9){
                    this.y += 1;
                }
                break;
            case 'SOUTH':
                if(this.y > 0) {
                    this.y -= 1;
                }
                break;
            case 'EAST':
                if(this.x < 9){
                    this.x += 1;
                }
                break;
            case 'WEST':
                if(this.x > 0){
                    this.x -= 1;
                }
                break;
        }
    }
    right(){
        switch(this.facing){
            case 'NORTH':
                this.facing = 'EAST';
                break;
            case 'SOUTH':
                this.facing = 'WEST';
                break;
            case 'EAST':
                this.facing = 'SOUTH';
                break;
            case 'WEST':
                this.facing = 'NORTH';
                break;
        }
    }
    attack() {
        switch (this.facing){
            case 'NORTH':
                if (this.y < 8){
                    this.surface[this.y +2][this.x] = 0;
                }
                break;
            case 'SOUTH' :
                if(this.y > 1) {
                    this.surface[this.y - 2][this.x] = 0;
                }
                break;
            case 'EAST' :
                if(this.x < 8) {
                    this.surface[this.y][this.x+2] = 0;
                }
                break;
            case 'WEST' :
                if(this.x > 1) {
                    this.surface[this.y][this.x -2] = 0;
                }
                break;
        }
    }
}