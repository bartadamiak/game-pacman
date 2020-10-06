window.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector(".container");
    const container2 = document.querySelector(".container2");

    /// drawing board \\\

    const board = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
        0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

    ]

    const boardSquares = [];

    function createBoard(boardContainer, boardElements) {
        for (var i = 0; i < board.length; i++) {
            const box = document.createElement('div');
            boardContainer.appendChild(box);
            boardElements.push(box);

            if (board[i] === 0) {
                boardElements[i].classList.add('wall')
            }
            if (board[i] === 1) {
                boardElements[i].classList.add('path')

            }

        }
    }

    createBoard(container, boardSquares)



    ////// Pac starting position

    boardSquares[729].classList.add('current-position');
    boardSquares[729].classList.add('start');

    //// Movement \\\\



    var counter = 0;

    document.addEventListener('keydown', function (e) {

        var audio = new Audio('./sounds/coin.mp3')

        switch (e.keyCode) {
            case 38:

                for (var i = 0; i < boardSquares.length; i++) {

                    if (boardSquares[i].classList.contains("current-position")) {
                        var nextIndex = boardSquares[i - 28];
                        var currentIndex = boardSquares[i];

                    }
                }

                if (nextIndex.classList.contains("path")) {
                    currentIndex.classList.remove("current-position")
                    nextIndex.classList.add("current-position")
                };
                if (nextIndex.classList.contains("coin")) {
                    nextIndex.classList.remove("coin")
                    audio.play()
                    counter++;
                }
                if (nextIndex.classList.contains("ghost")) {
                    nextIndex.classList.remove("current-position")
                    setTimeout(function () {
                        container.classList.add("hide");
                        container2.classList.remove("hide")
                    }, 500)

                }

                break;

            case 40:

                for (var i = 0; i < boardSquares.length; i++) {

                    if (boardSquares[i].classList.contains("current-position")) {
                        var nextIndex = boardSquares[i + 28];
                        var currentIndex = boardSquares[i];

                    }

                }

                if (nextIndex.classList.contains("path")) {
                    currentIndex.classList.remove("current-position")
                    nextIndex.classList.add("current-position")
                };
                if (nextIndex.classList.contains("coin")) {
                    nextIndex.classList.remove("coin");
                    audio.play()
                    counter++;
                }
                if (nextIndex.classList.contains("ghost")) {
                    nextIndex.classList.remove("current-position")
                    setTimeout(function () {

                        container.classList.add("hide");
                        container2.classList.remove("hide")
                    }, 500)

                }

                break;

            case 39:

                for (var i = 0; i < boardSquares.length; i++) {

                    if (boardSquares[i].classList.contains("current-position")) {
                        var nextIndex = boardSquares[i + 1];
                        var currentIndex = boardSquares[i];

                    }

                }

                if (nextIndex.classList.contains("path")) {
                    currentIndex.classList.remove("current-position")
                    nextIndex.classList.add("current-position")
                };
                if (nextIndex.classList.contains("coin")) {
                    nextIndex.classList.remove("coin");
                    audio.play()
                    counter++;
                };

                if (nextIndex.classList.contains("ghost")) {
                    nextIndex.classList.remove("current-position")
                    setTimeout(function () {

                        container.classList.add("hide");
                        container2.classList.remove("hide")
                    }, 500)

                }
                break;

            case 37:

                for (var i = 0; i < boardSquares.length; i++) {

                    if (boardSquares[i].classList.contains("current-position")) {
                        var nextIndex = boardSquares[i - 1];
                        var currentIndex = boardSquares[i];

                    }

                }

                if (nextIndex.classList.contains("path")) {
                    currentIndex.classList.remove("current-position")
                    nextIndex.classList.add("current-position")
                };
                if (nextIndex.classList.contains("coin")) {
                    nextIndex.classList.remove("coin");
                    audio.play()
                    counter++;
                }
                if (nextIndex.classList.contains("ghost")) {
                    nextIndex.classList.remove("current-position")
                    setTimeout(function () {
                        container.classList.add("hide");
                        container2.classList.remove("hide")
                    }, 500)

                }

                break;
        };
        document.querySelector(".score").innerText = counter

        if (document.querySelectorAll(".coin").length == 0) {
            setTimeout(function () {
                container.classList.add("hide");
                container2.classList.remove("hide")
                document.querySelector(".game-over").innerText = "Wygrałeś"
                container2.style.background = "green"
            }, 500)
        }

    })


    /// Coins \\\

    const pathTab = document.querySelectorAll(".path");


    for (var i = 0; i < pathTab.length; i++) {
        const randomElement = pathTab[Math.floor(Math.random() * pathTab.length)];
        if (!randomElement.classList.contains("current-position")) {
            randomElement.classList.add("coin")
        }

    }

