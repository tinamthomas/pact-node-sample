import { Verifier } from 'pact';
import * as fs from "fs";

describe('SOS Contract Test', () => {
    const baseUrl = 'http://localhost:3000';
    const pactFilePath = 'pacts/moviesortanddisplay-movieservice.json';

    it('should run contract test', () => {
        const opts = {
            provider: 'Structured Object Service',
            providerBaseUrl: baseUrl,
            pactUrls: [fs.realpathSync(pactFilePath)],
            publishVerificationResult: true,
            providerVersion: '1.0.0',
            customProviderHeaders:
                [`Authorization: Basic ${new Buffer(`${process.env.USER_ID}:${process.env.USER_PWD}`).toString('base64')}`],
        };

        return Verifier.verifyProvider(opts);
    });
});
