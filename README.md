# Martin Tulala — Portfolio Website

A dependency-free, responsive portfolio designed for AWS Amplify Hosting.

## Add the supplied photos

Save the two image files into `assets/` using these exact names:

- `martin-portrait.png`
- `loki.png`

The site includes intentional branded fallbacks until those files are present.

## Preview locally

Open `index.html` directly in a browser. No install or build step is required.

## Deploy with AWS Amplify

Connect Amplify Hosting to the GitHub repository and select the branch containing these files. Amplify will detect `amplify.yml` and publish the static site.

The contact form posts to an AWS HTTP API backed by Lambda and Amazon SES. The infrastructure is defined in `infrastructure/contact-form.yaml`; its SES email identity must remain verified in `us-east-1` for delivery to succeed.