/// Ghosts \\\\

    function Ghost(name, start, stop, speed, board) {
        this.name = name;
        this.start = start;
        this.stop = stop;
        this.speed = speed;
        this.createGhost = function () {
            board[this.start].classList.add("ghost")
            board[this.start].classList.add(name)

        }
    }

    var fast = new Ghost("fastGhost", 54, 726, 200, boardSquares);
    fast.createGhost()

    var slow = new Ghost("slowGhost", 94, 99, 1000, boardSquares);
    slow.createGhost()

    var bottom = new Ghost("bottomGhost", 701, 726, 300, boardSquares);
    bottom.createGhost()

    var leftMiddle = new Ghost("leftGhost", 365, 376, 700, boardSquares);
    leftMiddle.createGhost()

    const directions = {
        top: - 28,
        down: + 28,
        left: - 1,
        right: + 1,
    }

    /// direction 1 = left or down; 
    /// direction 2 = right or top

    function ghostMoving(ghostName, start, stop, tempo, direction1, direction2, board) {
        var newGhost = ghostName
        for (var i = 0; i < board.length; i++) {
            if (board[i].classList.contains(newGhost)) {
                var currentGhost = board[i]
                var currentGhostIndex = i
                var nextGhost = board[i + direction2]
                var previousGhost = board[i + direction1]
              



            }

        }
        if (currentGhostIndex != stop && !nextGhost.classList.contains("wrong-way")) {
            firstDirect()
        }
        
    
        else  {
            secondDirect()
        }

        


        function firstDirect() {

          
            currentGhost.classList.remove("ghost")
            currentGhost.classList.remove(newGhost)
            nextGhost.classList.add("ghost")
            nextGhost.classList.add("wrong-way")
            nextGhost.classList.add(newGhost);
            if (nextGhost.classList.contains("current-position")) {
                nextGhost.classList.remove("current-position")
                setTimeout(function () {

                    container.classList.add("hide");
                    container2.classList.remove("hide")
                }, 100)

            }
           



        }
        function secondDirect() {
            if (currentGhostIndex != start) {
      
                currentGhost.classList.remove("ghost")
                currentGhost.classList.remove(newGhost)
                previousGhost.classList.add("ghost")
                nextGhost.classList.remove("wrong-way")
                previousGhost.classList.add(newGhost)
                if (nextGhost.classList.contains("current-position")) {
                    nextGhost.classList.remove("current-position")
                    setTimeout(function () {
    
                        container.classList.add("hide");
                        container2.classList.remove("hide")
                    }, 100)
    
                }
            }
           
            if (currentGhostIndex == start) {
                firstDirect()
            }
        }

    }



    setInterval(function () {
        ghostMoving(bottom.name, bottom.start, bottom.stop, bottom.speed, directions.left, directions.right, boardSquares)
    }, bottom.speed)

    setInterval(function () {
        ghostMoving(slow.name, slow.start, slow.stop, slow.speed, directions.left, directions.right, boardSquares)
    }, slow.speed)

    setInterval(function () {
        ghostMoving(fast.name, fast.start, fast.stop, fast.speed, directions.top, directions.down, boardSquares)
    }, fast.speed)

    setInterval(function () {
        ghostMoving(leftMiddle.name, leftMiddle.start, leftMiddle.stop, leftMiddle.speed, directions.left, directions.right, boardSquares)
    }, leftMiddle.speed)



})