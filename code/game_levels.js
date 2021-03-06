var GAME_LEVELS = [
  ["             -                                     -                     -      ",
   "                                                                                ",
   "                                                                                ",
   "                           o       p                                            ",
   "                                                                                ",
   "                                                                   x            ",
   "                                                                  xxx           ",
   "                                                  xxx      xx    xx!xx          ",
   "                                    o o      xxx                 x!!!x          ",
   "                                                                 xx!xx          ",
   "                                   xxxxx                          xvx           ",
   "                                                                            xx  ",
   "  xx                                      o o                                x  ",
   "  x                     o                                                    x  ",
   "  x                                      xxxxx                             o x  ",
   "  x          xxxx       o                xxxxx                               x  ",
   "  x  @       xxxx                        xxxxx                   xxxxx       x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   "                              x   x                  x     x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              xxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                      x!!x                        xxxxxxx         -                          x!x  ",
   "                -                     x!!x                     xxxx     xxxx                                 x!x  ",
   "                                      x!!xxxxxxxxxxx          xx           xx                                x!x  ",
   "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
   "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
   "                                                xx!x         x     o   o                                    xx!x  ",
   "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
   "                                          -      xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
   "                             o    p                          xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx            v                        ",
   "                     o                                         xxxx!!!!!xxxx                                      ",
   "                                              xx     xx           xxxxxxx  -     xxx         xxx                  ",
   "                     x                         x     x                             x         x x                  ",
   "                     x                         x     x                             x         x                    ",
   "                    xx                         x     xxx                       xxxxx        x                    ",
   "                   xxx                         xx    x                             x         x                    ",
   "                xxxxxx                         x     x      o  o     x   x         x         x                    ",
   "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
   "              xxxxxxxxx         x   x          x     x    xxxxxxx    x   x   xxxxxxxxx       x                    ",
   "            xxxxxxxxxxxx        x o x          x   xxx               x   x   x               x                    ",
   "     @       xxxxxxxxxxx        x   x          x     x               x   x   x               x                    ",
   "    xxx      xxxxxxxxxxx        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
   "    xxx      xxxxxxxxxxx       xx o xx         x     x               x     o     x x         x                    ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                 o          p                                                                 ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                       -                                      ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "                                      x   x                !!!        !!!  xxx                                ",
   "                                      x   x                !x!        !x!                                     ",
   "                                    xxxx xxxx               x          x                -                     ",
   "                                      x   x                 x   oooo   x       xxx                            ",
   "                                      x   x                 x          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                   xxxx   xx      x   x      x                                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x           x                     xxx                               ",
   "                                  xxxxx   xx          x                                                       ",
   "                   -                  x   x= = = =    x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    = = = =x     o      xxx       xxx                  -           ",
   "                              xxxxxxxxx   xx          x                     x!!!x                             ",
   "                              o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x  x           x               x                 x!!!x                  ",
   "                            xxxx xx  xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxxx  x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx                        x     xxx     x                                         x!!!x               xxx  ",
   "  xxx                         x    xxx    x                               xxx        xxx                 x x  ",
   "  x                           x     x     xxxxxxx                        xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                           xxx         x                              x x x                             x  ",
   "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x                xxx             o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x   xxxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                 o              p                             "],
  ["                                                                                        -         xxx x       ",
   "                                                                                                      x       ",
   "                                 -                                                                xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxxxxx                                                                             x       ",
   "       !  o  !                                                    x xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                    x x   x x   x x   x x   x x   x x           ",
   "      xx= o  xxx          x                                       x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                    x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                       xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                         xxx                                                  ",
   "          o              xxx                             xxxxxx                                               ",
   "                                                                                                       -      ",
   "                                                                                                              ",
   "                                                   xxxxxxxx                                                   ",
   "                   xxx         xxxxx                                                                          ",
   "                                                                                                              ",
   "                          o                                                     x      x                     ",
   "                                                          xxxxxxxxx                                           ",
   "             xxx         xxx         xxx                                 x                  xxx               ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                   x                                                             ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx     xxx                                       xxx                  ",
   "  x         x   x       x   x       x   x      xxx        ||                  xxxxxxx                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx     xxxxx                                                           ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
