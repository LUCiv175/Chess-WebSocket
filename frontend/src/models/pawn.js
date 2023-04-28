export default class Pawn {
    // position {x: ..., y: ...}
    role = 'pawn'

    constructor(color, position) {
        this.color = color;
        this.position = position;
    }

    move(newPosition) {
        this.position = newPosition;
    }

    // This method is used to determine if a pawn can move to a new position
    // based on the rules of chess.
    canMove(newPosition) {
        
    }
}