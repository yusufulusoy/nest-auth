<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">NEST-AUTH</h1>
</p>
<p align="center">
    NestJS Authentication with Bcrypt, JWT, Redis, GraphQL and PostgreSQL
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/yusufulusoy/nest-auth?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/yusufulusoy/nest-auth?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/yusufulusoy/nest-auth?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/yusufulusoy/nest-auth?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/GraphQL-E10098.svg?style=flat&logo=GraphQL&logoColor=white" alt="GraphQL">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running nest-auth](#-running-nest-auth)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

Nest-auth is a cutting-edge authentication solution designed for modern web applications. Built on top of the powerful NestJS framework, it leverages the best practices in security and software design patterns to provide a comprehensive, out-of-the-box authentication system. This project aims to simplify the integration of authentication mechanisms into your applications, allowing developers to focus more on core features rather than the complexities of secure user authentication.

At its core, nest-auth incorporates a variety of security features such as JWT-based stateless authentication, social login strategies, and role-based access control, making it a versatile choice for any project. Whether you're building a small hobby project or a large-scale enterprise application, nest-auth offers the scalability and flexibility needed to meet your requirements.

Designed with developer experience in mind, nest-auth is fully documented and comes with a suite of examples to get you started quickly. Its modular architecture and the use of TypeScript make it easy to extend and maintain, ensuring that your authentication layer remains robust and up-to-date with the latest security standards.

Join the growing community of developers who trust nest-auth for their authentication needs and take the first step towards securing your application today.


## 📦 Features

- **Comprehensive Authentication System**: Utilizes a robust authentication system designed to secure your application, including guards and decorators for fine-grained access control.
- **GraphQL Integration**: Offers full support for GraphQL, enabling you to build flexible and efficient APIs for your applications.
- **Docker Support**: Includes a `docker-compose.yml` file for easy containerization and deployment, ensuring your application is ready for production environments.
- **TypeScript Support**: Fully written in TypeScript, providing strong typing and modern JavaScript features for a more maintainable codebase.
- **Configurable Environment**: Comes with a customizable configuration setup (`app.config.ts` and `auth.config.ts`), allowing for easy adjustments to meet your project's needs.
- **Unit Testing Ready**: Equipped with Jest configurations for both unit and integration tests (`auth.service.spec.ts` and `auth.resolver.spec.ts`), ensuring your code is reliable and bug-free.
- **ESLint and Prettier Integration**: Pre-configured with ESLint and Prettier for consistent code formatting and linting, helping maintain code quality.
- **Modular Structure**: Features a modular repository structure, making it easy to navigate and scale your application as it grows.
- **PNPM Package Management**: Utilizes PNPM for efficient and fast package management, reducing node_modules size and installation time.

---

## 📂 Repository Structure

