import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 async headers() {
      return [
        {
          // Serve apple-app-site-association with correct content-type
          source: '/.well-known/apple-app-site-association',
          headers: [
            {
              key: 'Content-Type',
              value: 'application/json',
            },
          ],
        },
        {
          // Serve assetlinks.json with correct content-type
          source: '/.well-known/assetlinks.json',
          headers: [
            {
              key: 'Content-Type',
              value: 'application/json',
            },
          ],
        },
      ];
    },
};

export default nextConfig;
