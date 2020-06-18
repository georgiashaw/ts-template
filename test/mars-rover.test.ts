class MarsRover {
    run(command: string): string {
        if(command) {
            return "0,1,N";
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
});
