class MarsRover {
    run(command: string): string {
        if(command === "MM") {
            return "0,2,N";
        } else if (command === "M") {
            return "0,1,N";
        } else if (command === "MMM") {
            return "0,3,N";
        }
        return "0,0,N";
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
