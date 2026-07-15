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

The contact form posts to an AWS HTTP API backed by Lambda and Amazon SES. The infrastructure is defined in `infrastructure/contact-form.yaml`, including the Route 53 records for SPF, custom MAIL FROM, and DMARC authentication. The SES domain identity uses 2048-bit Easy DKIM records in Route 53. Messages are sent from `portfolio@martintulala.com` and delivered privately to the configured contact address.

For a new AWS account, create the SES domain identity in `us-east-1` with 2048-bit Easy DKIM and publish its three generated CNAME records before deploying the stack. The stack then manages the contact API, Lambda function, IAM policy, custom MAIL FROM records, SPF, and DMARC.
