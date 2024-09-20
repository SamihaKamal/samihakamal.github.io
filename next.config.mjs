/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'drive.google.com',
            
          },
      ], // Add drive.google.com to the list of allowed domains
      },
};

export default nextConfig;
