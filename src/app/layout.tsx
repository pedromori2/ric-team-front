import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ricardo Team</title>
      </head>
      <body className="bg-slate-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}