import pygame
from math import pi, cos, sin, sqrt
from random import randint, random


def rotCenter(image, rect, angle):
        """rotate an image while keeping its center"""
        image.set_at((0, 0), (255, 255, 255, 255))
        rot_image = pygame.transform.rotate(image, angle)
        rot_rect = rot_image.get_rect(center=rect.center)
        return rot_image,rot_rect

class Vector2(object):

        def __init__(self, data):
                self.x = data[0]
                self.y = data[1]

        def __add__(self, v):
                return Vector2((self.x + v.x, self.y + v.y))

        def __sub__(self, v):
                return Vector2((self.x - v.x, self.y - v.y))

        def __mul__(self, v):
                if v is float or v is int:
                        return self.scale(v)
                        
                return self.x * v.x + self.y * v.y
        def __div__(self, i):
                if i is int or i is float:
                        return Vector2((self.x / i, self.y / i))

        def __neg__(self):
                return Vector2((-self.x, -self.y))

        def mag(self):
                return sqrt(self.x ** 2 + self.y ** 2)
        def scale(self, i):
                return Vector2((self.x * i, self.y * i))



class Board(object):
	
        def __init__(self):
                self.size = 600
                self.discs = [Striker(Vector2((100, 100)), 1, self.size)]
                f = ['0 0 2',
                 '1 30 0',
                 '1 90 1',
                 '1 150 0',
                 '1 210 1',
                 '1 270 0',
                 '1 330 1',
                 '1.73205080757 0 0',
                 '1.73205080757 60 0',
                 '1.73205080757 120 0',
                 '1.73205080757 180 0',
                 '1.73205080757 240 0',
                 '1.73205080757 300 0',
                 '2 30 1',
                 '2 90 1',
                 '2 150 1',
                 '2 210 1',
                 '2 270 1',
                 '2 330 1']
                 
                todeg = pi / 180
                for line in f:
                        data = line.split()
                        r = float(data[0])
                        theta = float(data[1]) * todeg
                        typ = int(data[2])
                        scalar = int(r * 2 * 13 * 1.05) * self.size / 500
                        x = scalar * cos(theta) + self.size / 2
                        y  = scalar * sin(theta) + self.size / 2
                        pos = Vector2((x, y))


                        self.discs.append(Disc(pos, typ, self.size))


                self.surf = pygame.Surface((self.size, self.size))
                self.image = pygame.image.load('board.jpg')
                self.image = pygame.transform.scale(self.image, (self.size, self.size))

        def getStriker(self):
                for disc in self.discs:
                        if disc is Striker:
                                return disc

        def draw(self):
                
                self.surf.blit(self.image, (0, 0))
                for disc in self.discs:
                        disc.draw(self.surf)

