/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	output: "standalone",
	env: {
		BASE_URL: process.env.HOST,
	},
};

const withNextEnv = require("next-env");
module.exports = withNextEnv();

module.exports = nextConfig;

module.exports = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/login",
				permanent: true,
			},
		];
	},
};
