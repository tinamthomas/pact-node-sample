import {like, eachLike} from '@pact-foundation/pact/dsl/matchers';
import { Pact } from '@pact-foundation/pact';
import * as path from 'path';
import getMovies from "../src/moviesLib";
jest.mock("../src/config", () => ({ default: {providerPort: 8989}}));

const port = 8989;
describe('The API', () => {
    const pact = new Pact({
        port: port,
        log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
        dir: path.resolve(process.cwd(), 'pacts'),
        consumer: 'movieSortAndDisplay',
        provider: 'movieService'
    });
    beforeAll(() => pact.setup());
    afterAll(() => pact.finalize());

    const expectedMovie = {title: like('Some movie')};
    const expectedMovies = {movies: eachLike(expectedMovie)};
    describe('Movies', () => {
        beforeEach(() => {
            const interaction = {
                uponReceiving: 'Movies info',
                withRequest: {
                    method:  'GET',
                    path:  '/movies',
                },
                willRespondWith: {
                    status: 200,
                    body: expectedMovies
                }
            };
            return pact.addInteraction(interaction);
        });

        it('should return correctly',async () => {
            await getMovies();
        });
        afterEach(() => pact.verify())
    });
});
