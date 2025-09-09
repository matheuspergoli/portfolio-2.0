import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
		<Html lang="pt-br">
			<Head />
			<script
				defer
				src="https://umami-production-e4bd.up.railway.app/script.js"
				data-website-id="7ab69f6f-d628-445d-810a-7a97388c2bd6"
			></script>
			<body className="bg-black-dark">
				<Main />
				<NextScript />
			</body>
		</Html>
  )
}
