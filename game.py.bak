
import pygame
from math import pi, cos, sin, sqrt
from random import randint, random


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
                self.size = 500
                self.discs = [Striker(Vector2((100, 100)), 1)]
                f = open('setup.txt', 'r')
                todeg = pi / 180
                for line in f:
                        data = line.split()
                        r = float(data[0])
                        theta = float(data[1]) * todeg
                        typ = int(data[2])
                        scalar = r * 2 * 13 * 1.05
                        x = scalar * cos(theta) + self.size / 2
                        y  = scalar * sin(theta) + self.size / 2
                        pos = Vector2((x, y))


                        self.discs.append(Disc(pos, typ))


                self.surf = pygame.Surface((self.size, self.size))
                self.image = pygame.image.load('board.jpg')
                self.image = pygame.transform.scale(self.image, (self.size, self.size))

        def draw(self):
                self.surf.blit(self.image, (0, 0))
                for disc in self.discs:
                        disc.draw(self.surf)

class Disc(object):
        def __init__(self, pos, typ):
                self.pos = pos
                self.vel = Vector2((0, 0))
                self.typ = typ
                self.r = 13
                self.mass = 5
		
        def draw(self, boardsurf):
                if self.typ == 2:
                        col = (255, 0, 0)
                elif self.typ == 1:
                        col = (255, 255, 255)
                else:
                        col = (0, 0, 0)
                pygame.draw.circle(boardsurf, col, (int(self.pos.x), int(self.pos.y)), self.r)

        def getpcollide(self):
                pr = 19
                thisr = 13
                for pos in ((45, 45), (45, 455), (455, 455), (455, 45)):
                        px = pos[0]
                        py = pos[1]
				
				
                        dist = sqrt((self.pos.x - px) ** 2 + (self.pos.y - py) ** 2)
                        if dist * .6 <=  abs(thisr - pr):
                                return True
                return False

        def wcollide(self):
                ret = False
                if self.pos.x - self.r < 25 and self.vel.x < 0:
                        ret = True
                        self.vel.x = 0 - self.vel.x
                if self.pos.x + self.r > 475 and self.vel.x > 0:
                        self.vel.x = 0 - self.vel.x
                        ret = True

                if self.pos.y - self.r < 25 and self.vel.y < 0:
                        self.vel.y = 0 - self.vel.y
                        ret = True
                if self.pos.y + self.r > 475 and self.vel.y > 0:
                        self.vel.y = 0 - self.vel.y
                        ret = True
                return ret

       
        def dcollide(self, d):
                rsum = self.r + d.r
                dist = sqrt((self.pos.x - d.pos.x) ** 2 + (self.pos.y - d.pos.y) ** 2)
                if dist < rsum:
                        #1 self 2 d
                        posdif = self.pos - d.pos
                        veldif = self.vel - d.vel
                        magsquare = posdif.mag() ** 2 
                        msum = self.mass + d.mass
                        
                        m1 = 2 * d.mass / msum
                        m2 = 2 * self.mass / msum
                        main1 = (posdif * veldif) / magsquare
                        main2 = (-posdif) * (-veldif) / magsquare

                        self.vel = (self.vel - posdif.scale(m1 * main1)).scale(1.05)
                        if self.vel.mag() < 3:
                                self.vel = self.vel.scale(3/self.vel.mag())
                        d.vel = (d.vel - (-posdif).scale(m2 * main1)).scale(1.05)
                        if d.vel.mag() < 3:
                                d.vel = d.vel.scale(3/self.vel.mag())
                        return True
                return False
                
                
                
        
        def move(self):
                self.pos.x += self.vel.x / 60 
                self.pos.y += self.vel.y / 60
                self.vel.x = self.vel.x * .15 **(1/60)
                self.vel.y = self.vel.y * .15 ** (1/60)

class Striker(Disc):
        def __init__(self, pos, typ):
                self.pos = pos
                self.vel = Vector2((0, 0))
                self.typ = typ
                self.r = 17
                self.mass = 15
        
        def getpcollide(self):
                return False
                

class Game(object):
        def __init__(self):
                self.wscore = 0
                self.bscore = 0
                self.board = Board()
        def move(self):
                cold = False
                for disc in self.board.discs:
                        disc.move()

                count1 = 0
                for disc in self.board.discs:
                        if disc.wcollide():
                                cold = True
                        
                while count1 < len(self.board.discs) - 1:
                        count2 = count1 + 1
                        while count2 < len(self.board.discs):
                                if self.board.discs[count1].dcollide(self.board.discs[count2]):
                                        cold = True
                                count2 += 1

                        count1 += 1

                return cold
		
		
class Client():
        def __init__(self):
                self.size = ((800, 600))
                pygame.init()
                pygame.mixer.init()
                self.holesound = pygame.mixer.Sound("yee.wav")
                self.game = Game()
                self.screen = pygame.display.set_mode(self.size)
                self.clock = pygame.time.Clock()

        def run(self):
                run = True
                while run:
                        #Request ball movement from server
                        if self.game.move():
                                pass

                        for event in pygame.event.get():
                                if event.type == pygame.QUIT:
                                        run = False

			
                        count = 0

                        #Handle pocket entry
                        discs = self.game.board.discs
                        while count < len(discs):
                                disc = discs[count]
                                if disc.getpcollide():

                                        self.holesound.play()
                                        del discs[count]
                                count += 1

                        a = randint(1, 100)
                        if 1 == a:
                                discs[0].vel = Vector2(((random() - .5) * 999, (random() - .5) * 999))
                        
                        
				
                        self.draw()
                        self.clock.tick(60)
                pygame.quit()
                pygame.mixer.quit()

        def draw(self):
                self.screen.fill((255, 255, 255))
                board = self.game.board
                board.draw()
                
                pos = ((self.size[0] - board.size) / 2, (self.size[1] - board.size) / 2)
                self.screen.blit(self.game.board.surf, pos)


                
                pygame.display.update()
			
			
client = Client()
client.run()
		
	
		
	
