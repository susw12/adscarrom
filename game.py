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

        def draw(self):
                
                self.surf.blit(self.image, (0, 0))
                for disc in self.discs:
                        disc.draw(self.surf)

class Disc(object):
        def __init__(self, pos, typ, boardsz):
                self.pos = pos
                self.vel = Vector2((0, 0))
                self.typ = typ
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

       
        def dcollide(self, d):
                rsum = self.r + d.r
                dist = sqrt((self.pos.x - d.pos.x) ** 2 + (self.pos.y - d.pos.y) ** 2)
                if dist < rsum:
                        #1 self 2 d
                        posdif = self.pos - d.pos
                        unitposdif = posdif.scale(1 / posdif.mag())
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
                
                
                
        
        def move(self):
                self.pos.x += self.vel.x / 60 
                self.pos.y += self.vel.y / 60
                self.vel.x = self.vel.x * .15 **(1/60)
                self.vel.y = self.vel.y * .15 ** (1/60)

class Striker(Disc):
        def __init__(self, pos, typ, boardsz):
                self.pos = pos
                self.vel = Vector2((0, 0))
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
        def move(self):
                cold = False
                for disc in self.board.discs:
                        disc.move()

                count1 = 0
                for disc in self.board.discs:
                        if disc.wcollide(self.board.size):
                                cold = True
                        
                while count1 < len(self.board.discs) - 1:
                        count2 = count1 + 1
                        while count2 < len(self.board.discs):
                                if self.board.discs[count1].dcollide(self.board.discs[count2]):
                                        cold = True
                                count2 += 1

                        count1 += 1

                return cold

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
                self.holesound = pygame.mixer.Sound("yee.wav")
                self.game = Game()
                self.screen = pygame.display.set_mode(self.size)
                self.clock = pygame.time.Clock()
                self.ang = 0
                self.turning = False
                self.shooting = False
                

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

        def tick(self):
		#Request ball movement from server
                if not self.turning == False and not self.shooting:
                        self.turning = not self.game.move()
                if self.game.pcollide():
                        self.holesound.play()
                
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
	
