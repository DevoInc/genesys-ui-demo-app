# Genesys-ui demo app

> **Warning**
> This is an `alpha` version and it is not yet production ready.

![license](https://img.shields.io/github/license/devoinc/genesys-ui-demo-app)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/devoinc/genesys-ui-demo-app/ci.yml)

This React project serves as a simple consumer for [genesys-ui](https://github.com/DevoInc/genesys-ui), a React with Typescript components library owned by _DevoInc_. It's designed to test the library's bundle and ensure that all components work as expected. Additionally, it serves as a template for understanding how to integrate `genesys-ui` into another project.

## Getting Started

Follow these steps to get started with this project:

### Installation

- Clone the repository to your local machine.
- Install the project dependencies by running `npm ci`.

### Testing the Bundle

To test the `genesys-ui` bundle, you can run this project using `npm run dev`. This will build the app and serve it on a local web server.

Open the app in your web browser and ensure that all components from the library are rendering as expected.

## Dependencies.

This project satisfies `genesys-ui` peer-dependencies by installing the following packages: `@devoinc/genesys-base-styles`, `@devoinc/genesys-brand-devo`, `@devoinc/genesys-icons`.

It also relies on `@devoinc/eslint-config-devo` and `@devoinc/prettier-config` for linting and code formatting.

## Contributing

If you find any issues with this project or have suggestions for improvement, please feel free to create an issue or submit a pull request. We welcome all contributions!

Detailed information on how to contribute is available [here](./CONTRIBUTING.md).
