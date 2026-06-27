# Security Policy

This project follows basic security practices for website development and third-party integrations.

## Responsible Disclosure

If you discover a security vulnerability, please report it privately to the repository owner or maintainer. Do not create a public issue if the vulnerability could expose sensitive data.

## Dependency Updates

- Keep dependencies up to date using `npm outdated`.
- Patch known vulnerabilities promptly.
- Use reliable sources for packages and avoid untrusted libraries.

## Sensitive Data

- Do not commit secrets, API keys, or confidential credentials to the repository.
- Store any production secrets securely outside of the codebase.
- Use environment variables for runtime configuration if applicable.

## Production Considerations

- Serve the app from HTTPS in production.
- Validate and sanitize any user input if adding form-based features.
- Review third-party integrations such as WhatsApp links and analytics for privacy compliance.

## Security Practices for Contributors

- Review code changes for accidental exposure of private information.
- Prefer safe defaults when adding new features.
- Keep external links intentional and verified.
