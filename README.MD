# Koala Cuts

Koala Cuts is a fictional business website created as a fun project to explore and showcase my web development and design skills. Designed for an imaginary landscaping service, the site offers a clear and inviting overview of various services to potential clients. This project focused on experimenting with Lerna and monorepos to efficiently manage and scale multiple packages within a single codebase. I also created all vector designs and the logo using Figma, demonstrating my ability to handle both development and design aspects to build robust, maintainable, and visually appealing web applications.

## Table of Contents

- [Features](#features)
- [Dependencies](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)

## Features

- Overview of various landscaping services
- Responsive design
- Custom vector designs and logo created using Figma
- Efficient management and scaling of multiple packages using Lerna and monorepos

## Dependencies

This project requires Lerna to manage the monorepo. You can find the Lerna documentation [here](https://lerna.js.org/docs/introduction).

## Technologies Used

- **Frontend**: Vue 3
- **Backend**: Fastify
- **Package Management**:[Lerna](https://lerna.js.org/docs/introduction).
- **Design**: Figma

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/TrevorWheeler/koala-cuts
   cd koala-cuts
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Bootstrap the packages using Lerna:**

   ```bash
   lerna exec npm i
   ```

4. **Run the development server:**
   ```bash
   lerna run dev
   ```

## Usage

After setting up the project, you can access the website at `http://localhost:8080`. The site provides an overview of various landscaping services offered by Koala Cuts.