```sh
└── nest-auth/
    ├── docker-compose.yml
    ├── nest-cli.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── src
    │   ├── app.config.ts
    │   ├── app.module.ts
    │   ├── auth
    │   │   ├── auth.config.ts
    │   │   ├── auth.guard.ts
    │   │   ├── auth.module.ts
    │   │   ├── auth.resolver.spec.ts
    │   │   ├── auth.resolver.ts
    │   │   ├── auth.service.spec.ts
    │   │   ├── auth.service.ts
    │   │   ├── decorators
    │   │   │   ├── active-auth.decorator.ts
    │   │   │   └── public.decorator.ts
    │   │   ├── dto
    │   │   │   ├── refresh-token.input.ts
    │   │   │   ├── signin.input.ts
    │   │   │   └── signup.input.ts
    │   │   ├── entities
    │   │   │   └── auth.entity.ts
    │   │   └── interfaces
    │   │       ├── payload.interface.ts
    │   │       └── token.interface.ts
    │   ├── core
    │   │   ├── config
    │   │   │   ├── config.enum.ts
    │   │   │   ├── config.interface.ts
    │   │   │   ├── config.module.ts
    │   │   │   └── config.validation.ts
    │   │   ├── database
    │   │   │   ├── database.config.ts
    │   │   │   └── database.module.ts
    │   │   ├── graphql
    │   │   │   ├── graphql.config.ts
    │   │   │   └── graphql.module.ts
    │   │   └── redis
    │   │       ├── redis.config.ts
    │   │       ├── redis.constants.ts
    │   │       ├── redis.module.ts
    │   │       ├── redis.service.spec.ts
    │   │       └── redis.service.ts
    │   ├── main.ts
    │   ├── schema.gql
    │   └── users
    │       ├── dto
    │       │   └── update-user.input.ts
    │       ├── entities
    │       │   └── user.entity.ts
    │       ├── password
    │       │   ├── password.service.spec.ts
    │       │   └── password.service.ts
    │       ├── users.module.ts
    │       ├── users.resolver.spec.ts
    │       ├── users.resolver.ts
    │       ├── users.service.spec.ts
    │       └── users.service.ts
    ├── test
    │   ├── app.e2e-spec.ts
    │   └── jest-e2e.json
    ├── tsconfig.build.json
    └── tsconfig.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                            | Summary                         |
| ---                                                                                             | ---                             |
| [docker-compose.yml](https://github.com/yusufulusoy/nest-auth/blob/master/docker-compose.yml)   | <code>► INSERT-TEXT-HERE</code> |
| [tsconfig.build.json](https://github.com/yusufulusoy/nest-auth/blob/master/tsconfig.build.json) | <code>► INSERT-TEXT-HERE</code> |
| [tsconfig.json](https://github.com/yusufulusoy/nest-auth/blob/master/tsconfig.json)             | <code>► INSERT-TEXT-HERE</code> |
| [package.json](https://github.com/yusufulusoy/nest-auth/blob/master/package.json)               | <code>► INSERT-TEXT-HERE</code> |
| [nest-cli.json](https://github.com/yusufulusoy/nest-auth/blob/master/nest-cli.json)             | <code>► INSERT-TEXT-HERE</code> |
| [pnpm-lock.yaml](https://github.com/yusufulusoy/nest-auth/blob/master/pnpm-lock.yaml)           | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>test</summary>

| File                                                                                         | Summary                         |
| ---                                                                                          | ---                             |
| [app.e2e-spec.ts](https://github.com/yusufulusoy/nest-auth/blob/master/test/app.e2e-spec.ts) | <code>► INSERT-TEXT-HERE</code> |
| [jest-e2e.json](https://github.com/yusufulusoy/nest-auth/blob/master/test/jest-e2e.json)     | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src</summary>

| File                                                                                    | Summary                         |
| ---                                                                                     | ---                             |
| [app.config.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/app.config.ts) | <code>► INSERT-TEXT-HERE</code> |
| [schema.gql](https://github.com/yusufulusoy/nest-auth/blob/master/src/schema.gql)       | <code>► INSERT-TEXT-HERE</code> |
| [app.module.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/app.module.ts) | <code>► INSERT-TEXT-HERE</code> |
| [main.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/main.ts)             | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.users</summary>

| File                                                                                                            | Summary                         |
| ---                                                                                                             | ---                             |
| [users.service.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/users/users.service.ts)             | <code>► INSERT-TEXT-HERE</code> |
| [users.module.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/users/users.module.ts)               | <code>► INSERT-TEXT-HERE</code> |
| [users.resolver.spec.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/users/users.resolver.spec.ts) | <code>► INSERT-TEXT-HERE</code> |
| [users.service.spec.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/users/users.service.spec.ts)   | <code>► INSERT-TEXT-HERE</code> |
| [users.resolver.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/users/users.resolver.ts)           | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.users.password</summary>

| File                                                                                                                         | Summary                         |
| ---                                                                                                                          | ---                             |
| [password.service.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/users/password/password.service.ts)           | <code>► INSERT-TEXT-HERE</code> |
| [password.service.spec.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/users/password/password.service.spec.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.users.entities</summary>

| File                                                                                                     | Summary                         |
| ---                                                                                                      | ---                             |
| [user.entity.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/users/entities/user.entity.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.users.dto</summary>

| File                                                                                                            | Summary                         |
| ---                                                                                                             | ---                             |
| [update-user.input.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/users/dto/update-user.input.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.core.graphql</summary>

| File                                                                                                         | Summary                         |
| ---                                                                                                          | ---                             |
| [graphql.module.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/graphql/graphql.module.ts) | <code>► INSERT-TEXT-HERE</code> |
| [graphql.config.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/graphql/graphql.config.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.core.redis</summary>

| File                                                                                                               | Summary                         |
| ---                                                                                                                | ---                             |
| [redis.constants.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/redis/redis.constants.ts)       | <code>► INSERT-TEXT-HERE</code> |
| [redis.service.spec.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/redis/redis.service.spec.ts) | <code>► INSERT-TEXT-HERE</code> |
| [redis.service.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/redis/redis.service.ts)           | <code>► INSERT-TEXT-HERE</code> |
| [redis.config.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/redis/redis.config.ts)             | <code>► INSERT-TEXT-HERE</code> |
| [redis.module.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/redis/redis.module.ts)             | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.core.database</summary>

| File                                                                                                            | Summary                         |
| ---                                                                                                             | ---                             |
| [database.module.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/database/database.module.ts) | <code>► INSERT-TEXT-HERE</code> |
| [database.config.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/database/database.config.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.core.config</summary>

| File                                                                                                              | Summary                         |
| ---                                                                                                               | ---                             |
| [config.validation.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/config/config.validation.ts) | <code>► INSERT-TEXT-HERE</code> |
| [config.interface.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/config/config.interface.ts)   | <code>► INSERT-TEXT-HERE</code> |
| [config.enum.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/config/config.enum.ts)             | <code>► INSERT-TEXT-HERE</code> |
| [config.module.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/core/config/config.module.ts)         | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.auth</summary>

| File                                                                                                         | Summary                         |
| ---                                                                                                          | ---                             |
| [auth.module.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/auth.module.ts)               | <code>► INSERT-TEXT-HERE</code> |
| [auth.resolver.spec.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/auth.resolver.spec.ts) | <code>► INSERT-TEXT-HERE</code> |
| [auth.config.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/auth.config.ts)               | <code>► INSERT-TEXT-HERE</code> |
| [auth.guard.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/auth.guard.ts)                 | <code>► INSERT-TEXT-HERE</code> |
| [auth.service.spec.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/auth.service.spec.ts)   | <code>► INSERT-TEXT-HERE</code> |
| [auth.resolver.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/auth.resolver.ts)           | <code>► INSERT-TEXT-HERE</code> |
| [auth.service.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/auth.service.ts)             | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.auth.entities</summary>

| File                                                                                                    | Summary                         |
| ---                                                                                                     | ---                             |
| [auth.entity.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/entities/auth.entity.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.auth.interfaces</summary>

| File                                                                                                                  | Summary                         |
| ---                                                                                                                   | ---                             |
| [payload.interface.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/interfaces/payload.interface.ts) | <code>► INSERT-TEXT-HERE</code> |
| [token.interface.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/interfaces/token.interface.ts)     | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.auth.dto</summary>

| File                                                                                                               | Summary                         |
| ---                                                                                                                | ---                             |
| [signin.input.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/dto/signin.input.ts)               | <code>► INSERT-TEXT-HERE</code> |
| [signup.input.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/dto/signup.input.ts)               | <code>► INSERT-TEXT-HERE</code> |
| [refresh-token.input.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/dto/refresh-token.input.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.auth.decorators</summary>

| File                                                                                                                          | Summary                         |
| ---                                                                                                                           | ---                             |
| [pu## 🛠 Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

## 📦 Features

- **Comprehensive Authentication System**: Utilizes a robust authentication system designed to secure your application, including guards and decorators for fine-grained access control.
- **GraphQL Integration**: Offers full support for GraphQL, enabling you to build flexible and efficient APIs for your applications.
- **Docker Support**: Includes a `docker-compose.yml` file for easy containerization and deployment, ensuring your application is ready for production environments.
- **TypeScript Support**: Fully written in TypeScript, providing strong typing and modern JavaScript features for a more maintainable codebase.
- **Configurable Environment**: Comes with a customizable configuration setup (`app.config.ts` and `auth.config.ts`), allowing for easy adjustments to meet your project's needs.
- **Unit Testing Ready**: Equipped with Jest configurations for both unit and integration tests (`auth.service.spec.ts` and `auth.resolver.spec.ts`), ensuring your code is reliable and bug-free.
- **ESLint and Prettier Integration**: Pre-configured with ESLint and Prettier for consistent code formatting and linting, helping maintain code quality.
- **Modular Structure**: Features a modular repository structure, making it easy to navigate and scale your application as it grows.
- **PNPM Package Management**: Utilizes PNPM for efficient and fast package management, reducing node_modules size and installation time.orators/public.decorator.ts)           | <code>► INSERT-TEXT-HERE</code> |
| [active-auth.decorator.ts](https://github.com/yusufulusoy/nest-auth/blob/master/src/auth/decorators/active-auth.decorator.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

---

## 🚀 Getting Started

### ⚙️ Installation

1. Clone the nest-auth repository:

```sh
git clone https://github.com/yusufulusoy/nest-auth
```

2. Change to the project directory:

```sh
cd nest-auth
```

3. Install the dependencies:

```sh
pnpm install
```

### 🤖 Running nest-auth

Use the following command to run nest-auth:

```sh
pnpm run build && node dist/main.js
```

### 🧪 Tests

To execute tests, run:

```sh
pnpm test
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/yusufulusoy/nest-auth/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/yusufulusoy/nest-auth/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/yusufulusoy/nest-auth/issues)**: Submit bugs found or log feature requests for Nest-auth.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/yusufulusoy/nest-auth
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the MIT License.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---