class Disc(object):
        def __init__(self, pos, typ, boardsz):
                self.pos = pos
                self.vel = Vector2((0, 0))
                self.typ = typ
                if typ == 'mouse':
                        self.r = .0001
                else:
                        self.r = int(13 / 500 * boardsz)
                self.mass = 5
		
        def draw(self, boardsurf):
                if self.typ == 2:
                        col = (255, 0, 0)
                elif self.typ == 1:
                        col = (255, 255, 255)
                else:
                        col = (0, 0, 0)
                pygame.draw.circle(boardsurf, col, (int(self.pos.x), int(self.pos.y)), self.r)

        def getpcollide(self, boardsz):
                pr = 19 / 500 * boardsz
                pos1 = boardsz / 500 * 45
                pos2 = boardsz - pos1
                for pos in ((pos1, pos1), (pos1, pos2), (pos2, pos2), (pos2, pos1)):
                        px = pos[0]
                        py = pos[1]
				
				
                        dist = sqrt((self.pos.x - px) ** 2 + (self.pos.y - py) ** 2)
                        if dist * .6 <=  abs(self.r - pr):
                                return True
                return False

        def wcollide(self, boardsz):
                a = boardsz / 20
                b = boardsz - a
                ret = False
                if self.pos.x - self.r < a and self.vel.x < 0:
                        ret = True
                        self.vel.x = 0 - self.vel.x
                if self.pos.x + self.r > b and self.vel.x > 0:
                        self.vel.x = 0 - self.vel.x
                        ret = True

                if self.pos.y - self.r < a and self.vel.y < 0:
                        self.vel.y = 0 - self.vel.y
                        ret = True
                if self.pos.y + self.r > b and self.vel.y > 0:
                        self.vel.y = 0 - self.vel.y
                        ret = True
                return ret
        def getDTouch(self, d):
                rsum = self.r + d.r
                dist = sqrt((self.pos.x - d.pos.x) ** 2 + (self.pos.y - d.pos.y) ** 2)
                return dist < rsum

       
        def dcollide(self, d):
                if self.getDTouch(d):
                        #1 self 2 d
                        rsum = self.r + d.r
                        dist = sqrt((self.pos.x - d.pos.x) ** 2 + (self.pos.y - d.pos.y) ** 2)
                        posdif = self.pos - d.pos
                        unitposdif = posdif.scale((rsum - dist) / posdif.mag() * 4) #Small adjustment
                        veldif = self.vel - d.vel
                        magsquare = posdif.mag() ** 2 
                        msum = self.mass + d.mass
                        
                        m1 = 2 * d.mass / msum
                        m2 = 2 * self.mass / msum
                        main1 = (posdif * veldif) / magsquare
                        main2 = (-posdif) * (-veldif) / magsquare

                        self.vel = (self.vel - posdif.scale(m1 * main1)).scale(.95)
                        self.vel = self.vel + unitposdif
                        d.vel = (d.vel - (-posdif).scale(m2 * main1)).scale(.95)
                        d.vel = d.vel - unitposdif
                        return True
                return False
                
                
                
        
        def move(self, subframes):
                self.pos.x += self.vel.x / 60/ subframes
                self.pos.y += self.vel.y / 60 / subframes
                self.vel.x = self.vel.x * .15 **(1/60/subframes)
                self.vel.y = self.vel.y * .15 ** (1/60/subframes)

        def flip(self, boardsz):
                self.pos = Vector2((boardsz - self.pos.x, boardsz - self.pos.y))

class Striker(Disc):
        def __init__(self, pos, typ, boardsz):
                self.pos = pos
                self.vel = Vector2((1000, 0))
                self.typ = typ
                self.r = int(17 /500 * boardsz)
                self.mass = 15
        
        def getpcollide(self, boardsz):
                return False
                

class Game(object):
        def __init__(self):
                self.wscore = 0
                self.bscore = 0
                self.board = Board()
                self.whosturn = 1
                self.moving = False
                self.shooting = True
                self.subframes = 5 #300 per second physics frames

        def flip(self):
                for disc in self.board.discs:
                        disc.flip(self.board.size)
                
        def move(self):
                if self.moving:
                        for count in range(self.subframes):
                                for disc in self.board.discs:
                                        disc.move(self.subframes)

                                count1 = 0
                                for disc in self.board.discs:
                                        disc.wcollide(self.board.size)
                                                
                                        
                                while count1 < len(self.board.discs) - 1:
                                        count2 = count1 + 1
                                        while count2 < len(self.board.discs):
                                                self.board.discs[count1].dcollide(self.board.discs[count2])
                                                        
                                                count2 += 1

                                        count1 += 1

                                self.pcollide()
                                self.testStop()

        def testStop(self):
                moved = False
                for disc in self.board.discs:
                        if disc.vel.mag() > 1:
                                moved = True
                        
                self.moving = moved
                if not self.moving:
                        
                        for disc in self.board.discs:
                                disc.vel = Vector2((0, 0))
                        self.moving = False
                        self.shooting = True #will receive input once the user's board turns


        def pcollide(self):
                ret = False

                count = 1
                #Handle pocket entry
                discs = self.board.discs
                while count < len(discs):
                        disc = discs[count]
                        if disc.getpcollide(self.board.size):

                                ret = True
                                del discs[count]
                        count += 1
                return ret
		
		
