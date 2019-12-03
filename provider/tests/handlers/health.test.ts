import healthCheckHandler from "../../src/handlers/health";

describe("HealthCheck Handler", () => {
    it("should return correct response", () => {
        const req = {};
        const sendStub = jest.fn();
        const res = {send: sendStub};

        healthCheckHandler(req, res);

        expect(sendStub).toHaveBeenCalledWith("Hello World!");
    });
});
