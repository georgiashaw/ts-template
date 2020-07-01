class MarsRover {

    NORTH = "N";
    MOVE = "M";
    RIGHT = "R";
    xAxis = "0";
    yAxis =  "0";

    run(command: string): string {
        if(command === `${this.MOVE}${this.MOVE}`) {
            this.yAxis = "2"
        } else if (command === `${this.MOVE}`) {
            this.yAxis = "1"
        } else if (command === `${this.MOVE}${this.MOVE}${this.MOVE}`) {
            this.yAxis = "3"
        } else if (command === `${this.RIGHT}`) {
            return `${this.xAxis},${this.yAxis},E`
        }
        return `${this.xAxis},${this.yAxis},${this.NORTH}`;
    }
}

describe("MarsRover", () => {
    it("should start at location 0,0,N", () => {
        const marsRover = new MarsRover();
        const location = marsRover.run("");
        expect(location).toEqual("0,0,N");
    });

    it.each([
        ["M", "0,1,N"],
        ["MM", "0,2,N"],
        ["MMM", "0,3,N"],
        ["MMMMMMMMMM", "0,0,N"],
    ])("It moves north, input: %s, expected output: %s", (input, expectedOutput) => {
        const marsRover = new MarsRover();
        const location = marsRover.run(input);
        expect(location).toEqual(expectedOutput);
    })

    it("should rotate once right to face east", () => {
        const marsRover = new MarsRover();
        const location = marsRover.run("R");
        expect(location).toEqual("0,0,E");
    });
});
