# Description

NestJS REST API application to query company data points from the database dynamically.

Single query can return multiple data points for a single company from a single table.

# Get Started

Running API will seed initial company data into SQLite database file.

TO DO's can be found in code for supposed improvements that were not done due to time limit.

# Tests

Only integration tests are included that run NestJS app in-memory with the seeded data and call controller directly.

In case there would be more logic in the API, unit tests with mocks would be needed.

E2E tests are not included as Bruno API was used to test the API. Bruno queries can be found in `src/api/bruno` folder.
