# Next.js 15 useRouter Hook Error Navigating to Home Page

This repository demonstrates a bug encountered in Next.js 15 when using the `useRouter` hook to navigate to the home page ('/').  The issue arises when attempting to navigate directly to the root path, leading to an unexpected error.

## Bug Description

When clicking a button that uses `router.push('/')` to navigate to the home page, Next.js 15 throws an error. This does not occur when navigating to other pages.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Click the 'Go to Home' button.

## Solution

The solution involves ensuring that the path you're pushing to is not just '/', but explicitly includes the leading slash: `router.push('/');`

## Additional Notes

This issue highlights a potential edge case within the `useRouter` hook in Next.js 15.  Always include the leading slash when using `router.push` to ensure consistent behavior across different routes.