class Client():
        def __init__(self):
                self.size = ((800, 600))
                pygame.init()
                pygame.mixer.init()
                self.game = Game()
                self.screen = pygame.display.set_mode(self.size)
                self.clock = pygame.time.Clock()
                self.ang = 0
                self.turning = False
                self.shooting = True
                self.dragging = False
                

        def run(self):
                run = True
                while run:
                        if self.tick():
                                break
                        
                pygame.quit()
                pygame.mixer.quit()


        def draw(self):
                self.screen.fill((255, 255, 255))
                board = self.game.board
                board.draw()
                
                boardrect = pygame.Rect((self.size[0] - board.size) / 2,
                             (self.size[1] - board.size) / 2,
                             board.size,
                             board.size)
                img, rect = rotCenter(board.surf, boardrect, self.ang)
                
                self.screen.blit(img, (rect.x, rect.y))
                pygame.display.update()


        def turnTick(self):
                self.ang += 1
                if self.ang == 180 or self.ang == 360:
                        
                        if self.ang == 180:
                                self.game.flip()
                        self.ang = 0

                        self.turning = False
                        self.shooting = True
                        

        def shootTick(self):
                canDrag = False
                mouse = pygame.mouse.get_pos()
                board = self.game.board
                mx = mouse[0]
                my = mouse[1]
                convx = mx - (self.size[0] - board.size) / 2
                convy = my - (self.size[1] - board.size) / 2
                bally = board.size * .8
                
                if convx > board.size * .75:
                        ballx = board.size * .75
                elif convx < board.size * .25:
                        ballx = board.size * .25
                else:
                        ballx = convx
                        canDrag = abs(bally - convy) < board.size * 5 / 600

                board.discs[0].pos = Vector2((ballx, bally))
                nocol = True
                first = True
                for disc in board.discs:
                        
                        if board.discs[0].getDTouch(disc) and not first:
                                nocol = False

                        first = False
                        
                canDrag = canDrag and nocol
                        
                newmx = ballx + (self.size[0] - board.size) / 2
                newmy = bally + (self.size[1] - board.size) / 2
                #pygame.mouse.set_pos((newmx, newmy))
                
                if pygame.mouse.get_pressed()[0] and canDrag:
                        self.dragging = True

        def dragTick(self):
                mouse = pygame.mouse.get_pos()
                board = self.game.board
                striker = board.discs[0]
                convstrx = striker.pos.x + (self.size[0] - board.size) / 2
                convstry = striker.pos.y + (self.size[1] - board.size) / 2
                mx = mouse[0]
                my = mouse[1]
                convx = mx - (self.size[0] - board.size) / 2
                convy = my - (self.size[1] - board.size) / 2
                mousedisc = Disc(Vector2((convx, convy)), 'mouse', board.size)
                if pygame.mouse.get_pressed()[0]:
                        #won't work
                        pygame.draw.line(self.screen,
                                         (0,0,0),
                                         (mx, my),
                                         (convstrx, convstry),
                                         5)
                #Add once shot
                else:
                        if not striker.getDTouch(mousedisc):
                                xdist = striker.pos.x - mousedisc.pos.x
                                ydist = striker.pos.y - mousedisc.pos.y
                                striker.vel = Vector2((xdist, ydist)).scale(10)
                                self.shooting = False
                                self.game.moving = True
                                self.game.shooting = False
                        self.dragging = False
        
        def tick(self):
		#Request ball movement from server

                #Move
                if self.game.moving:
                        self.game.move()

                #Turn
                elif self.turning:
                        self.turnTick()

                #Shoot tick
                                
                elif self.dragging:
                        self.dragTick()
                                        
                                
                

                        
                elif self.shooting:
                        self.shootTick()
                                
                else:
                        self.turning = True
                

                        
                count = 0
                ret = False
                for event in pygame.event.get():
                        if event.type == pygame.QUIT:
                                ret = True

        
                self.draw()
                self.clock.tick(60)
                return ret


def main():		
        client = Client()
        client.run()

main()
	
