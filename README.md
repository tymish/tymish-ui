# Studios

The Angular single page application (SPA) for studios to manage invoices.

A studio is a business that hires vendors (Dance instructors, or contractors).
Once a month, each vendor submits invoices to the studio, and the studio admin review them.
Once reviewed, the studio admin can mark them as paid.

## Use Cases

1. Studio admin can view an invoice
2. Studio admin can view outstanding invoices
3. Studio admin can pay an invoice (Mark as paid, not actually send money for now...)

## Developer Setup

1. `yarn` restore dependencies
2. `yarn start` run the app at https://127.0.0.1:4200

## Generate service from swagger

- `yarn gen-api`
