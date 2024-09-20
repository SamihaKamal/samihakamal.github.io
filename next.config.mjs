/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        domains: ['drive.google.com'], // Add drive.google.com to the list of allowed domains
      },
};

export default nextConfig;
