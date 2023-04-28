import Pawn from "./pawn";
import King from "./king";

class Chessboard {
    constructor() {
        this.matrix = [];

        for (let i = 0; i < 8; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < 8; j++) {
                this.matrix[i][j] = null;
            }
        }
    }
    
    initDefaultMatrix() {
        this.matrix = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
        ]
    }
}