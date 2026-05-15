# Portfolio One Page

A responsive single-page developer portfolio built with React. This portfolio showcases my software development experience, technical skills, projects, certifications, and contact information in a clean one-page layout.

## Overview

This project is my personal developer portfolio website. It is designed to present my background as a full-stack software developer and highlight my work with Java, Spring Boot, Angular, React, Next.js, AWS, Docker, and cloud-based deployments.

The portfolio includes sections for:

- Professional summary
- Technical skills
- Work experience
- Projects
- Certifications
- Contact links
- GitHub, LinkedIn, and portfolio navigation

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend framework for building the single-page portfolio |
| JavaScript | Main programming language used in the project |
| CSS | Styling and responsive layout |
| HTML | Page structure |
| Docker | Containerizing the portfolio application |
| Nginx | Serving the production React build |
| GitHub Actions | Automating build/deployment workflows |

## Repository Structure

<pre>
.
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── public/                # Static public assets
├── src/                   # React source code and components
├── .env.local             # Local environment variables
├── .gitignore             # Files ignored by Git
├── Dockerfile             # Docker image definition
├── README.md              # Project documentation
├── jsconfig.json          # JavaScript project configuration
├── nginx-react.conf       # Nginx configuration for serving React build
├── package-lock.json      # Locked dependency versions
├── package.json           # Project scripts and dependencies
└── prettier.config.js     # Code formatting configuration
</pre>

## Features

- Single-page responsive portfolio layout
- Project showcase section
- Professional experience section
- Skills and technology overview
- Contact and social links
- Dockerized production deployment
- Nginx configuration for serving the React build
- GitHub Actions workflow support

## Deployment

This portfolio is containerized using Docker and served with Nginx in production.

The production deployment flow is:

<pre>
Source Code
   → GitHub Actions
   → Docker Build
   → Docker Image
   → Deployment Server
   → Nginx
   → Portfolio Website
</pre>

This project can be deployed as part of a self-hosted Docker-based setup using a reverse proxy such as Nginx and a secure public routing layer such as Cloudflare Tunnel.

## Local Development

Clone the repository:

<pre>
git clone https://github.com/HarryIsCodingg/Portfolio-one-page.git
cd Portfolio-one-page
</pre>

Install dependencies:

<pre>
npm install
</pre>

Start the development server:

<pre>
npm start
</pre>

The application will run locally on:

<pre>
http://localhost:3000
</pre>

## Docker Usage

Build the Docker image:

<pre>
docker build -t portfolio-one-page .
</pre>

Run the container:

<pre>
docker run -p 3000:80 portfolio-one-page
</pre>

The application will be available at:

<pre>
http://localhost:3000
</pre>

## Environment Variables

This project may use a local `.env.local` file for environment-specific configuration.

Sensitive values should not be committed to the repository. Use local environment files or deployment secrets for any private values.

## Project Purpose

The purpose of this portfolio is to provide a central place to showcase my work, projects, and technical background. It also demonstrates my ability to build, containerize, and deploy frontend applications using modern development and deployment tools.

## Technologies Used

- React
- JavaScript
- CSS
- HTML
- Docker
- Nginx
- GitHub Actions
- GitHub
