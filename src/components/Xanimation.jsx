const NavToggle ={
    "initial": {
        y:100
    },
    "animate":{
        y:0,
        transition:{
            duration:1
        }
    },
}
const TeamInfoAn={
    "initial":{
        x:-400,
        opacity:0
    },
    "animate":{
        x:0,
        opacity:1,
        transition:{
            duration:0.8,
            delay:0.5
        }
    }
}
const Herouser={
    "initial":{
        opacity:0
    },
    "animate":{
        opacity:1,
        transition:{
            duration:3
        }
    }
}
const GetStartedAn={
    "initial":{
        y:100,
        opacity:0.5,
    },
    "animate":{
        y:0,
        opacity:1,
        transition:{
            duration:0.7,
            delay:0.1,
          
        }
    }
}
const GetStartedR={
    "initial":{
        x:100
    },
    "animateR":{
        x:0,
        transition:{
            duration:0.5,
            delay:0.1
        }
    }
}
const StatL ={
    'initial':{
        scale:0.2
    },
    'animatel':{
        scale:1,
        rotate:360,
        transition:{
            duration:0.3,
        }
        
    }
}
const StatR ={
    'initial':{
        x:-200,
    },
    'animateR':{
        x:0,
        transition:{
            delay:0.1,
            duration:0.5
        }
    }
}
const CardL={
    'initial':{
        x:-200,
    },
    'animatecardL':{
        x:0,
        transition:{
            delay:0.1,
            duration:0.6
        }
    }   
}
const CardR={
    'initial':{
        x:200,
    },
    'animatecardR':{
        x:0,
        transition:{
            delay:0.1,
            duration:0.6
        }
    }   
}

const TestAn={
    'initial':{
        scale:0.5
    },
    'animate1':{
        scale:1,
        transition:{
            delay:0.1,
            duration:0.6
        },
    },
    'animate2':{
        scale:1,
        transition:{
            delay:0.1,
            duration:0.6
        },
    },
    'animate3':{
        scale:1,
        transition:{
            delay:0.1,
            duration:0.6
        },
    },
}


export {NavToggle,TeamInfoAn,Herouser,GetStartedAn,GetStartedR,StatL,StatR,CardL,CardR,TestAn}