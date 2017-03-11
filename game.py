"""Very simple breakout clone. A circle shape serves as the paddle, then 
breakable bricks constructed of Poly-shapes. 

The code showcases several pymunk concepts such as elasitcity, impulses, 
constant object speed, joints, collision handlers and post step callbacks.
"""

import math, sys, random
import os

import pygame
from pygame.locals import *
from pygame.color import *
    
import pymunk
from pymunk import Vec2d
import pymunk.pygame_util
width, height = 600, 600



collision_types = {
    "striker": 1,
    "wall": 2,
    "coin": 3,
    "pocket": 4,
}


def spawn_ball(space, position, direction):
    ball_body = pymunk.Body(1, pymunk.inf)
    ball_body.position = position
    
    ball_shape = pymunk.Circle(ball_body,10)
    ball_shape.color =  THECOLORS["green"]
    ball_shape.elasticity = 1.0
    ball_shape.collision_type = collision_types["coin"]
    
    ball_body.apply_impulse_at_local_point(Vec2d(direction))
    
    # Keep ball velocity at a static value
    def constant_velocity(body, gravity, damping, dt):
        body.velocity = body.velocity.normalized() * 400
    ball_body.velocity_func = constant_velocity
    
    space.add(ball_body, ball_shape)

def setup_level(space, striker_body):
              
    # Spawn a ball for the player to have something to play with
    spawn_ball(space, striker_body.position + (0,40), random.choice([(1,10),(-1,10)]))
def main():
    ### PyGame init
    pygame.init()
    screen = pygame.display.set_mode((width,height))
    pygame.image.load(os.path.join('boardpic.jpg'))
    clock = pygame.time.Clock()
    running = True
    font = pygame.font.SysFont("Arial", 16)
    ### Physics stuff
    space = pymunk.Space()  
    draw_options = pymunk.pygame_util.DrawOptions(screen) 
    
    ### Game area
    # walls - the left-top-right walls
    static_lines = [pymunk.Segment(space.static_body, (50, 50), (50, 550), 2)
                ,pymunk.Segment(space.static_body, (50, 550), (550, 550), 2)
                ,pymunk.Segment(space.static_body, (550, 550), (550, 50), 2)
                ,pymunk.Segment(space.static_body, (550, 50), (50, 50), 2)
                ]  
    for line in static_lines:
        line.color = THECOLORS['black']
        line.elasticity = 1.0
    
    space.add(static_lines)

    
    ### Player ship
    """striker_body = pymunk.Body(500, pymunk.inf)
    striker_body.position = 300,100
    
    striker_shape = pymunk.Circle(striker_body, 15)
    striker_shape.color = THECOLORS["red"]
    striker_shape.elasticity = 1.0
    striker_shape.collision_type = collision_types["striker"]
    
    # restrict movement of player to a straigt line 
    move_joint = pymunk.GrooveJoint(space.static_body, striker_body, (100,100), (500,100), (0,0))
    space.add(striker_body, striker_shape, move_joint)
    global state"""
    # Start game
    setup_level(space)

    my_particles = []

    striker = pymunk.Circle((160,470), 15,50)
    striker.color(THECOLORS["green"])
    particle = pymunk.Circle((300,280), 10,5)
    particle.color(THECOLORS["black"])
    my_particles.append(particle)
    particle = pymunk.Circle((260,280), 10,5)
    particle.color(THECOLORS["black"])
    my_particles.append(particle)
    particle = pymunk.Circle((340,280), 10,5)
    particle.color(THECOLORS["black"])
    my_particles.append(particle)
    particle = pymunk.Circle((220,280), 10,5)
    particle.color(THECOLORS["black"])
    my_particles.append(particle)
    particle = pymunk.Circle((280,300), 10,5)
    my_particles.append(particle)
    particle = pymunk.Circle((280,260), 10,5)
    particle.color(THECOLORS["black"])
    my_particles.append(particle)
    particle = pymunk.Circle((280,280), 10,5)
    particle.color(THECOLORS["orange"])
    my_particles.append(particle)
    particle = pymunk.Circle((320,280), 10,5)
    particle.color(THECOLORS["white"])
    my_particles.append(particle)
    particle = pymunk.Circle((240,280), 10,5)
    particle.color(THECOLORS["white"])
    my_particles.append(particle)
    particle = pymunk.Circle((280,320), 10,5)
    particle.color(THECOLORS["white"])
    my_particles.append(particle)
    particle = pymunk.Circle((260,300), 10,5)
    particle.color(THECOLORS["white"])
    my_particles.append(particle)
    particle = pymunk.Circle((280,240), 10,5)
    particle.color(THECOLORS["white"])
    my_particles.append(particle)

    while running:
        for event in pygame.event.get():
            if event.type == QUIT: 
                running = False
            elif event.type == KEYDOWN and (event.key in [K_ESCAPE, K_q]):
                running = False
            elif event.type == KEYDOWN and event.key == K_p:
                pygame.image.save(screen, "breakout.png")
                
            elif event.type == KEYDOWN and event.key == K_LEFT:
                striker_body.velocity = (-600,0)
            elif event.type == KEYUP and event.key == K_LEFT:
                striker_body.velocity = 0,0
                
            elif event.type == KEYDOWN and event.key == K_RIGHT:
                striker_body.velocity = (600,0)
            elif event.type == KEYUP and event.key == K_RIGHT:
                striker_body.velocity = 0,0
                
            elif event.type == KEYDOWN and event.key == K_r:
                setup_level(space, striker_body)
            elif event.type == KEYDOWN and event.key == K_SPACE:
                spawn_ball(space, striker_body.position + (0,40), random.choice([(1,10),(-1,10)]))
                   
        ### Clear screen
        screen.fill(THECOLORS["grey"])
        
        ### Draw stuff
        space.debug_draw(draw_options)
        
        state = []
        for x in space.shapes:
            s = "%s %s %s" % (x, x.body.position, x.body.velocity)
            state.append(s)
        
        ### Update physics
        fps = 60
        dt = 1./fps
        space.step(dt)
        
        ### Info and flip screen
        screen.blit(font.render("fps: " + str(clock.get_fps()), 1, THECOLORS["white"]), (0,0))
        screen.blit(font.render("Move with left/right arrows, space to spawn a ball", 1, THECOLORS["darkgrey"]), (5,height - 35))
        screen.blit(font.render("Press R to reset, ESC or Q to quit", 1, THECOLORS["darkgrey"]), (5,height - 20))
        
        pygame.display.flip()
        clock.tick(fps)
        
if __name__ == '__main__':
    sys.exit(main())