class MarsRover {
    run(command: string): string {
        if(command === "MM") {
            return "0,2,N";
        } else if (command === "M") {
            return "0,1,N"
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

    it("should move forwards to location 0,1,N", () => {
        const marsRover = new MarsRover();
        const location = marsRover.run("M");
        expect(location).toEqual("0,1,N");
    });

    it("should move forwards twice to location 0,2,N", () => {
        const marsRover = new MarsRover();
        const location = marsRover.run("MM");
        expect(location).toEqual("0,2,N");
    });

    it("should move forwards thrice to location 0,3,N", () => {
        const marsRover = new MarsRover();
        const location = marsRover.run("MMM");
        expect(location).toEqual("0,3,N");
    });
});
